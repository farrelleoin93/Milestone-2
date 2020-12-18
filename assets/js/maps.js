let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map-hanoi"), {
    center: { lat: 21.038598, lng: 105.830440 },
    zoom: 12,
  });
}