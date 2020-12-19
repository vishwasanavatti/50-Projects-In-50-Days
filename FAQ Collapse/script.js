const faqToggles = document.querySelectorAll('.faq-toggle');

/*
faqs.forEach((faq) => {
  faq.addEventListener('click', () => {
    faq.classList.add('active');
  });
});
*/
faqToggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active');
  });
});
