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
        price: "$1,250,000",
        description: "Luxury 4-bedroom villa with panoramic ocean views and private beach access. Features infinity pool, gourmet kitchen, and smart home technology.",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        link: "property1.html"
    },
    {
        id: 2,
        title: "Modern Condo",
        price: "$750,000",
        description: "Spacious 3-bedroom condo with resort amenities including pool, gym, and 24/7 security. Perfect for vacation rental or permanent residence.",
        image: "https://images.unsplash.com/photo-1575517111839-3a4e5d13d0c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        link: "property2.html"
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