/* ══════════════════════════════════════
   DS PORTFOLIO — MAIN.JS
══════════════════════════════════════ */

/* ── Navbar scroll effect ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

/* ── Hamburger menu ── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ── Tab-style page switching ──
   The site opens directly on the About section (About / Projects / Blogs / SLMs)
   as its own full "page" instead of one continuous scrolling page. */
function showTab(id) {
  const target = document.getElementById(id);
  if (!target || !target.classList.contains('tab-content')) return;

  document.querySelectorAll('.tab-content').forEach(section => {
    section.classList.toggle('active', section.id === id);
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
  });

  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

  // Re-trigger fade-up + bar animations for the newly shown tab
  target.querySelectorAll('.fade-up').forEach(el => el.classList.remove('visible'));
  requestAnimationFrame(() => {
    target.querySelectorAll('.fade-up').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 60);
    });
    const bars = target.querySelectorAll('.bar-fill');
    if (bars.length) {
      bars.forEach(bar => { bar.style.width = '0'; });
      requestAnimationFrame(() => {
        bars.forEach(bar => { bar.style.width = bar.dataset.w + '%'; });
      });
    }
  });
}

/* Any link pointing to a tab section switches tabs instead of jumping/scrolling */
function initTabLinks() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    const id = anchor.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (target && target.classList.contains('tab-content')) {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        showTab(id);
        navLinks.classList.remove('open');
      });
    }
  });
}

/* ── Blogs (loaded from data/blogs.json — no post content in index.html) ──
   Each entry: { id, title, thumbnail, body }. `body` is the full post
   content (plain text and/or simple HTML like <p>, <img>, <strong>) —
   written and hosted entirely on this site, nothing links out externally.
   Cards are rendered as floating, clickable thumbnails; clicking one opens
   the full post in an in-page reader panel. If the file is missing, empty,
   or can't be fetched (e.g. opening index.html directly instead of via a
   local server), the existing "No articles yet" empty state is shown. */
let blogPosts = [];

async function initBlogs() {
  const grid = document.getElementById('blogsGrid');
  const empty = document.getElementById('blogsEmpty');
  if (!grid || !empty) return;

  try {
    const res = await fetch('data/blogs.json');
    if (res.ok) blogPosts = await res.json();
  } catch (err) {
    console.warn('Could not load data/blogs.json (serve the site over http:// for this to work):', err);
  }

  if (!Array.isArray(blogPosts) || blogPosts.length === 0) {
    grid.style.display = 'none';
    empty.style.display = '';
    return;
  }

  empty.style.display = 'none';
  grid.style.display = '';
  grid.innerHTML = blogPosts.map((post, i) => `
    <button type="button" class="blog-float-card fade-up" data-blog-index="${i}">
      <div class="blog-float-thumb">
        <img src="${post.thumbnail}" alt="${post.title}" loading="lazy"/>
      </div>
      <span class="blog-float-title">${post.title}</span>
    </button>
  `).join('');

  grid.querySelectorAll('.blog-float-card').forEach(card => {
    card.addEventListener('click', () => {
      const post = blogPosts[Number(card.dataset.blogIndex)];
      if (post) openBlogPost(post);
    });
  });
}

function openBlogPost(post) {
  const reader = document.getElementById('blogReader');
  const title = document.getElementById('blogReaderTitle');
  const body = document.getElementById('blogReaderBody');
  if (!reader || !title || !body) return;

  title.textContent = post.title;
  body.innerHTML = post.body || '';
  reader.classList.add('open');
  reader.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeBlogPost() {
  const reader = document.getElementById('blogReader');
  if (!reader) return;
  reader.classList.remove('open');
  reader.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function initBlogReader() {
  const closeBtn = document.getElementById('blogReaderClose');
  const backdrop = document.getElementById('blogReaderBackdrop');
  if (closeBtn) closeBtn.addEventListener('click', closeBlogPost);
  if (backdrop) backdrop.addEventListener('click', closeBlogPost);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeBlogPost();
  });
}

/* ── SLM sub-tabs (Fundamentals / Benchmarks / Training / Edge Deployment / Resources / Projects) ── */
function initSlmSubtabs() {
  const nav = document.getElementById('slmSubtabs');
  if (!nav) return;
  const links = nav.querySelectorAll('.subtab-link');
  links.forEach(link => {
    link.addEventListener('click', () => {
      const targetId = link.dataset.subtab;
      links.forEach(l => {
        l.classList.toggle('active', l === link);
        l.setAttribute('aria-selected', l === link ? 'true' : 'false');
      });
      document.querySelectorAll('#slms .subtab-content').forEach(panel => {
        panel.classList.toggle('active', panel.id === targetId);
      });
    });
  });
}

/* ── Fade-up markers ──
   Each tab reveals its own fade-up elements when it becomes active
   — see showTab() above. This just tags the elements. */
function initFadeUps() {
  document.querySelectorAll(
    '.project-card, .patent-card, .about-grid, .section-header'
  ).forEach(el => el.classList.add('fade-up'));
}

/* ── Years of experience (calculated from Aug 2010) ── */
function initExperienceYears() {
  const el = document.getElementById('dsYears');
  if (!el) return;
  const start = new Date(2010, 7, 1); // August 2010
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  const beforeAnniversary =
    now.getMonth() < start.getMonth() ||
    (now.getMonth() === start.getMonth() && now.getDate() < start.getDate());
  if (beforeAnniversary) years -= 1;
  el.textContent = `${years}+`;
}

/* ── Project mini chart (bar chart — class distribution) ── */
function initProjectChart() {
  const ctx = document.getElementById('projectChart1');
  if (!ctx) return;
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Very Neg', 'Negative', 'Neutral', 'Positive', 'Very Pos'],
      datasets: [{
        label: 'Accuracy %',
        data: [91, 88, 85, 92, 94],
        backgroundColor: [
          'rgba(232,160,85,0.25)',
          'rgba(232,160,85,0.35)',
          'rgba(232,160,85,0.45)',
          'rgba(232,160,85,0.65)',
          'rgba(232,160,85,0.85)'
        ],
        borderColor: '#e8a055',
        borderWidth: 1,
        borderRadius: 4
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        x: { ticks: { color: '#8b9ab8', font: { size: 10 } }, grid: { display: false } },
        y: { min: 75, max: 100, ticks: { color: '#8b9ab8', font: { size: 10 }, callback: v => v + '%' }, grid: { color: 'rgba(255,255,255,0.04)' } }
      }
    }
  });
}

/* ── Contact form handler ── */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.textContent = 'Message Sent! ✓';
    btn.style.background = '#c47c30';
    btn.disabled = true;
    form.reset();
    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = '';
      btn.disabled = false;
    }, 3500);
  });
}

/* ── Init all ── */
document.addEventListener('DOMContentLoaded', () => {
  initFadeUps();
  initTabLinks();
  initExperienceYears();
  initProjectChart();
  initContactForm();
  initBlogs();
  initBlogReader();
  initSlmSubtabs();
  showTab('about');
});
