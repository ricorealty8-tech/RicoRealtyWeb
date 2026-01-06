// SISTEMA DE PROPIEDADES - MODIFICA ESTE ARCHIVO
// ==============================================

const propertiesData = {
    
    // PROPIEDAD 1 - Beachfront Villa
    "property1": {
        id: "property1",
        title: "Beachfront Villa",
        address: "Punta Chivato, Baja California Sur",
        price: "$1,250,000",
        
        // DESCRIPCIÓN - Modifica este texto
        description: `
            <p>This stunning beachfront villa offers the ultimate luxury living experience in the exclusive Punta Chivato community. With panoramic ocean views from every room, this property is a true paradise for those seeking privacy, elegance, and direct beach access.</p>
            
            <p>The villa features an open-concept design that seamlessly blends indoor and outdoor living spaces. The main living area opens to a spacious terrace with an infinity pool that appears to merge with the Sea of Cortez.</p>
            
            <p>High ceilings, large windows, and premium finishes throughout create an atmosphere of sophisticated coastal living. This property is ideal as a permanent residence or vacation home.</p>
        `,
        
        // IMÁGENES - Modifica estas URLs
        images: [
            "assets/casa1.jpg",
            "assets/casa11.jpg",
            "assets/casa111.jpg",
            "assets/casa1111.jpg",
            "assets/casa11111.jpg"
        ],
        
        // CARACTERÍSTICAS - Modifica esta lista
        features: [
            { icon: "fas fa-bed", text: "4 Bedrooms" },
            { icon: "fas fa-bath", text: "4.5 Bathrooms" },
            { icon: "fas fa-ruler-combined", text: "4,200 sq ft" },
            { icon: "fas fa-car", text: "3 Car Garage" },
            { icon: "fas fa-swimming-pool", text: "Infinity Pool" },
            { icon: "fas fa-umbrella-beach", text: "Beach Access" },
            { icon: "fas fa-fire", text: "Fireplace" },
            { icon: "fas fa-utensils", text: "Gourmet Kitchen" }
        ],
        
        // PUNTOS DESTACADOS - Modifica esta lista
        highlights: [
            "Direct beachfront access with private path to the sand",
            "Panoramic views of the Sea of Cortez",
            "Infinity pool with integrated spa",
            "Smart home technology throughout",
            "Energy-efficient design with solar panels",
            "Custom architectural details and premium finishes",
            "Private gated community with 24/7 security",
            "Minutes from Punta Chivato golf course"
        ],
        
        // VIDEO DE YOUTUBE - IMPORTANTE: Modifica con tu código de inserción
        videoEmbed: `
            <iframe width="740" height="416" src="https://www.youtube.com/embed/BtHCtMc8970" title="Punta Chivato house for sale" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
        
        videoUrl: "https://www.youtube.com/watch?v=jNQXAC9IVRw"
    },
    
    // PROPIEDAD 2 - Modern Condo
    "property2": {
        id: "property2",
        title: "Modern Condo",
        address: "Punta Chivato, Baja California Sur",
        price: "$750,000",
        
        description: `
            <p>This exquisite modern condo offers sophisticated urban living in the heart of Punta Chivato. Featuring contemporary design and high-end finishes, this property combines luxury with convenience in one of the most desirable locations.</p>
            
            <p>The open floor plan creates a seamless flow between living, dining, and kitchen areas, perfect for entertaining. Floor-to-ceiling windows provide abundant natural light and showcase stunning views of the surrounding landscape.</p>
        `,
        
        images: [
            "assets/casa22.jpg",
            "assets/casa222.jpg",
            "assets/casa2222.jpg",
            "assets/casa22222.jpg",
            "assets/casa222222.jpg"
        ],
        
        features: [
            { icon: "fas fa-bed", text: "3 Bedrooms" },
            { icon: "fas fa-bath", text: "2.5 Bathrooms" },
            { icon: "fas fa-ruler-combined", text: "1,800 sq ft" },
            { icon: "fas fa-car", text: "2 Parking Spaces" },
            { icon: "fas fa-swimming-pool", text: "Resort Pool" },
            { icon: "fas fa-dumbbell", text: "Fitness Center" },
            { icon: "fas fa-concierge-bell", text: "Concierge" },
            { icon: "fas fa-wifi", text: "Smart Home" }
        ],
        
        highlights: [
            "Prime location in the heart of Punta Chivato",
            "Floor-to-ceiling windows with panoramic views",
            "High-end European kitchen appliances",
            "Private balcony with outdoor seating",
            "Resort-style amenities and services",
            "Energy-efficient building design",
            "Secure underground parking"
        ],
        
        videoEmbed: `
            <iframe width="740" height="416" src="https://www.youtube.com/embed/odZPz3Kc5eY" title="Punta Chivato House for sale." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
        
        videoUrl: "https://youtu.be/odZPz3Kc5eY"
    },
    
    // PROPIEDAD 3 - Desert Retreat
    "property3": {
        id: "property3",
        title: "Casa3",
        address: "Punta Chivato, Baja California Sur",
        price: "No Data",
        
        description: `
            <p>Experience ultimate privacy and luxury in this stunning desert retreat. Nestled among native vegetation, this property offers complete seclusion while being just minutes from Punta Chivato's amenities.</p>
            
            <p>The architecture blends seamlessly with the natural landscape, featuring sustainable materials and passive solar design. Expansive windows frame breathtaking views of the desert and distant mountains.</p>
        `,
        
        images: [
            "assets/casa3.jpg"
        ],
        
        features: [
            { icon: "fas fa-bed", text: "5 Bedrooms" },
            { icon: "fas fa-bath", text: "5 Bathrooms" },
            { icon: "fas fa-ruler-combined", text: "5,200 sq ft" },
            { icon: "fas fa-swimming-pool", text: "Private Pool" },
            { icon: "fas fa-sun", text: "Solar Powered" },
            { icon: "fas fa-mountain", text: "Desert Views" }
        ],
        
        highlights: [
            "Complete privacy and seclusion",
            "Sustainable solar power system",
            "Custom desert landscaping",
            "Private hiking trails",
            "Stargazing observatory",
            "Artisan craftsmanship throughout"
        ],
        
        // SIN VIDEO - Si no tienes video, deja esto como null
        videoEmbed: null,
        videoUrl: null
    }

    // PARA AGREGAR NUEVAS PROPIEDADES:
    // 1. Copia la estructura completa de property1
    // 2. Cambia "property1" por "property4" (o el siguiente número)
    // 3. Modifica TODOS los datos según la nueva propiedad
    // 4. Actualiza los enlaces en index.html para usar: property.html?id=property4
    
};