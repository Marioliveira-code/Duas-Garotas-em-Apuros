// Selecionar elementos do DOM
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');
const scrollLinks = document.querySelectorAll('a[href^="#"]');
const newsletterForm = document.querySelector('.newsletter form');

// Função para alternar o menu de navegação em dispositivos móveis
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Função para rolagem suave ao clicar em links de navegação
scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Validação simples do formulário de newsletter
newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const emailInput = this.querySelector('input[type="email"]');
    const emailValue = emailInput.value.trim();

    if (emailValue === '') {
        alert('Por favor, insira um endereço de e-mail válido.');
        return;
    }

    // Simula envio de formulário
    alert(`Obrigado por se inscrever, ${emailValue}!`);
    emailInput.value = ''; // Limpa o campo de e-mail
});
