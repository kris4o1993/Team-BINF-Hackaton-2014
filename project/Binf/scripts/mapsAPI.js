$('#event-info').hide();

var people = [{
    activity: 'football',
    from: '09:00',
    to: '11:00',
    img: 'images/football-icon.png'
}, {
    activity: 'belot',
    from: '19:00',
    to: '21:00',
    img: 'images/card-game.png'
}, {
    activity: 'running',
    from: '08:00',
    to: '09:00',
    img: 'images/running-icon.png'
}, {
    activity: 'walking dogs',
    from: '20:00',
    to: '21:00',
    img: 'images/dogwalk-icon.png'
},{
    activity: 'volleyball',
    from: '09:00',
    to: '11:00'
}, {
    activity: 'basketball',
    from: '10:00',
    to: '11:30'
}, {
    activity: 'chess',
    from: '18:00',
    to: '19:00'
}, {
    activity: 'running',
    from: '08:00',
    to: '09:00'
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
    var coordsBeerEvent = new google.maps.LatLng(mapCenter.lat() + 0.002, mapCenter.lng() - 0.003);
    var coordsDogWalkingEvent = new google.maps.LatLng(mapCenter.lat(), mapCenter.lng() - 0.002);

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

    var marker4 = new google.maps.Marker({
        position: coordsBeerEvent,
        map: map,
        title: "We are drinking Beer here!"
    });

    var marker5 = new google.maps.Marker({
        position: coordsDogWalkingEvent,
        map: map,
        title: "We are walking our dogs right here!"
    });

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
        $('#event-info').show();
        $('#target-main-info').text(people[1]['activity']);
        $('#target-from').text(people[1]['from']);
        $('#target-to').text(people[1]['to']);
    });

    google.maps.event.addListener(marker3, 'click', function () {
        $('#event-info').show();
        $('#target-main-info').text(people[2]['activity']);
        $('#target-from').text(people[2]['from']);
        $('#target-to').text(people[2]['to']);
    });

    google.maps.event.addListener(marker4, 'click', function () {
        $('#event-info').show();
        $('#target-main-info').text(people[3]['activity']);
        $('#target-from').text(people[3]['from']);
        $('#target-to').text(people[3]['to']);
    });

    google.maps.event.addListener(marker5, 'click', function () {
        $('#event-info').show();
        $('#target-main-info').text(people[4]['activity']);
        $('#target-from').text(people[4]['from']);
        $('#target-to').text(people[4]['to']);
    });
}

navigator.geolocation.getCurrentPosition(success);