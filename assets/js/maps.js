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
}
function displayLocationsOfType(mapInstance, locationTypes) {
     var request = {
        location: mapInstance.getCenter(),
        radius: 8047,
        types: locationTypes
      }
    var service = new google.maps.places.PlacesService(mapInstance);
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
function getMapInstanceFromPlaceNameIdentifier(placeNamesIdentifier) {
    if(placeNamesIdentifier === 'hanoi') {
        return map1;
    } else if(placeNamesIdentifier === 'sapa') {
        return map2;
    } else if(placeNamesIdentifier === 'hoi-an') {
        return map3;
    }
    return null;
}
const placeNamesIdentifiers = ['hanoi', 'sapa', 'hoi-an'];
placeNamesIdentifiers.forEach((eachPlaceIdentifier) => {
 $("#" + eachPlaceIdentifier + "-bars").click(function(){
        const mapInstance = getMapInstanceFromPlaceNameIdentifier(eachPlaceIdentifier);
        displayLocationsOfType(mapInstance, ['bar']);
  });
   $("#" + eachPlaceIdentifier + "-restaurants").click(function(){
        const mapInstance = getMapInstanceFromPlaceNameIdentifier(eachPlaceIdentifier);
        displayLocationsOfType(mapInstance, ['restaurant']);
  });
     $("#" + eachPlaceIdentifier + "-cafes").click(function(){
        const mapInstance = getMapInstanceFromPlaceNameIdentifier(eachPlaceIdentifier);
        displayLocationsOfType(mapInstance, ['cafe']);
  });
     $("#" + eachPlaceIdentifier + "-hotels").click(function(){
        const mapInstance = getMapInstanceFromPlaceNameIdentifier(eachPlaceIdentifier);
        displayLocationsOfType(mapInstance, ['lodging']);
  });
     $("#" + eachPlaceIdentifier + "-attractions").click(function(){
        const mapInstance = getMapInstanceFromPlaceNameIdentifier(eachPlaceIdentifier);
        displayLocationsOfType(mapInstance, ['tourist_attraction']);
  });
});