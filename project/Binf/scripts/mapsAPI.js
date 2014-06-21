function success(position) {
    var coords = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    var mapOptions = {
        center: coords,
        zoom: 15
    };

    var map = new google.maps.Map(document.getElementById("main-content"),
        mapOptions);

    var marker = new google.maps.Marker({
        position: coords,
        map: map,
        title: "We are coding here!"
    });

    var infowindow = new google.maps.InfoWindow({
        content: marker.title
    });

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });
}

navigator.geolocation.getCurrentPosition(success);