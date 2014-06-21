function success(position) {
    var coords = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var coords2 = new google.maps.LatLng(position.coords.latitude + 0.001, position.coords.longitude + 0.003);
    var coords3 = new google.maps.LatLng(position.coords.latitude - 0.003, position.coords.longitude - 0.001);

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

    var marker2 = new google.maps.Marker({
        position: coords2,
        map: map,
        title: "We are coding here!"
    });

    var marker3 = new google.maps.Marker({
        position: coords3,
        map: map,
        title: "We are coding here!"
    });

    //var markers

    var infowindow = new google.maps.InfoWindow({
        content: marker.title
    });

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });
}

navigator.geolocation.getCurrentPosition(success);