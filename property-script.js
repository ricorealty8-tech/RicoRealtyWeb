// Script para páginas individuales de propiedades
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded - Initializing property page');
    initPropertyPage();
    initNavigation();
    initFloatingContact();
    initScrollAnimations();
});

// Obtener ID de la propiedad desde la URL - CORREGIDO
function getPropertyIdFromUrl() {
    // Obtener el ID del parámetro URL (ej: property.html?id=property1)
    const urlParams = new URLSearchParams(window.location.search);
    const propertyId = urlParams.get('id');
    
    console.log('URL Parameters:', Object.fromEntries(urlParams));
    console.log('Property ID from URL:', propertyId);
    
    if (propertyId && propertiesData[propertyId]) {
        return propertyId;
    }
    
    // Fallback para compatibilidad con nombres de archivo antiguos
    const path = window.location.pathname;
    const filename = path.split('/').pop();
    console.log('Current filename:', filename);
    
    const fileToIdMap = {
        'property.html': 'property1', // Para tu archivo actual
        'property1.html': 'property1',
        'property2.html': 'property2',
        'property3.html': 'property3'
    };
    
    const fallbackId = fileToIdMap[filename];
    if (fallbackId) {
        console.log('Using fallback ID:', fallbackId);
        return fallbackId;
    }
    
    console.error('No valid property ID found');
    return null;
}

// Cargar y mostrar los datos de la propiedad
function initPropertyPage() {
    // Obtener el ID de la propiedad
    const propertyId = getPropertyIdFromUrl();
    console.log('Property ID from URL:', propertyId);
    
    // Verificar si propertiesData existe
    if (typeof propertiesData === 'undefined') {
        console.error('propertiesData is not defined. Make sure properties-data.js is loaded.');
        showPropertyError();
        return;
    }
    
    if (propertyId && propertiesData[propertyId]) {
        console.log('Property found:', propertiesData[propertyId]);
        loadPropertyData(propertyId);
    } else {
        console.error('Property not found:', propertyId);
        console.log('Available properties:', Object.keys(propertiesData));
        showPropertyError();
    }
}

// Cargar datos de la propiedad
function loadPropertyData(propertyId) {
    const property = propertiesData[propertyId];
    
    if (!property) {
        console.error('Property not found:', propertyId);
        console.log('Available properties:', Object.keys(propertiesData));
        showPropertyError();
        return;
    }
    
    console.log('Loading property data for:', propertyId);
    
    // Actualizar título de la página
    document.title = `${property.title} - Rico Realty`;
    
    // Actualizar encabezado
    document.getElementById('propertyTitle').textContent = property.title;
    document.getElementById('propertyAddress').textContent = property.address;
    document.getElementById('propertyPrice').textContent = property.price;
    
    // Cargar imágenes del carrusel
    loadCarouselImages(property.images);
    
    // Cargar descripción
    document.getElementById('propertyDescription').innerHTML = property.description;
    
    // Cargar características
    loadFeatures(property.features);
    
    // Cargar puntos destacados
    loadHighlights(property.highlights);
    
    // Cargar video (si existe)
    loadVideo(property.videoEmbed, property.videoUrl);
}

// Mostrar error si la propiedad no se encuentra - MEJORADO
function showPropertyError() {
    const propertyId = new URLSearchParams(window.location.search).get('id');
    const main = document.querySelector('main');
    
    if (main) {
        main.innerHTML = `
            <div class="container" style="text-align: center; padding: 4rem 2rem;">
                <i class="fas fa-exclamation-triangle" style="font-size: 4rem; color: #f39c12; margin-bottom: 2rem;"></i>
                <h2 style="color: var(--primary-color); margin-bottom: 1rem;">Propiedad No Encontrada</h2>
                <p style="margin-bottom: 1rem; color: var(--text-color);">
                    La propiedad "${propertyId || ''}" no está disponible.
                </p>
                <p style="margin-bottom: 2rem; color: var(--text-light); font-size: 0.9rem;">
                    Propiedades disponibles: ${Object.keys(propertiesData).join(', ')}
                </p>
                <a href="index.html" class="btn" style="display: inline-block;">Volver a la Página Principal</a>
            </div>
        `;
    }
}

