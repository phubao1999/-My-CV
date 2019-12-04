function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(16.071962, 108.196276),
        zoom: 16,
    };
    var uluru = {lat: 16.071962, lng: 108.196276};
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    })
}