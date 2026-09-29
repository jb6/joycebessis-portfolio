
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
});
