const showDistance = document.querySelector(".Show-distance")


let map;
let marker; 
let fixedLocation = { lat: -0.6922197321484374, lng: 34.783828631043434 };


function initMap() {
          // Define a custom map style that emphasizes geographical features
          const customMapStyle = [
    {
      featureType: "all",
      stylers: [
        { visibility: "off" } // Turn off all default features
      ],
    },
    {
      featureType: "landscape",
      stylers: [
        { visibility: "on" }, // Turn on landscape features
      ],
    },
  ];

  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -0.6922197321484374, lng: 34.783828631043434  }, // Initial map center
    zoom: 16, // Initial zoom level
  });

  // Create a click event listener on the map
  map.addListener("click", function (event) {
    placeMarker(event.latLng); // Call a function to place a marker at the clicked location
  });
}

function placeMarker(location) {
  if (marker) {
    marker.setMap(null); // Remove the previous marker
  }

  marker = new google.maps.Marker({
    position: location,
    map: map,
  });


    if (confirm(`Selected Location:\nLatitude: ${location.lat().toFixed(6)}\nLongitude: ${location.lng().toFixed(6)}\nDo you want to continue?`)) {
        // If the user confirms, you can perform additional actions here
        // For example, you can calculate the distance to the fixed location and display it
        const distance = calculateDistance(location, fixedLocation);
        alert(`Distance from School: ${distance.toFixed(2)} * km`);
    }

  showDistance.textContent += `${distance}`
}

function calculateDistance(coord1, coord2) {
  const earthRadius = 6371; // Earth's radius in kilometers

  const lat1 = (Math.PI / 180) * coord1.lat();
  const lat2 = (Math.PI / 180) * coord2.lat;
  const lon1 = (Math.PI / 180) * coord1.lng();
  const lon2 = (Math.PI / 180) * coord2.lng;

  const dlat = lat2 - lat1;
  const dlon = lon2 - lon1;

  const a =
    Math.sin(dlat / 2) * Math.sin(dlat / 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dlon / 2) * Math.sin(dlon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return earthRadius * c;
}