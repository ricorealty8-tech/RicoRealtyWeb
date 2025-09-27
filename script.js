// Script para el navbar responsivo y ocultar al hacer scroll
document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');
    let lastScrollY = window.scrollY;
    const isMobile = window.innerWidth <= 768;

    // Toggle del menú móvil
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace (solo en móviles)
    if (isMobile) {
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }

    // Ocultar/mostrar header al hacer scroll (solo en móviles)
    if (isMobile) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > lastScrollY && window.scrollY > 100) {
                // Scrolling hacia abajo
                header.classList.add('hidden');
            } else {
                // Scrolling hacia arriba
                header.classList.remove('hidden');
            }
            lastScrollY = window.scrollY;
        });
    }

    // Script para el botón flotante de contacto
    const contactBtn = document.querySelector('.floating-contact .contact-btn');
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

    // Ajustar el comportamiento del header en cambio de tamaño de ventana
    window.addEventListener('resize', function() {
        const newIsMobile = window.innerWidth <= 768;
        
        // Si cambiamos de móvil a escritorio o viceversa
        if (isMobile !== newIsMobile) {
            // Recargar la página para aplicar los cambios apropiados
            location.reload();
        }
    });
});