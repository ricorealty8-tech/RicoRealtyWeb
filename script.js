// Script para el botón flotante de contacto
document.addEventListener('DOMContentLoaded', function() {
    const contactBtn = document.querySelector('.contact-btn');
    const contactOptions = document.querySelector('.contact-options');
    
    contactBtn.addEventListener('click', function() {
        contactOptions.classList.toggle('show');
    });
    
    // Cerrar el menú de contacto al hacer clic fuera de él
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.floating-contact')) {
            contactOptions.classList.remove('show');
        }
    });
    
    // Smooth scrolling para enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animación de elementos al hacer scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.property-card, .about-text, .about-video');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Establecer estado inicial para elementos animados
    const animatedElements = document.querySelectorAll('.property-card, .about-text, .about-video');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    // Ejecutar una vez al cargar la página
    animateOnScroll();
});