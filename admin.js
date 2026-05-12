/* ============================================================
   ALTUN ATELIER — ADMIN PANEL
   Login, multi-category photo upload (Galeri / Koleksiyonlar),
   and gallery management.

   Auth: password sent on every write request as `Authorization: Bearer <pwd>`.
         Stored in sessionStorage (cleared when browser tab closes).
============================================================ */

const SESSION_KEY = 'altun.admin.pwd';

// Per-category metadata: display name, slot limit (Infinity = unlimited),
// whether title input is required, and a hint string shown under the dropdown.
const CATEGORY_META = {
  gallery:     { label: 'Galeri',           limit: Infinity, needsTitle: false,
                 hint: 'Yaşam ve atölye fotoğrafları. Sınırsız — yeni fotoğraflar galerinin başına eklenir.' },
  collections: { label: 'Koleksiyonlar',    limit: Infinity, needsTitle: true,
                 hint: 'Ürün kartı olarak eklenir. Başlık (örn. "Hilal Kolye") site üzerinde görünür.' },
  hero:        { label: 'Ana Slider',       limit: 4,        needsTitle: false,
                 hint: 'Üst sayfa slider — en yeni 4 fotoğraf statik fotoğrafları değiştirir. 4\'ten fazla yüklerseniz, en eskileri silin.' },
  story:       { label: 'Atölye Hikâyesi',  limit: 1,        needsTitle: false,
                 hint: 'Atölye hikâye bölümünde gösterilen tek usta fotoğrafı. En son yüklenen kullanılır.' },
  trust:       { label: 'Güven Bölümü',     limit: 3,        needsTitle: false,
                 hint: 'Butik / hizmet / paket — 3 fotoğraflık ızgara. En yeni 3 fotoğraf kullanılır.' },
  banner:      { label: 'Banner',           limit: 1,        needsTitle: false,
                 hint: 'Alıntı bölümünün arkasındaki büyük yaşam fotoğrafı. En son yüklenen kullanılır.' }
};

// ── DOM refs ───────────────────────────────────────────────────────────────
const loginView      = document.getElementById('loginView');
const galleryView    = document.getElementById('galleryView');
const loginForm      = document.getElementById('loginForm');
const passwordIn     = document.getElementById('passwordInput');
const loginBtn       = document.getElementById('loginBtn');
const loginStatus    = document.getElementById('loginStatus');
const logoutBtn      = document.getElementById('logoutBtn');

const dropZone       = document.getElementById('dropZone');
const fileInput      = document.getElementById('fileInput');
const uploadQueue    = document.getElementById('uploadQueue');
const categorySelect = document.getElementById('categorySelect');
const titleLabel     = document.getElementById('titleLabel');
const titleInput     = document.getElementById('titleInput');
const categoryHint   = document.getElementById('categoryHint');

const galleryStat    = document.getElementById('galleryStatus');
const refreshBtn     = document.getElementById('refreshBtn');

const confirmModal   = document.getElementById('confirmModal');
const confirmDel     = document.getElementById('confirmDelete');
const confirmCanc    = document.getElementById('confirmCancel');

let pendingDelete = null; // { url, tile }

// ── Helpers ────────────────────────────────────────────────────────────────
const setStatus = (el, msg, kind = '') => {
  el.textContent = msg;
  el.classList.remove('is-error', 'is-success');
  if (kind) el.classList.add(`is-${kind}`);
};

const getPwd   = () => sessionStorage.getItem(SESSION_KEY);
const setPwd   = pwd => sessionStorage.setItem(SESSION_KEY, pwd);
const clearPwd = () => sessionStorage.removeItem(SESSION_KEY);

const showLogin = () => {
  loginView.hidden = false;
  galleryView.hidden = true;
  logoutBtn.hidden = true;
  uploadQueue.innerHTML = ''; // clear stale queue items
  setTimeout(() => passwordIn?.focus(), 50);
};

const showGallery = () => {
  loginView.hidden = true;
  galleryView.hidden = false;
  logoutBtn.hidden = false;
  loadGallery();
};

// ── Sync UI when category changes — show/hide title field, update hint ───
function syncCategoryUI() {
  const meta = CATEGORY_META[categorySelect.value] || CATEGORY_META.gallery;
  titleLabel.hidden = !meta.needsTitle;
  if (!meta.needsTitle) titleInput.value = '';
  if (categoryHint) categoryHint.textContent = meta.hint || '';
}
categorySelect.addEventListener('change', syncCategoryUI);

