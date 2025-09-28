// Script para el carrusel de imágenes y navbar responsivo
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
        
        // Prevenir el desplazamiento del body cuando el menú está abierto
        if (nav.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });

    // Cerrar menú al hacer clic en un enlace (solo en móviles)
    if (isMobile) {
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
                document.body.style.overflow = 'auto'; // Restaurar desplazamiento
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

    // Elementos del carrusel
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    
    // Función para mostrar una slide específica
    function showSlide(n) {
        // Ocultar todas las slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Remover clase active de todos los dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Ajustar el índice si es necesario
        if (n >= slides.length) {
            currentSlide = 0;
        } else if (n < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = n;
        }
        
        // Mostrar la slide actual
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
    
    // Event listeners para los botones
    prevBtn.addEventListener('click', function() {
        showSlide(currentSlide - 1);
    });
    
    nextBtn.addEventListener('click', function() {
        showSlide(currentSlide + 1);
    });
    
    // Event listeners para los dots
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-slide'));
            showSlide(slideIndex);
        });
    });
    
    // Cambio automático de slides cada 5 segundos
    setInterval(function() {
        showSlide(currentSlide + 1);
    }, 5000);
    
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
        
        // Cerrar menú de navegación si se hace clic fuera de él (en móviles)
        if (isMobile && nav.classList.contains('active') && 
            !event.target.closest('nav') && 
            !event.target.closest('.menu-toggle')) {
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Animación de elementos al hacer scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.property-description, .property-video, .property-contact');
        
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
    const animatedElements = document.querySelectorAll('.property-description, .property-video, .property-contact');
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
        
        // Si cambiamos de móvil a escritorio, restaurar el menú
        if (isMobile && !newIsMobile) {
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});