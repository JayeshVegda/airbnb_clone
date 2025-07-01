// Minimal Map Implementation
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing map...');
    
    // Check if map container exists
    const mapContainer = document.getElementById('map');
    if (!mapContainer) {
        console.error('Map container not found!');
        return;
    }
    
    // Initialize Radar with your API key
    Radar.initialize('prj_test_pk_4ad6e0a4deae6bc33a5e96e6eb951ce2e0d709e8');
    
    // Get coordinates from global variable (set in EJS template)
    let coordinates = window.listingCoordinates || [-73.99110, 40.73430];
    let listingTitle = window.listingTitle || 'Location';
    let listingLocation = window.listingLocation || 'Unknown Location';
    
    console.log('Using coordinates:', coordinates);
    
    // Create simple map
    const map = Radar.ui.map({
        container: 'map',
        style: '26e9f8ff-ee5b-4b16-9f93-25a342a44da8',
        center: coordinates,
        zoom: 13,
        pitch: 0,
        bearing: 0
    });
    
    // Wait for map to load before adding marker
    map.on('load', function() {
        console.log('Map loaded, adding marker...');
        
        // Create simple marker
        const marker = Radar.ui.marker({ 
            color: '#0d6efd'
        })
        .setLngLat(coordinates)
        .addTo(map);
        
        // Create simple popup
        const popup = new mapboxgl.Popup({ 
            offset: 15,
            closeButton: false,
            closeOnClick: true
        })
        .setHTML(`
            <div style="padding: 8px;">
                <strong>${listingTitle}</strong><br>
                <small style="color: #6c757d;">${listingLocation}</small>
            </div>
        `);
        
        // Add popup to marker
        marker.setPopup(popup);
        
        console.log('Marker added successfully');
    });
    
    console.log('Map initialization complete');
});

// Get directions function
function getDirections() {
    const coordinates = window.listingCoordinates || [-73.99110, 40.73430];
    const url = `https://www.google.com/maps/dir/?api=1&destination=${coordinates[1]},${coordinates[0]}`;
    window.open(url, '_blank');
}

// Add custom CSS for popup styling
const style = document.createElement('style');
style.textContent = `
    .map-popup {
        padding: 10px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    
    .popup-title {
        color: #0d6efd;
        font-weight: 600;
        margin-bottom: 8px;
        font-size: 16px;
    }
    
    .popup-location {
        color: #6c757d;
        margin-bottom: 12px;
        font-size: 14px;
    }
    
    .popup-actions {
        text-align: center;
    }
    
    .mapboxgl-popup-content {
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        border: none;
    }
    
    .mapboxgl-popup-tip {
        border-top-color: white;
    }
    
    .mapboxgl-marker {
        cursor: pointer;
        transition: transform 0.2s ease;
    }
    
    .mapboxgl-marker:hover {
        transform: scale(1.1);
    }
`;
document.head.appendChild(style);