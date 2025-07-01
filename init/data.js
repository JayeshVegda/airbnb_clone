const sampleListings = [
    {
        title: "Luxury Beachfront Villa",
        description: "Stunning 4-bedroom villa with private pool, direct beach access, and panoramic ocean views. Perfect for family getaways.",
        image: {
            url: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3",
            filename: "luxury-beachfront-villa"
        },
        price: 850,
        location: "Miami Beach",
        country: "United States",
        owner: "685d334dcd76906ed76ce840",
        geometry: {
            type: "Point",
            coordinates: [-80.1300455, 25.790654] // Miami Beach
        }
    },
    {
        title: "Historic Parisian Apartment",
        description: "Charming 2-bedroom apartment in the heart of Le Marais, featuring original 18th-century architecture and modern amenities.",
        image: {
            url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3",
            filename: "historic-parisian-apartment"
        },
        price: 320,
        location: "Paris",
        country: "France",
        owner: "685d3340cd76906ed76ce838",
        geometry: {
            type: "Point",
            coordinates: [2.352222, 48.856613] // Paris
        }
    },
    {
        title: "Mountain View Chalet",
        description: "Cozy 3-bedroom chalet with hot tub, fireplace, and breathtaking views of the Swiss Alps. Ski-in/ski-out access.",
        image: {
            url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3",
            filename: "mountain-view-chalet"
        },
        price: 450,
        location: "Zermatt",
        country: "Switzerland",
        owner: "685d332fcd76906ed76ce830",
        geometry: {
            type: "Point",
            coordinates: [7.749117, 46.020713] // Zermatt
        }
    },
    {
        title: "Traditional Japanese Ryokan",
        description: "Authentic Japanese inn with private onsen, tatami rooms, and traditional kaiseki dining experience.",
        image: {
            url: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3",
            filename: "traditional-japanese-ryokan"
        },
        price: 380,
        location: "Kyoto",
        country: "Japan",
        owner: "685d3320cd76906ed76ce828",
        geometry: {
            type: "Point",
            coordinates: [135.7681, 35.0116] // Kyoto
        }
    },
    {
        title: "Santorini Cave House",
        description: "Unique cave house with private terrace, infinity pool, and stunning views of the Aegean Sea.",
        image: {
            url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3",
            filename: "santorini-cave-house"
        },
        price: 550,
        location: "Oia",
        country: "Greece",
        owner: "685d334dcd76906ed76ce840",
        geometry: {
            type: "Point",
            coordinates: [25.3753, 36.4613] // Oia, Santorini
        }
    },
    {
        title: "Modern Downtown Loft",
        description: "Stylish 1-bedroom loft in the heart of Manhattan, featuring high ceilings, exposed brick, and city views.",
        image: {
            url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3",
            filename: "modern-downtown-loft"
        },
        price: 280,
        location: "New York",
        country: "United States",
        owner: "685d3340cd76906ed76ce838",
        geometry: {
            type: "Point",
            coordinates: [-74.005974, 40.712776] // New York
        }
    },
    {
        title: "Tropical Treehouse",
        description: "Unique treehouse experience in the Costa Rican rainforest, with private deck and wildlife viewing.",
        image: {
            url: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3",
            filename: "tropical-treehouse"
        },
        price: 175,
        location: "Monteverde",
        country: "Costa Rica",
        owner: "685d332fcd76906ed76ce830",
        geometry: {
            type: "Point",
            coordinates: [-84.8251, 10.3005] // Monteverde
        }
    },
    {
        title: "Venetian Canal Apartment",
        description: "Historic apartment overlooking the Grand Canal, featuring original frescoes and modern comforts.",
        image: {
            url: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3",
            filename: "venetian-canal-apartment"
        },
        price: 420,
        location: "Venice",
        country: "Italy",
        owner: "685d3320cd76906ed76ce828",
        geometry: {
            type: "Point",
            coordinates: [12.3155, 45.4408] // Venice
        }
    },
    {
        title: "Desert Oasis Villa",
        description: "Luxurious villa with private pool, palm grove, and stunning views of the Atlas Mountains.",
        image: {
            url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3",
            filename: "desert-oasis-villa"
        },
        price: 380,
        location: "Marrakech",
        country: "Morocco",
        owner: "685d334dcd76906ed76ce840",
        geometry: {
            type: "Point",
            coordinates: [-7.9811, 31.6295] // Marrakech
        }
    },
    {
        title: "Sydney Harbor Penthouse",
        description: "Stunning penthouse with panoramic views of the Opera House and Harbor Bridge.",
        image: {
            url: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-4.0.3",
            filename: "sydney-harbor-penthouse"
        },
        price: 650,
        location: "Sydney",
        country: "Australia",
        owner: "685d3340cd76906ed76ce838",
        geometry: {
            type: "Point",
            coordinates: [151.2093, -33.8688] // Sydney
        }
    },
    {
        title: "Bali Jungle Villa",
        description: "Private villa surrounded by tropical gardens, featuring infinity pool and outdoor living spaces.",
        image: {
            url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3",
            filename: "bali-jungle-villa"
        },
        price: 290,
        location: "Ubud",
        country: "Indonesia",
        owner: "685d332fcd76906ed76ce830",
        geometry: {
            type: "Point",
            coordinates: [115.2625, -8.5069] // Ubud, Bali
        }
    },
    {
        title: "Amsterdam Canal House",
        description: "Historic 17th-century canal house with modern interior and traditional Dutch architecture.",
        image: {
            url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3",
            filename: "amsterdam-canal-house"
        },
        price: 350,
        location: "Amsterdam",
        country: "Netherlands",
        owner: "685d3320cd76906ed76ce828",
        geometry: {
            type: "Point",
            coordinates: [4.9041, 52.3676] // Amsterdam
        }
    },
    {
        title: "Dubai Marina Apartment",
        description: "Luxury apartment with marina views, private balcony, and access to world-class amenities.",
        image: {
            url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3",
            filename: "dubai-marina-apartment"
        },
        price: 480,
        location: "Dubai",
        country: "UAE",
        owner: "685d334dcd76906ed76ce840",
        geometry: {
            type: "Point",
            coordinates: [55.1413, 25.0800] // Dubai Marina
        }
    },
    {
        title: "Cape Town Beach House",
        description: "Modern beach house with panoramic ocean views, private pool, and direct beach access.",
        image: {
            url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3",
            filename: "cape-town-beach-house"
        },
        price: 420,
        location: "Cape Town",
        country: "South Africa",
        owner: "685d3340cd76906ed76ce838",
        geometry: {
            type: "Point",
            coordinates: [18.4241, -33.9249] // Cape Town
        }
    },
    {
        title: "Barcelona Gothic Quarter Loft",
        description: "Renovated loft in historic building, featuring modern design and authentic Spanish charm.",
        image: {
            url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3",
            filename: "barcelona-gothic-quarter-loft"
        },
        price: 280,
        location: "Barcelona",
        country: "Spain",
        owner: "685d332fcd76906ed76ce830",
        geometry: {
            type: "Point",
            coordinates: [2.1734, 41.3851] // Barcelona
        }
    },
    {
        title: "Kyoto Machiya House",
        description: "Traditional wooden townhouse with modern amenities, private garden, and authentic Japanese atmosphere.",
        image: {
            url: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3",
            filename: "kyoto-machiya-house"
        },
        price: 320,
        location: "Kyoto",
        country: "Japan",
        owner: "685d3320cd76906ed76ce828",
        geometry: {
            type: "Point",
            coordinates: [135.7681, 35.0116] // Kyoto
        }
    },
    {
        title: "Rio de Janeiro Beachfront",
        description: "Luxury apartment with panoramic views of Copacabana Beach and Sugarloaf Mountain.",
        image: {
            url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3",
            filename: "rio-de-janeiro-beachfront"
        },
        price: 380,
        location: "Rio de Janeiro",
        country: "Brazil",
        owner: "685d334dcd76906ed76ce840",
        geometry: {
            type: "Point",
            coordinates: [-43.1729, -22.9068] // Rio de Janeiro
        }
    },
    {
        title: "Vienna Art Nouveau Apartment",
        description: "Beautifully restored apartment with original Art Nouveau details and modern comforts.",
        image: {
            url: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-4.0.3",
            filename: "vienna-art-nouveau-apartment"
        },
        price: 290,
        location: "Vienna",
        country: "Austria",
        owner: "685d3340cd76906ed76ce838",
        geometry: {
            type: "Point",
            coordinates: [16.3738, 48.2082] // Vienna
        }
    },
    {
        title: "Bangkok Riverside Villa",
        description: "Traditional Thai villa with private pool, river views, and authentic Thai architecture.",
        image: {
            url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3",
            filename: "bangkok-riverside-villa"
        },
        price: 350,
        location: "Bangkok",
        country: "Thailand",
        owner: "685d332fcd76906ed76ce830",
        geometry: {
            type: "Point",
            coordinates: [100.5018, 13.7563] // Bangkok
        }
    },
    {
        title: "Stockholm Archipelago House",
        description: "Seaside house with private dock, sauna, and stunning views of the Baltic Sea.",
        image: {
            url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3",
            filename: "stockholm-archipelago-house"
        },
        price: 420,
        location: "Stockholm",
        country: "Sweden",
        owner: "685d3320cd76906ed76ce828",
        geometry: {
            type: "Point",
            coordinates: [-84.8251, 10.3005] // Monteverde
        }
    },
    {
        title: "Lisbon Alfama Apartment",
        description: "Charming apartment in historic district with traditional Portuguese tiles and city views.",
        image: {
            url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3",
            filename: "lisbon-alfama-apartment"
        },
        price: 220,
        location: "Lisbon",
        country: "Portugal",
        owner: "685d334dcd76906ed76ce840",
        geometry: {
            type: "Point",
            coordinates: [-84.8251, 10.3005] // Monteverde
        }
    },
    {
        title: "Havana Colonial House",
        description: "Restored colonial house with traditional Cuban architecture and modern amenities.",
        image: {
            url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3",
            filename: "havana-colonial-house"
        },
        price: 180,
        location: "Havana",
        country: "Cuba",
        owner: "685d3340cd76906ed76ce838",
        geometry: {
            type: "Point",
            coordinates: [-84.8251, 10.3005] // Monteverde
        }
    },
    {
        title: "Seoul Hanok House",
        description: "Traditional Korean house with modern interior, private courtyard, and authentic atmosphere.",
        image: {
            url: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3",
            filename: "seoul-hanok-house"
        },
        price: 250,
        location: "Seoul",
        country: "South Korea",
        owner: "685d332fcd76906ed76ce830",
        geometry: {
            type: "Point",
            coordinates: [-84.8251, 10.3005] // Monteverde
        }
    },
    {
        title: "Istanbul Bosphorus Villa",
        description: "Luxury villa with views of the Bosphorus, featuring Turkish architecture and modern amenities.",
        image: {
            url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3",
            filename: "istanbul-bosphorus-villa"
        },
        price: 450,
        location: "Istanbul",
        country: "Turkey",
        owner: "685d3320cd76906ed76ce828",
        geometry: {
            type: "Point",
            coordinates: [-84.8251, 10.3005] // Monteverde
        }
    },
    {
        title: "Helsinki Design Apartment",
        description: "Modern Finnish design apartment with minimalist style and premium amenities.",
        image: {
            url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3",
            filename: "helsinki-design-apartment"
        },
        price: 280,
        location: "Helsinki",
        country: "Finland",
        owner: "685d334dcd76906ed76ce840",
        geometry: {
            type: "Point",
            coordinates: [-84.8251, 10.3005] // Monteverde
        }
    },
    {
        title: "Mexico City Art Deco Loft",
        description: "Stylish loft in historic building with original Art Deco details and modern interior.",
        image: {
            url: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3",
            filename: "mexico-city-art-deco-loft"
        },
        price: 220,
        location: "Mexico City",
        country: "Mexico",
        owner: "685d3340cd76906ed76ce838",
        geometry: {
            type: "Point",
            coordinates: [-84.8251, 10.3005] // Monteverde
        }
    },
    {
        title: "Singapore Marina Bay Suite",
        description: "Luxury suite with panoramic views of Marina Bay and the city skyline.",
        image: {
            url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3",
            filename: "singapore-marina-bay-suite"
        },
        price: 580,
        location: "Singapore",
        country: "Singapore",
        owner: "685d332fcd76906ed76ce830",
        geometry: {
            type: "Point",
            coordinates: [-84.8251, 10.3005] // Monteverde
        }
    },
    {
        title: "Budapest Thermal Bath Apartment",
        description: "Historic apartment near thermal baths, featuring traditional Hungarian architecture.",
        image: {
            url: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-4.0.3",
            filename: "budapest-thermal-bath-apartment"
        },
        price: 190,
        location: "Budapest",
        country: "Hungary",
        owner: "685d3320cd76906ed76ce828",
        geometry: {
            type: "Point",
            coordinates: [-84.8251, 10.3005] // Monteverde
        }
    },
    {
        title: "Cairo Nile View Apartment",
        description: "Modern apartment with views of the Nile River and access to rooftop pool.",
        image: {
            url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3",
            filename: "cairo-nile-view-apartment"
        },
        price: 250,
        location: "Cairo",
        country: "Egypt",
        owner: "685d334dcd76906ed76ce840",
        geometry: {
            type: "Point",
            coordinates: [-84.8251, 10.3005] // Monteverde
        }
    },
    {
        title: "Mumbai Heritage Bungalow",
        description: "Restored colonial bungalow with traditional architecture and modern amenities.",
        image: {
            url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3",
            filename: "mumbai-heritage-bungalow"
        },
        price: 320,
        location: "Mumbai",
        country: "India",
        owner: "685d3340cd76906ed76ce838",
        geometry: {
            type: "Point",
            coordinates: [-84.8251, 10.3005] // Monteverde
        }
    }
];

module.exports = { sampleListings };
