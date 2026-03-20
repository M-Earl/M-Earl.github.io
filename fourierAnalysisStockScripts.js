/* =========================================================
   Fourier Stock Analysis — Scripts (Vanilla JS, no jQuery)
   ========================================================= */

// ── Load header & footer components ──────────────────────
async function loadComponent(id, url) {
  try {
    const res = await fetch(url);
    if (!res.ok) return;
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
  } catch (e) {
    // Silently ignore (e.g. offline / direct file:// open)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadComponent('header', 'header.html');
  loadComponent('footer', 'footer.html');

  // ── Scroll-triggered fade-in via IntersectionObserver ──
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  document.querySelectorAll('.fadein').forEach(el => observer.observe(el));
});
