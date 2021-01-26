// Code for maps was found at https://thedebuggers.com/generate-multiple-google-maps/
let map;
let markers = [];
let lastinfowindow = null;
let infowindow;

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

function displayLocationsOfType(locationTypes) {
    var request = {
        location: map.getCenter(),
        radius: 8047,
        types: locationTypes,
    }
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
}
function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        console.log(results.length);
        for (var i = 0; i < results.length; i++) {
            markers.push(results[i]);
            createMarker(results[i]);
        }
    }
}

function createMarker(place) {
    // var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        title: place.name
    })
    let infowindow = new google.maps.InfoWindow();
    google.maps.event.addListener(marker, "click", function () {
        //Code to remove last info window was found at https://hashnode.com/post/google-maps-api-onclick-on-marker-close-infowindow-of-other-markers-ciou68dw708x33353les71nyi
        if (lastinfowindow) lastinfowindow.close();
        infowindow.setContent(
            "<div><strong>" +
            place.name +
            "</strong><br>" +
            "Place ID: " +
            place.place_id +
            "<br>" +
            place.formatted_address +
            "</div>"
        );
        infowindow.open(map, marker);
        lastinfowindow = infowindow;
    });
}



function clearMarkers() {
    callback(null);
}

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
