// Global variables
let map;
let markers = [];
let lastinfowindow = null;
let infowindow;

// Initaiates the map
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: new google.maps.LatLng(21.038598, 105.830440),
    })
}

// Code to change center of the map was found at https://stackoverflow.com/questions/28499141/how-to-change-google-map-center-by-clicking-a-button/28500306
function newLocation(newLat, newLng) {
    map.setCenter({
        lat: newLat,
        lng: newLng
    });
}

//Setting Location with jQuery
$(document).ready(function () {
    $("#hanoi-info").click(function () {
        newLocation(21.038598, 105.830440);
    });

    $("#sapa-info").click(function () {
        newLocation(22.336459, 103.843878);
    });

    $("#hoi-an-info").click(function () {
        newLocation(15.880314, 108.339319);
    });
});

// Function to display the locations of bars, cafes etc
function displayLocationsOfType(locationTypes) {
    var request = {
        location: map.getCenter(),
        radius: 8047,
        types: locationTypes,
        zoom: map.setZoom(13)
    }
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
}

// Function to get places locations from Google places
function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        clearMarkers();
        console.log(results.length);
        for (var i = 0; i < results.length; i++) {
            // markers.push(results[i]);
            createMarker(results[i]);
        }
    }
}

// Function to create markers
function createMarker(place) {
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        title: place.name
    })
    // Code to set infowindow was found at https://developers.google.com/maps/documentation/javascript/infowindows
    let infowindow = new google.maps.InfoWindow();
    google.maps.event.addListener(marker, "click", function () {
        //Code to remove last info window was found at https://hashnode.com/post/google-maps-api-onclick-on-marker-close-infowindow-of-other-markers-ciou68dw708x33353les71nyi
        if (lastinfowindow) lastinfowindow.close();
        infowindow.setContent(place.name);

        infowindow.open(map, marker);
        lastinfowindow = infowindow;
    });
    markers.push(marker)
}

function clearMarkers() {
    for (let i = 0; i < markers.length; i++) {
        if (markers[i]) {
            markers[i].setMap(null);
        }
    }
    markers = [];
}

// Function to show display markers when an option is clicked
$(document).ready(function () {
    $(".bars").click(function () {
        clearMarkers();
        displayLocationsOfType(["bar"]);
    });
    $(".restaurants").click(function () {
        clearMarkers();
        displayLocationsOfType(["restaurant"]);
    });
    $(".cafes").click(function () {
        clearMarkers();
        displayLocationsOfType(["cafe"]);
    });
    $(".hotels").click(function () {
        clearMarkers();
        displayLocationsOfType(["lodging"]);
    });
    $(".attractions").click(function () {
        clearMarkers();
        displayLocationsOfType(["tourist_attraction"]);
    });
});

// Code to show top 3 picks and zoom to closer to location on map
$(document).ready(function () {
    $("#hanoi-cooking").click(function () {
        clearMarkers();
        marker = new google.maps.Marker({
            position: { lat: 21.045239642410273, lng: 105.84241360887668 },
            map,
            title: "Hanoi Cooking Centre",
        });
        markers.push(marker)
        map.setZoom(15);
        map.setCenter(marker.getPosition());
        google.maps.event.addListener(marker, "click", function () {
            let infowindow = new google.maps.InfoWindow({
                content: marker.title,
            });
            infowindow.open(map, marker);
        });
    });
    $("#hanoi-day-tour").click(function () {
        clearMarkers();
        marker = new google.maps.Marker({
            position: { lat: 21.02891637206284, lng: 105.83647054004012 },
            map,
            title: "Hanoi Local Tour",
        });
        markers.push(marker)
        map.setZoom(15);
        map.setCenter(marker.getPosition());
        google.maps.event.addListener(marker, "click", function () {
            let infowindow = new google.maps.InfoWindow({
                content: marker.title,
            });
            infowindow.open(map, marker);
        });
    });
    $("#hanoi-food-tour").click(function () {
        clearMarkers();
        marker = new google.maps.Marker({
            position: { lat: 21.03431899014755, lng: 105.8519080670291 },
            map,
            title: "Hanoi Street Food Tour",
        });
        markers.push(marker)
        map.setZoom(15);
        map.setCenter(marker.getPosition());
        google.maps.event.addListener(marker, "click", function () {
            let infowindow = new google.maps.InfoWindow({
                content: marker.title,
            });
            infowindow.open(map, marker);
        });
    });
    $("#fansipan-cable-car").click(function () {
        clearMarkers();
        marker = new google.maps.Marker({
            position: { lat: 22.333653721803543, lng: 103.81845715539488 },
            map,
            title: "Fansipan Cable Car",
        });
        markers.push(marker)
        map.setZoom(15);
        map.setCenter(marker.getPosition());
        google.maps.event.addListener(marker, "click", function () {
            let infowindow = new google.maps.InfoWindow({
                content: marker.title,
            });
            infowindow.open(map, marker);
        });
    });
     $("#sapa-market").click(function () {
        clearMarkers();
        marker = new google.maps.Marker({
            position: { lat: 22.33899354686653, lng: 103.85186066065194 },
            map,
            title: "Sapa Market",
        });
        markers.push(marker)
        map.setZoom(15);
        map.setCenter(marker.getPosition());
        google.maps.event.addListener(marker, "click", function () {
            let infowindow = new google.maps.InfoWindow({
                content: marker.title,
            });
            infowindow.open(map, marker);
        });
    });
    $("#sapa-trek").click(function () {
        clearMarkers();
        marker = new google.maps.Marker({
            position: { lat: 22.33285088414197, lng: 103.8446917130653 },
            map,
            title: "Sapa Trekking Tour",
        });
        markers.push(marker)
        map.setZoom(15);
        map.setCenter(marker.getPosition());
        google.maps.event.addListener(marker, "click", function () {
            let infowindow = new google.maps.InfoWindow({
                content: marker.title,
            });
            infowindow.open(map, marker);
        });
    });
    $("#marble-mountain").click(function () {
        clearMarkers();
        marker = new google.maps.Marker({
            position: { lat: 16.00319317624652, lng: 108.26403755349087 },
            map,
            title: "Marble Mountain",
        });
        markers.push(marker)
        map.setZoom(15);
        map.setCenter(marker.getPosition());
        google.maps.event.addListener(marker, "click", function () {
            let infowindow = new google.maps.InfoWindow({
                content: marker.title,
            });
            infowindow.open(map, marker);
        });
    });
    $("#hoi-an-tour").click(function () {
        clearMarkers();
        marker = new google.maps.Marker({
            position: { lat: 15.882504014197991, lng: 108.32787448141758 },
            map,
            title: "Hoi An Day Tour",
        });
        markers.push(marker)
        map.setZoom(15);
        map.setCenter(marker.getPosition());
        google.maps.event.addListener(marker, "click", function () {
            let infowindow = new google.maps.InfoWindow({
                content: marker.title,
            });
            infowindow.open(map, marker);
        });
    });
    $("#japanese-bridge").click(function () {
        clearMarkers();
        marker = new google.maps.Marker({
            position: { lat: 15.87733489917905, lng: 108.32611472650093 },
            map,
            title: "Japanese Bridge",
        });
        markers.push(marker)
        map.setZoom(15);
        map.setCenter(marker.getPosition());
        google.maps.event.addListener(marker, "click", function () {
            let infowindow = new google.maps.InfoWindow({
                content: marker.title,
            });
            infowindow.open(map, marker);
        });
    });
});