// ── Login ──────────────────────────────────────────────────────────────────
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const pwd = passwordIn.value;
  if (!pwd) return;

  loginBtn.disabled = true;
  setStatus(loginStatus, 'Doğrulanıyor…');

  try {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: pwd })
    });
    const data = await res.json().catch(() => ({}));

    if (res.ok && data.ok) {
      setPwd(pwd);
      passwordIn.value = '';
      setStatus(loginStatus, '');
      showGallery();
    } else {
      setStatus(loginStatus, data.error || 'Giriş başarısız', 'error');
    }
  } catch (err) {
    setStatus(loginStatus, 'Sunucuya ulaşılamadı', 'error');
  } finally {
    loginBtn.disabled = false;
  }
});

logoutBtn.addEventListener('click', () => {
  clearPwd();
  showLogin();
});

// ── Gallery list — load all categories and render one grid per section ───
async function loadGallery() {
  setStatus(galleryStat, 'Yükleniyor…');
  // Clear all grids
  document.querySelectorAll('[data-grid]').forEach(g => g.innerHTML = '');

  try {
    const res = await fetch('/api/photos', { cache: 'no-store' });
    if (!res.ok) throw new Error('list-failed');
    const { byCategory } = await res.json();

    let total = 0;
    for (const [cat, meta] of Object.entries(CATEGORY_META)) {
      const photos = byCategory?.[cat] || [];
      total += photos.length;

      // Render grid for this category
      const grid = document.querySelector(`[data-grid="${cat}"]`);
      if (grid) renderGrid(grid, photos, `Henüz ${meta.label.toLowerCase()} fotoğrafı yok.`);

      // Render slot info badge (e.g. "2 / 4 kullanılıyor")
      const slotInfo = document.querySelector(`[data-slot="${cat}"]`);
      if (slotInfo) {
        if (meta.limit === Infinity) {
          slotInfo.textContent = `${photos.length} fotoğraf`;
          slotInfo.className = 'adm-slot-info';
        } else {
          const used = Math.min(photos.length, meta.limit);
          const extra = photos.length - meta.limit;
          slotInfo.textContent = `${used} / ${meta.limit} kullanılıyor`
            + (extra > 0 ? ` (+${extra} kullanılmıyor)` : '');
          slotInfo.className = 'adm-slot-info'
            + (photos.length >= meta.limit ? ' is-full' : '')
            + (extra > 0 ? ' is-over' : '');
        }
      }
    }

    setStatus(galleryStat, `${total} toplam fotoğraf`);
  } catch (err) {
    setStatus(galleryStat, 'Galeri yüklenemedi', 'error');
  }
}

function renderGrid(grid, photos, emptyMsg) {
  if (!photos.length) {
    grid.innerHTML = `<li class="adm-empty">${escapeHtml(emptyMsg)}</li>`;
    return;
  }
  // Build "Move to..." dropdown options (excluding current category)
  const currentCat = grid.dataset.grid;
  const moveOpts = Object.entries(CATEGORY_META)
    .filter(([cat]) => cat !== currentCat)
    .map(([cat, m]) => `<option value="${cat}">→ ${escapeHtml(m.label)}</option>`)
    .join('');

  grid.innerHTML = photos.map(p => `
    <li class="adm-tile" draggable="true"
        data-url="${escapeAttr(p.url)}"
        data-cat="${escapeAttr(currentCat)}"
        data-title="${escapeAttr(p.title || '')}">
      <img src="${escapeAttr(p.url)}" alt="${escapeAttr(p.title || '')}" loading="lazy" />
      ${p.title ? `<span class="adm-tile-label">${escapeHtml(p.title)}</span>` : ''}
      <select class="adm-tile-move" aria-label="Başka bölüme taşı">
        <option value="">Taşı…</option>
        ${moveOpts}
      </select>
      <button type="button" class="adm-tile-del" aria-label="Sil" data-del="${escapeAttr(p.url)}">
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
    </li>
  `).join('');
}

// ── Delete (event delegation across ALL category grids) ───────────────────
document.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-del]');
  if (!btn) return;
  pendingDelete = {
    url:  btn.dataset.del,
    tile: btn.closest('.adm-tile')
  };
  confirmModal.hidden = false;
});