// Cargar imágenes del carrusel
function loadCarouselImages(images) {
    const carouselImages = document.getElementById('carouselImages');
    const carouselDots = document.getElementById('carouselDots');
    
    if (!carouselImages || !carouselDots) {
        console.error('Carousel elements not found');
        return;
    }
    
    // Limpiar carrusel existente
    carouselImages.innerHTML = '';
    carouselDots.innerHTML = '';
    
    // Agregar imágenes y dots
    images.forEach((image, index) => {
        // Crear slide
        const slide = document.createElement('div');
        slide.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = `<img src="${image}" alt="Property image ${index + 1}" loading="lazy">`;
        carouselImages.appendChild(slide);
        
        // Crear dot
        const dot = document.createElement('span');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dot.setAttribute('data-slide', index);
        carouselDots.appendChild(dot);
    });
    
    // Inicializar funcionalidad del carrusel
    initCarousel();
}

// Cargar características
function loadFeatures(features) {
    const featuresGrid = document.getElementById('featuresGrid');
    if (!featuresGrid) {
        console.error('Features grid not found');
        return;
    }
    
    featuresGrid.innerHTML = '';
    
    features.forEach(feature => {
        const featureElement = document.createElement('div');
        featureElement.className = 'feature';
        featureElement.innerHTML = `
            <i class="${feature.icon}"></i>
            <span>${feature.text}</span>
        `;
        featuresGrid.appendChild(featureElement);
    });
}

// Cargar puntos destacados
function loadHighlights(highlights) {
    const highlightsList = document.getElementById('propertyHighlights');
    if (!highlightsList) {
        console.error('Highlights list not found');
        return;
    }
    
    highlightsList.innerHTML = '';
    
    highlights.forEach(highlight => {
        const li = document.createElement('li');
        li.textContent = highlight;
        highlightsList.appendChild(li);
    });
}

// FUNCIÓN PARA CÓDIGO DE INSERCIÓN COMPLETO
function loadVideo(videoEmbed, videoUrl) {
    const videoSection = document.getElementById('videoSection');
    const videoEmbedContainer = document.getElementById('videoEmbed');
    const videoFallback = document.getElementById('videoFallback');
    const videoLink = document.getElementById('videoLink');
    
    console.log('Loading video embed:', videoEmbed ? 'Yes' : 'No');
    
    if (!videoEmbed) {
        // Ocultar sección completa si no hay video
        videoSection.style.display = 'none';
        return;
    }
    
    // Mostrar sección de video
    videoSection.style.display = 'block';
    
    // Insertar el código de incorporación completo
    videoEmbedContainer.innerHTML = videoEmbed;
    
    // Configurar enlace de respaldo si hay URL
    if (videoUrl && videoLink) {
        videoLink.href = videoUrl;
        videoLink.textContent = `Ver "${document.getElementById('propertyTitle').textContent}" en YouTube`;
        videoFallback.style.display = 'block';
    } else {
        videoFallback.style.display = 'none';
    }
    
    // Agregar manejo de errores para el iframe
    const iframe = videoEmbedContainer.querySelector('iframe');
    if (iframe) {
        iframe.onload = function() {
            console.log('Video loaded successfully');
            videoEmbedContainer.classList.remove('loading');
        };
        
        iframe.onerror = function() {
            console.error('Error loading video');
            videoEmbedContainer.classList.remove('loading');
            videoEmbedContainer.classList.add('error');
            showVideoError(videoUrl);
        };
        
        // Mostrar estado de carga
        videoEmbedContainer.classList.add('loading');
    }
}

