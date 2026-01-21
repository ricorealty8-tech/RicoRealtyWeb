// ARCHIVO PARA GESTIÓN MANUAL DE PROPIEDADES
// ==========================================
// PARA AGREGAR PROPIEDADES: Añade objetos al array 'properties'
// PARA ELIMINAR PROPIEDADES: Quita objetos del array 'properties'
// LA PÁGINA SE ACTUALIZARÁ AUTOMÁTICAMENTE

// Array de propiedades - MODIFICA ESTE ARRAY SEGÚN TUS NECESIDADES
const properties = [
    {
        id: 1,
        title: "Beachfront Villa",
        price: "",
        description: "Luxury 4-bedroom villa with panoramic ocean views and private beach access. Features infinity pool, gourmet kitchen, and smart home technology.",
        image: "assets/casa1.jpg",
        link: "property1.html"
    },
    {
        id: 2,
        title: "Modern Condo",
        price: "",
        description: "Spacious 3-bedroom condo with resort amenities including pool, gym, and 24/7 security. Perfect for vacation rental or permanent residence.",
        image: "assets/casa2.jpg",
        link: "property2.html"
    },
     {
        id: 3,
        title: "No data",
        price: "",
        description: "Luxury 4-bedroom villa with panoramic ocean views and private beach access. Features infinity pool, gourmet kitchen, and smart home technology.",
        image: "assets/casa3.jpg",
        link: "property3.html"
    },
      {
        id: 4,
        title: "Beachfront Villa",
        price: "",
        description: "Luxury 4-bedroom villa with panoramic ocean views and private beach access. Features infinity pool, gourmet kitchen, and smart home technology.",
        image: "assets/casa2v2.jpg",
        link: "property4.html"
    },
    
     
 
];

// Función para renderizar propiedades
function renderProperties() {
    const propertiesGrid = document.getElementById('propertiesGrid');
    
    if (!propertiesGrid) return;
    
    // Limpiar el grid
    propertiesGrid.innerHTML = '';
    
    // Verificar si hay propiedades
    if (properties.length === 0) {
        propertiesGrid.className = 'properties-grid empty';
        propertiesGrid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-home"></i>
                <h3>No Properties Available</h3>
                <p>Check back later for new listings</p>
            </div>
        `;
        return;
    }
    
    // Aplicar clase según la cantidad de propiedades
    if (properties.length === 1) {
        propertiesGrid.className = 'properties-grid single-item';
    } else if (properties.length === 2) {
        propertiesGrid.className = 'properties-grid double-item';
    } else if (properties.length === 3) {
        propertiesGrid.className = 'properties-grid triple-item';
    } else {
        propertiesGrid.className = 'properties-grid multiple-items';
    }
    
    // Renderizar cada propiedad
    properties.forEach(property => {
        const propertyCard = document.createElement('div');
        propertyCard.className = 'property-card';
        propertyCard.innerHTML = `
            <div class="property-image">
                <img src="${property.image}" alt="${property.title}" loading="lazy">
                <div class="property-overlay">
                    <a href="${property.link}" target="_blank" class="view-details">View Details</a>
                </div>
            </div>
            <div class="property-info">
                <h3>${property.title}</h3>
                <p>${property.description}</p>
                <span class="price">${property.price}</span>
            </div>
        `;
        propertiesGrid.appendChild(propertyCard);
    });
}

// Inicializar cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    renderProperties();
    
    // También se puede llamar a renderProperties() manualmente 
    // después de modificar el array 'properties' para ver los cambios
});

// Función para actualizar propiedades manualmente (opcional)
function updateProperties(newProperties) {
    // Reemplazar el array de propiedades
    properties.length = 0;
    properties.push(...newProperties);
    renderProperties();
}

// Ejemplo de cómo agregar una propiedad dinámicamente:
// function addNewProperty(property) {
//     properties.push(property);
//     renderProperties();
// }

// Ejemplo de cómo eliminar una propiedad por ID:
// function removePropertyById(id) {
//     const index = properties.findIndex(prop => prop.id === id);
//     if (index !== -1) {
//         properties.splice(index, 1);
//         renderProperties();
//     }
// }
// Script principal para funcionalidades de la página
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initFloatingContact();
    initScrollAnimations();
});

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

// Botón flotante de contacto - CORREGIDO
function initFloatingContact() {
    const contactBtn = document.querySelector('.floating-contact .contact-btn');
    const contactOptions = document.querySelector('.floating-contact .contact-options');
    
    console.log('Contact button:', contactBtn);
    console.log('Contact options:', contactOptions);
    
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
    } else {
        console.error('No se encontraron los elementos del botón flotante');
    }
}

// Animaciones al hacer scroll
function initScrollAnimations() {
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
    
    const animatedElements = document.querySelectorAll('.property-card, .about-text, .about-video');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
}

// Recargar propiedades cuando sea necesario (para desarrollo)
function refreshProperties() {
    if (typeof renderProperties === 'function') {
        renderProperties();
    }
}