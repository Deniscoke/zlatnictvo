/**
 * Tailwind config — replaces the inline `tailwind.config = {...}` block that
 * lived in index.html when we used the CDN runtime. Same theme tokens, same
 * font stack, but now compiled once at build time into a tiny static CSS file.
 *
 * The `content` array tells Tailwind which files to scan for class names so
 * unused utilities are pruned. Add new HTML/JS entry points here when needed.
 *
 * Build:
 *   npm run build          # one-shot minified output → tailwind.dist.css
 *   npm run build:watch    # incremental rebuild on save (for local dev)
 */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './script.js',
  ],
  theme: {
    extend: {
      colors: {
        // LIGHT THEME PALETTE — WCAG AA compliant on cream backdrop
        // ink-*  = text colors (all pass 4.5:1 contrast on #fdfaf2)
        // onyx-* = surface colors (cream/warm-white tones)
        // gold-* = accent colors (deeper for small-text legibility)
        ink:    { DEFAULT:'#1a1408', 2:'#3b2807', 3:'#5a3f0e', 4:'#7a5d10' },
        onyx:   { DEFAULT:'#fdfaf2', 2:'#f5ecd6', 3:'#fffbf2', 4:'#ede0bf' },
        gold:   { DEFAULT:'#7a5d10', soft:'#a8801f', hi:'#c9a961', lo:'#3b2807' },
        line:   'rgba(122,93,16,.28)',
        line2:  'rgba(122,93,16,.14)',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"','Georgia','serif'],
        sans:  ['Inter','-apple-system','system-ui','sans-serif'],
      },
      letterSpacing: { 'kicker':'.32em', 'btn':'.22em' },
    }
  },
  plugins: [],
};
