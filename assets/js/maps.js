// Code for maps was found at https://thedebuggers.com/generate-multiple-google-maps/
let map;
let markers = [];


// function getCity() {
//     if(document.getElementById("hanoi").click) {
//         return new google.maps.LatLng(21.038598, 105.830440); // hanoi
//     } else if(document.getElementById("sapa").click) {
//         return new google.maps.LatLng(22.336459, 103.843878); // sapa
//     } else if(document.getElementById("hoi-an").click) {
//         return google.maps.LatLng(15.880314, 108.339319); // hoi-an
//     } 
//     return null;
// }


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
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        title: place.name
    })
}

function clearMarkers() {
    callback(null);
}


// function clearMarkers() {
//   callback(null);
// }

// function clearMarkers() {
//   for (let i = 0; i < markers.length; i++) {
//     markers[i].setMap(null);
//   }
//   markers = [];
// }
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


// const placeNamesIdentifiers = ['hanoi', 'sapa', 'hoi-an'];
// placeNamesIdentifiers.forEach((eachPlaceIdentifier) => {
//  $("#" + eachPlaceIdentifier + "-bars").click(function(){
//     //  clearMarkers();
//         const mapInstance = getMapInstanceFromPlaceNameIdentifier(eachPlaceIdentifier);
//         displayLocationsOfType(['bar']);
//   });
//    $("#" + eachPlaceIdentifier + "-restaurants").click(function(){
//     //    clearMarkers();
//         const mapInstance = getMapInstanceFromPlaceNameIdentifier(eachPlaceIdentifier);
//         displayLocationsOfType(['restaurant']);
//   });
//      $("#" + eachPlaceIdentifier + "-cafes").click(function(){
//         //  clearMarkers();
//         const mapInstance = getMapInstanceFromPlaceNameIdentifier(eachPlaceIdentifier);
//         displayLocationsOfType(['cafe']);
//   });
//      $("#" + eachPlaceIdentifier + "-hotels").click(function(){
//         //  clearMarkers();
//         const mapInstance = getMapInstanceFromPlaceNameIdentifier(eachPlaceIdentifier);
//         displayLocationsOfType(['lodging']);
//   });
//      $("#" + eachPlaceIdentifier + "-attractions").click(function(){
//         //  clearMarkers();
//         const mapInstance = getMapInstanceFromPlaceNameIdentifier(eachPlaceIdentifier);
//         displayLocationsOfType(['tourist_attraction']);
//   });
// });

