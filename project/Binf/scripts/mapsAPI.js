$('#event-info').hide();

var people = [{
    activity: 'volleyball',
    from: '09:00',
    to: '11:00'
}, {
    activity: 'basketball',
    from: '10:00',
    to: '11:30'
}, {
    activity: 'football',
    from: '09:00',
    to: '11:00'
}, {
    activity: 'chess',
    from: '18:00',
    to: '19:00'
}, {
    activity: 'belot',
    from: '19:00',
    to: '21:00'
}, {
    activity: 'running',
    from: '08:00',
    to: '09:00'
}, {
    activity: 'walking dogs',
    from: '20:00',
    to: '21:00'
}];
//
//var peopleListContainer = document.getElementById('target-info');
//
//var peopleListTemplate = Handlebars.compile((document.getElementById('people-template')).innerHTML);
//
//var addPeople = peopleListTemplate( people[0] );
//
//peopleListContainer.innerHTML += addPeople;

function success(position) {
    var mapCenter = new google.maps.LatLng(42.685591, 23.341881);
    var coordsFirstEvent = new google.maps.LatLng(mapCenter.lat() - 0.003, mapCenter.lng() - 0.001);
    var coordsSecondEvent = new google.maps.LatLng(mapCenter.lat() + 0.003, mapCenter.lng() - 0.004);
    var coordsThirdEvent = new google.maps.LatLng(mapCenter.lat() - 0.001, mapCenter.lng() - 0.005);

    var mapOptions = {
        center: mapCenter,
        zoom: 15
    };

    var map = new google.maps.Map(document.getElementById("main-content"),
        mapOptions);

    var marker = new google.maps.Marker({
        position: coordsFirstEvent,
        map: map,
        title: "We are coding here!"
    });

    var marker2 = new google.maps.Marker({
        position: coordsSecondEvent,
        map: map,
        title: "We are coding here!"
    });

    var marker3 = new google.maps.Marker({
        position: coordsThirdEvent,
        map: map,
        title: "We are coding here!"
    });

    console.log(marker3);

    //var markers

    var infowindow = new google.maps.InfoWindow({
        content: marker.title
    });

    google.maps.event.addListener(marker, 'click', function () {
        $('#event-info').show();
        $('#target-main-info').text(people[0]['activity']);
        $('#target-from').text(people[0]['from']);
        $('#target-to').text(people[0]['to']);
    });

    google.maps.event.addListener(marker2, 'click', function () {
        $('#top-menu').show();
        $('#target-main-info').text(people[1]['activity']);
        $('#target-from').text(people[1]['from']);
        $('#target-to').text(people[1]['to']);
    });

    google.maps.event.addListener(marker3, 'click', function () {
        $('#top-menu').show();
        $('#target-main-info').text(people[2]['activity']);
        $('#target-from').text(people[2]['from']);
        $('#target-to').text(people[2]['to']);
    });
}

navigator.geolocation.getCurrentPosition(success);