//FAQ
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const faqItem = button.parentElement;
    const isActive = faqItem.classList.contains('active');

    // Cierra todos
    document.querySelectorAll('.faq-item').forEach(item => {
      item.classList.remove('active');
      item.querySelector('.icon').textContent = '+';
    });

    // Abre si no estaba activo
    if (!isActive) {
      faqItem.classList.add('active');
      faqItem.querySelector('.icon').textContent = '-';
    }
  });
});


/*FELCHA ARRIBA*/
function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }