function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(16.066837, 108.191848),
        zoom: 16,
    };
    var uluru = {lat: 16.066837, lng: 108.191848};
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    })
}