function showVideoError(videoUrl) {
    const videoEmbedContainer = document.getElementById('videoEmbed');
    const videoFallback = document.getElementById('videoFallback');
    
    videoEmbedContainer.innerHTML = `
        <div class="video-error-message">
            <i class="fas fa-exclamation-triangle"></i>
            <h4>Video No Disponible</h4>
            <p>El video no se puede cargar en este momento.</p>
        </div>
    `;
    
    if (videoUrl) {
        videoFallback.style.display = 'block';
    }
}

// Funcionalidad del carrusel
function initCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    let autoPlayInterval;
    
    if (slides.length === 0) {
        console.log('No slides found for carousel');
        return;
    }
    
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        if (n >= slides.length) {
            currentSlide = 0;
        } else if (n < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = n;
        }
        
        slides[currentSlide].classList.add('active');
        if (dots[currentSlide]) {
            dots[currentSlide].classList.add('active');
        }
    }
    
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    function prevSlide() {
        showSlide(currentSlide - 1);
    }
    
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 5000);
    }
    
    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }
    
    // Event listeners para los botones
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            stopAutoPlay();
            startAutoPlay();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            stopAutoPlay();
            startAutoPlay();
        });
    }
    
    // Event listeners para los dots
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-slide'));
            showSlide(slideIndex);
            stopAutoPlay();
            startAutoPlay();
        });
    });
    
    // Pausar autoplay al interactuar con el carrusel
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', stopAutoPlay);
        carousel.addEventListener('mouseleave', startAutoPlay);
        carousel.addEventListener('touchstart', stopAutoPlay);
    }
    
    // Iniciar autoplay
    startAutoPlay();
}

// Navegación responsiva
function initNavigation() {
    const header = document.getElementById('header');
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');
    let lastScrollY = window.scrollY;
    const isMobile = window.innerWidth <= 768;

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
            
            if (nav.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });

        // Cerrar menú al hacer clic en enlaces (solo móviles)
        if (isMobile) {
            const navLinks = document.querySelectorAll('nav a');
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    nav.classList.remove('active');
                    menuToggle.classList.remove('active');
                    document.body.style.overflow = 'auto';
                });
            });
        }
    }

    // Ocultar header al hacer scroll en móviles
    if (isMobile && header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > lastScrollY && window.scrollY > 100) {
                header.classList.add('hidden');
            } else {
                header.classList.remove('hidden');
            }
            lastScrollY = window.scrollY;
        });
    }

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Botón flotante de contacto
function initFloatingContact() {
    const contactBtn = document.querySelector('.floating-contact .contact-btn');
    const contactOptions = document.querySelector('.floating-contact .contact-options');
    
    if (contactBtn && contactOptions) {
        contactBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            contactOptions.classList.toggle('show');
        });
        
        // Cerrar al hacer clic fuera
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.floating-contact')) {
                contactOptions.classList.remove('show');
            }
        });
        
        // Prevenir que se cierre al hacer clic en las opciones
        contactOptions.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
}

// Animaciones al hacer scroll
function initScrollAnimations() {
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.property-description, .property-contact, .property-video');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Inicializar elementos animados
    const animatedElements = document.querySelectorAll('.property-description, .property-contact, .property-video');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    // Ejecutar una vez al cargar la página
    animateOnScroll();
}

// Manejar redimensionamiento de ventana
window.addEventListener('resize', function() {
    // Reiniciar navegación si cambia de móvil a desktop
    const nav = document.getElementById('nav');
    const menuToggle = document.getElementById('menuToggle');
    
    if (window.innerWidth > 768 && nav && menuToggle) {
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Verificar que los datos se cargaron correctamente
console.log('Property script loaded successfully');
console.log('propertiesData available:', typeof propertiesData !== 'undefined');
if (typeof propertiesData !== 'undefined') {
    console.log('Available properties:', Object.keys(propertiesData));
}