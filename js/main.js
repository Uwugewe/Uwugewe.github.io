(() => {
  lucide.createIcons();
  const header = document.querySelector('.site-header');
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  const navLinks = nav?.querySelectorAll('a') ?? [];

  const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 16);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const closeMenu = () => {
    nav?.classList.remove('open');
    document.body.classList.remove('menu-open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Otwórz menu');
  };

  menuButton?.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Otwórz menu' : 'Zamknij menu');
    nav?.classList.toggle('open', !isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
  });
  navLinks.forEach(link => link.addEventListener('click', closeMenu));

  // Progressive reveal: hidden only when JS is active.
  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: .12, rootMargin: '0px 0px -40px' });
    revealItems.forEach(el => observer.observe(el));
  } else {
    revealItems.forEach(el => el.classList.add('visible'));
  }

  // Accessible gallery lightbox.
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = lightbox?.querySelector('img');
  const caption = lightbox?.querySelector('figcaption');
  const galleryItems = [...document.querySelectorAll('[data-gallery] .gallery-item')];
  let activeIndex = 0;

  const showImage = index => {
    if (!lightbox || !lightboxImg || !caption || !galleryItems.length) return;
    activeIndex = (index + galleryItems.length) % galleryItems.length;
    const item = galleryItems[activeIndex];
    lightboxImg.src = item.dataset.src;
    lightboxImg.alt = item.dataset.alt || '';
    caption.textContent = item.dataset.alt || '';
  };

  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      showImage(index);
      lightbox?.showModal();
    });
  });
  lightbox?.querySelector('.lightbox-close')?.addEventListener('click', () => lightbox.close());
  lightbox?.querySelector('.lightbox-prev')?.addEventListener('click', () => showImage(activeIndex - 1));
  lightbox?.querySelector('.lightbox-next')?.addEventListener('click', () => showImage(activeIndex + 1));
  lightbox?.addEventListener('click', event => {
    if (event.target === lightbox) lightbox.close();
  });
  lightbox?.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') showImage(activeIndex - 1);
    if (event.key === 'ArrowRight') showImage(activeIndex + 1);
  });

  // Static-site contact form: opens the visitor's email client.
  const form = document.getElementById('contact-form');
  form?.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent(`Zapytanie ze strony — ${data.get('name') || 'klient'}`);
    const body = encodeURIComponent(
      `Imię: ${data.get('name') || ''}\n` +
      `Telefon: ${data.get('phone') || ''}\n` +
      `E-mail: ${data.get('email') || ''}\n\n` +
      `${data.get('message') || ''}`
    );
    window.location.href = `mailto:e-mail-biuro@woodandglass.pl?subject=${subject}&body=${body}`;
  });

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
