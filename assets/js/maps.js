let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 21.038598, lng: 105.830440 },
    zoom: 12,
  });

 let hanoi = new google.maps.LatLng(21.038598, 105.830440);
 let sapa = new google.maps.LatLng(22.336459, 103.843878);
 let hoian = new google.maps.LatLng(15.880314, 108.339319);


}