// ── Move via per-tile select dropdown (mobile-friendly alternative to drag) ─
document.addEventListener('change', async (e) => {
  const sel = e.target.closest('.adm-tile-move');
  if (!sel || !sel.value) return;
  const tile = sel.closest('.adm-tile');
  const newCat = sel.value;
  sel.value = ''; // reset immediately so user can see selection cleared
  await moveOne(tile, newCat);
});

// ── Drag-and-drop between grids (desktop) ─────────────────────────────────
// On dragstart we stash the source URL + tile reference. Each grid is a
// drop zone — drop triggers the same moveOne() used by the select fallback.
let dragSource = null;

document.addEventListener('dragstart', (e) => {
  const tile = e.target.closest('.adm-tile[draggable="true"]');
  if (!tile) return;
  dragSource = tile;
  e.dataTransfer.effectAllowed = 'move';
  // Some browsers require setData to be called for drag to work
  e.dataTransfer.setData('text/plain', tile.dataset.url || '');
  tile.classList.add('is-dragging');
});

document.addEventListener('dragend', (e) => {
  const tile = e.target.closest('.adm-tile');
  if (tile) tile.classList.remove('is-dragging');
  document.querySelectorAll('.adm-grid.is-drop-target')
    .forEach(g => g.classList.remove('is-drop-target'));
  dragSource = null;
});

// Use bubbling drag events on document; identify the target grid via closest
document.addEventListener('dragover', (e) => {
  const grid = e.target.closest('.adm-grid[data-grid]');
  if (!grid || !dragSource) return;
  // Only highlight if it's a DIFFERENT category than the source
  if (grid.dataset.grid === dragSource.dataset.cat) return;
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  grid.classList.add('is-drop-target');
});

document.addEventListener('dragleave', (e) => {
  const grid = e.target.closest('.adm-grid[data-grid]');
  if (!grid) return;
  // Only remove highlight when leaving the grid entirely (not when moving over child tiles)
  if (!grid.contains(e.relatedTarget)) {
    grid.classList.remove('is-drop-target');
  }
});

document.addEventListener('drop', async (e) => {
  const grid = e.target.closest('.adm-grid[data-grid]');
  if (!grid || !dragSource) return;
  e.preventDefault();
  grid.classList.remove('is-drop-target');
  const newCat = grid.dataset.grid;
  if (newCat === dragSource.dataset.cat) return; // dropped on same grid
  await moveOne(dragSource, newCat);
});

// ── Shared move helper (used by both drag-drop and select dropdown) ───────
async function moveOne(tile, newCat) {
  if (!tile || !newCat) return;
  const meta = CATEGORY_META[newCat];
  if (!meta) return;

  // Determine title — keep existing if present, otherwise prompt for collections
  let title = tile.dataset.title || '';
  if (meta.needsTitle && !title) {
    title = prompt(`${meta.label} için başlık girin:`)?.trim() || '';
    if (!title) return; // user cancelled
  }
  if (!meta.needsTitle) title = '';

  // Visual feedback: dim the tile while the move is in progress
  tile.style.opacity = '0.45';
  tile.style.pointerEvents = 'none';

  try {
    const params = new URLSearchParams({
      url: tile.dataset.url,
      category: newCat,
      title: encodeURIComponent(title)
    });
    const res = await fetch(`/api/photos?${params}`, {
      method: 'PATCH',
      headers: { 'Authorization': `Bearer ${getPwd() || ''}` }
    });

    if (res.status === 401) {
      clearPwd();
      showLogin();
      setStatus(loginStatus, 'Oturum süresi doldu. Tekrar giriş yapın.', 'error');
      return;
    }

    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.ok) {
      throw new Error(data.error || 'move-failed');
    }

    // Success — refresh grids
    loadGallery();
  } catch (err) {
    alert(`Taşıma başarısız: ${err.message || err}`);
    tile.style.opacity = '';
    tile.style.pointerEvents = '';
  }
}

confirmCanc.addEventListener('click', () => {
  pendingDelete = null;
  confirmModal.hidden = true;
});

confirmDel.addEventListener('click', async () => {
  if (!pendingDelete) return;
  const { url, tile } = pendingDelete;
  confirmDel.disabled = true;

  try {
    const res = await fetch(`/api/photos?url=${encodeURIComponent(url)}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${getPwd() || ''}` }
    });
    if (res.status === 401) {
      clearPwd();
      confirmModal.hidden = true;
      showLogin();
      setStatus(loginStatus, 'Oturumunuz sona erdi. Tekrar giriş yapın.', 'error');
      return;
    }
    if (!res.ok) throw new Error('delete-failed');
    tile?.remove();
  } catch (err) {
    alert('Silme işlemi başarısız oldu.');
  } finally {
    confirmDel.disabled = false;
    pendingDelete = null;
    confirmModal.hidden = true;
    loadGallery(); // refresh to be safe
  }
});

