// Code for maps was found at https://thedebuggers.com/generate-multiple-google-maps/

let map1, map2, map3;
function initMap() {

    let mapOptions = {
        zoom: 13,
    }
    mapOptions.center = new google.maps.LatLng(21.038598, 105.830440); // hanoi
    map1 = new google.maps.Map(document.getElementById("map-hanoi"), mapOptions);

    mapOptions.center = new google.maps.LatLng(22.336459, 103.843878); // sapa
    map2 = new google.maps.Map(document.getElementById("map-sapa"), mapOptions);

    mapOptions.center = new google.maps.LatLng(15.880314, 108.339319); // hoi-an
    map2 = new google.maps.Map(document.getElementById("map-hoi-an"), mapOptions);

    var request = {
    location: map1.getCenter(),
    radius: 8047,
    types: ['cafe']
  }

  var service = new google.maps.places.PlacesService(map1);

  service.nearbySearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    console.log(results.length);
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map1,
    position: place.geometry.location,
    title: place.name
  })
}
