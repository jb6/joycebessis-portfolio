
document.addEventListener('DOMContentLoaded', () => {
  const current = document.body.dataset.page || '';
  document.querySelectorAll('[data-nav]').forEach(a => {
    if (a.dataset.nav === current) a.classList.add('active');
  });

  document.querySelectorAll('[data-lang-pending]').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = a.dataset.langPending;
      alert(`${lang} version will be added next.`);
    });
  });

  const form = document.querySelector('#contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = encodeURIComponent(form.name.value.trim());
      const email = encodeURIComponent(form.email.value.trim());
      const message = encodeURIComponent(form.message.value.trim());
      const subject = encodeURIComponent(`Portfolio contact from ${form.name.value.trim() || 'website visitor'}`);
      const body = encodeURIComponent(`Name: ${form.name.value.trim()}\nEmail: ${form.email.value.trim()}\n\n${form.message.value.trim()}`);
      window.location.href = `mailto:joyce.bessis@gmail.com?subject=${subject}&body=${body}`;
    });
  }

  const mobileToggle = document.querySelector('.mobile-toggle');
  const primaryMenu = document.querySelector('#primary-menu');
  if (mobileToggle && primaryMenu) {
    const closeMenu = () => {
      primaryMenu.classList.remove('is-open');
      mobileToggle.setAttribute('aria-expanded', 'false');
      mobileToggle.setAttribute('aria-label', 'Open navigation');
    };
    const openMenu = () => {
      primaryMenu.classList.add('is-open');
      mobileToggle.setAttribute('aria-expanded', 'true');
      mobileToggle.setAttribute('aria-label', 'Close navigation');
    };

    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = mobileToggle.getAttribute('aria-expanded') === 'true';
      isOpen ? closeMenu() : openMenu();
    });

    primaryMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('click', (e) => {
      if (!primaryMenu.contains(e.target) && !mobileToggle.contains(e.target)) closeMenu();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1050) closeMenu();
    });
  }

});
