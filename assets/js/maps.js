let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 21.038598, lng: 105.830440 },
    zoom: 12,
  });

 let hanoi = new google.maps.LatLng(21.038598, 105.830440);
 let sapa = new google.maps.LatLng(22.336459, 103.843878);
 let hoian = new google.maps.LatLng(15.880314, 108.339319);
 
var request = {
    location: map.getCenter(),
    radius: 8047,
    types: ['cafe']
  }

  var service = new google.maps.places.PlacesService(map);

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
    map: map,
    position: place.geometry.location,
    title: place.name
  })

}