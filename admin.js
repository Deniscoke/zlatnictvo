/* ============================================================
   ALTUN ATELIER — ADMIN PANEL
   Login, photo upload (queued), gallery management.

   Auth: password sent on every write request as `Authorization: Bearer <pwd>`.
         Stored in sessionStorage (cleared when browser tab closes).
============================================================ */

const SESSION_KEY = 'altun.admin.pwd';

// ── DOM refs ───────────────────────────────────────────────────────────────
const loginView    = document.getElementById('loginView');
const galleryView  = document.getElementById('galleryView');
const loginForm    = document.getElementById('loginForm');
const passwordIn   = document.getElementById('passwordInput');
const loginBtn     = document.getElementById('loginBtn');
const loginStatus  = document.getElementById('loginStatus');
const logoutBtn    = document.getElementById('logoutBtn');
const dropZone     = document.getElementById('dropZone');
const fileInput    = document.getElementById('fileInput');
const uploadQueue  = document.getElementById('uploadQueue');
const galleryGrid  = document.getElementById('galleryGrid');
const galleryStat  = document.getElementById('galleryStatus');
const refreshBtn   = document.getElementById('refreshBtn');
const confirmModal = document.getElementById('confirmModal');
const confirmDel   = document.getElementById('confirmDelete');
const confirmCanc  = document.getElementById('confirmCancel');

let pendingDelete = null; // { url, tile }

// ── Helpers ────────────────────────────────────────────────────────────────
const setStatus = (el, msg, kind = '') => {
  el.textContent = msg;
  el.classList.remove('is-error', 'is-success');
  if (kind) el.classList.add(`is-${kind}`);
};

const getPwd  = () => sessionStorage.getItem(SESSION_KEY);
const setPwd  = pwd => sessionStorage.setItem(SESSION_KEY, pwd);
const clearPwd = () => sessionStorage.removeItem(SESSION_KEY);

const showLogin = () => {
  loginView.hidden = false;
  galleryView.hidden = true;
  logoutBtn.hidden = true;
  passwordIn.focus();
};

const showGallery = () => {
  loginView.hidden = true;
  galleryView.hidden = false;
  logoutBtn.hidden = false;
  loadGallery();
};

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

// ── Gallery list ───────────────────────────────────────────────────────────
async function loadGallery() {
  setStatus(galleryStat, 'Yükleniyor…');
  galleryGrid.innerHTML = '';

  try {
    const res = await fetch('/api/photos');
    if (!res.ok) throw new Error('list-failed');
    const { photos } = await res.json();

    if (!photos || photos.length === 0) {
      setStatus(galleryStat, '');
      galleryGrid.innerHTML = '<li class="adm-empty">Henüz fotoğraf yok. Yukarıdan yükleyin.</li>';
      return;
    }

    setStatus(galleryStat, `${photos.length} fotoğraf`);
    galleryGrid.innerHTML = photos.map(p => `
      <li class="adm-tile" data-url="${escapeAttr(p.url)}">
        <img src="${escapeAttr(p.url)}" alt="" loading="lazy" />
        <button type="button" aria-label="Sil" data-del="${escapeAttr(p.url)}">
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </li>
    `).join('');
  } catch (err) {
    setStatus(galleryStat, 'Galeri yüklenemedi', 'error');
  }
}

// ── Delete (event delegation) ─────────────────────────────────────────────
galleryGrid.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-del]');
  if (!btn) return;
  pendingDelete = {
    url:  btn.dataset.del,
    tile: btn.closest('.adm-tile')
  };
  confirmModal.hidden = false;
});

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
    if (galleryGrid.children.length === 0) loadGallery();
  } catch (err) {
    alert('Silme işlemi başarısız oldu.');
  } finally {
    confirmDel.disabled = false;
    pendingDelete = null;
    confirmModal.hidden = true;
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
  e.target.value = ''; // reset so same file can be picked again
});

async function handleFiles(fileList) {
  const files = Array.from(fileList);
  for (const file of files) {
    const li = createQueueItem(file);
    uploadQueue.appendChild(li);
    await uploadOne(file, li);
  }
  loadGallery(); // refresh grid
}

function createQueueItem(file) {
  const li = document.createElement('li');
  li.innerHTML = `
    <span class="name">${escapeHtml(file.name)}</span>
    <span class="state">Bekliyor</span>
  `;
  return li;
}

async function uploadOne(file, li) {
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

  li.classList.add('is-uploading');
  stateEl.textContent = 'Yükleniyor…';

  try {
    const res = await fetch('/api/photos', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${getPwd() || ''}`,
        'Content-Type':  file.type
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

    // Auto-remove from queue after a moment
    setTimeout(() => li.remove(), 2500);
  } catch (err) {
    li.classList.remove('is-uploading');
    li.classList.add('is-error');
    stateEl.textContent = 'Hata';
    console.error(err);
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
if (getPwd()) {
  showGallery();
} else {
  showLogin();
}