// ── Upload (drag, click, file picker) ──────────────────────────────────────
['dragenter', 'dragover'].forEach(ev =>
  dropZone.addEventListener(ev, (e) => {
    e.preventDefault();
    dropZone.classList.add('is-dragover');
  })
);
['dragleave', 'drop'].forEach(ev =>
  dropZone.addEventListener(ev, (e) => {
    e.preventDefault();
    dropZone.classList.remove('is-dragover');
  })
);
dropZone.addEventListener('drop', (e) => {
  if (e.dataTransfer?.files?.length) handleFiles(e.dataTransfer.files);
});
fileInput.addEventListener('change', (e) => {
  if (e.target.files?.length) handleFiles(e.target.files);
  e.target.value = '';
});

async function handleFiles(fileList) {
  const category = categorySelect.value;
  const meta = CATEGORY_META[category] || CATEGORY_META.gallery;
  const title = titleInput.value.trim();

  if (meta.needsTitle && !title) {
    alert(`${meta.label} için lütfen bir başlık girin.`);
    titleInput.focus();
    return;
  }

  const files = Array.from(fileList);
  for (const file of files) {
    const li = createQueueItem(file, category, title);
    uploadQueue.appendChild(li);
    await uploadOne(file, li, category, title);
  }
  loadGallery();
  if (meta.needsTitle) titleInput.value = '';
}

function createQueueItem(file, category, title) {
  const meta = CATEGORY_META[category] || CATEGORY_META.gallery;
  const li = document.createElement('li');
  const displayName = title ? `${title} (${file.name})` : file.name;
  li.innerHTML = `
    <span class="cat-badge">${escapeHtml(meta.label)}</span>
    <span class="name">${escapeHtml(displayName)}</span>
    <span class="state">Bekliyor</span>
  `;
  return li;
}

async function uploadOne(file, li, category, title) {
  const stateEl = li.querySelector('.state');

  // Client-side validation
  if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
    li.classList.add('is-error');
    stateEl.textContent = 'Yanlış format';
    return;
  }
  if (file.size > 4 * 1024 * 1024) {
    li.classList.add('is-error');
    stateEl.textContent = 'Çok büyük (>4MB)';
    return;
  }

  if (!getPwd()) {
    li.classList.add('is-error');
    stateEl.textContent = 'Önce giriş yapın';
    showLogin();
    return;
  }

  li.classList.add('is-uploading');
  stateEl.textContent = 'Yükleniyor…';

  try {
    const res = await fetch('/api/photos', {
      method: 'POST',
      headers: {
        'Authorization':    `Bearer ${getPwd()}`,
        'Content-Type':     file.type,
        'X-Photo-Category': category,
        // encode title to safely transit non-ASCII chars in headers
        'X-Photo-Title':    encodeURIComponent(title || '')
      },
      body: file
    });

    if (res.status === 401) {
      clearPwd();
      stateEl.textContent = 'Oturum süresi doldu';
      li.classList.remove('is-uploading');
      li.classList.add('is-error');
      showLogin();
      return;
    }

    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.ok) throw new Error(data.error || 'upload-failed');

    li.classList.remove('is-uploading');
    li.classList.add('is-done');
    stateEl.textContent = 'Tamam';

    setTimeout(() => li.remove(), 2500);
  } catch (err) {
    li.classList.remove('is-uploading');
    li.classList.add('is-error');
    // Show the actual server error message so config issues are diagnosable
    const msg = err?.message || 'Hata';
    stateEl.textContent = msg.length > 60 ? msg.slice(0, 57) + '…' : msg;
    stateEl.title = msg; // full message on hover
  }
}

// ── Refresh button ─────────────────────────────────────────────────────────
refreshBtn.addEventListener('click', loadGallery);

// ── Tiny escaping helpers ──────────────────────────────────────────────────
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[c]));
}
function escapeAttr(s) { return escapeHtml(s); }

// ── Boot ───────────────────────────────────────────────────────────────────
syncCategoryUI();
if (getPwd()) {
  showGallery();
} else {
  showLogin();
}
