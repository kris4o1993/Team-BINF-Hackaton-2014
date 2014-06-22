$('#event-info').hide();

var people = [
        {
            activity: 'football',
            from: '09:00',
            to: '11:00',
            img: 'images/football-icon.png'
        },
        {
            activity: 'belot',
            from: '19:00',
            to: '21:00',
            img: 'images/card-game.png'
        },
        {
            activity: 'running',
            from: '08:00',
            to: '09:00',
            img: 'images/running-icon.png'
        },
        {
            activity: 'drinking beer',
            from: '18:00',
            to: '19:00',
            img: 'images/beer-icon.png'
        },
        {
            activity: 'walking dogs',
            from: '20:00',
            to: '21:00',
            img: 'images/dogwalk_icon.png'
        },
        {
            activity: 'volleyball',
            from: '09:00',
            to: '11:00'
        }
        ,
        {
            activity: 'basketball',
            from: '10:00',
            to: '11:30'
        }
        ,
        {
            activity: 'chess',
            from: '18:00',
            to: '19:00'
        }
        ,
        {
            activity: 'running',
            from: '08:00',
            to: '09:00'
        }
    ]
    ;
//
//var peopleListContainer = document.getElementById('target-info');
//
//var peopleListTemplate = Handlebars.compile((document.getElementById('people-template')).innerHTML);
//
//var addPeople = peopleListTemplate( people[0] );
//
//peopleListContainer.innerHTML += addPeople;

function success(position) {
    var mapCenter = new google.maps.LatLng(42.684913, 23.339843);
    var coordsFootballEvent = new google.maps.LatLng(mapCenter.lat() - 0.003, mapCenter.lng() - 0.001);
    var coordsBelotEvent = new google.maps.LatLng(mapCenter.lat() + 0.003, mapCenter.lng() - 0.004);
    var coordsRunningEvent = new google.maps.LatLng(mapCenter.lat() - 0.001, mapCenter.lng() - 0.005);
    var coordsBeerEvent = new google.maps.LatLng(mapCenter.lat() + 0.002, mapCenter.lng() - 0.003);
    var coordsDogWalkingEvent = new google.maps.LatLng(mapCenter.lat(), mapCenter.lng() - 0.002);

    var mapOptions = {
        center: mapCenter,
        zoom: 15
    };

    var map = new google.maps.Map(document.getElementById("main-content"),
        mapOptions);

    var footballMarker = new google.maps.Marker({
        position: coordsFootballEvent,
        map: map,
        title: "We are playing football here!"
    });

    var belotMarker = new google.maps.Marker({
        position: coordsBelotEvent,
        map: map,
        title: "We are playing belot here!"
    });

    var runningMarker = new google.maps.Marker({
        position: coordsRunningEvent,
        map: map,
        title: "We are running here!"
    });

    var beerMarker = new google.maps.Marker({
        position: coordsBeerEvent,
        map: map,
        title: "We are drinking Beer here!"
    });

    var dogsWalkingMarker = new google.maps.Marker({
        position: coordsDogWalkingEvent,
        map: map,
        title: "We are walking our dogs right here!"
    });

    var infowindow = new google.maps.InfoWindow({
        content: footballMarker.title
    });

    google.maps.event.addListener(footballMarker, 'click', function () {
        $('#no-activity-selected').hide();
        $('#event-info').show();
        $('#target-main-info').text('Activity: ' + people[0]['activity']);
        $('#target-from').text('From: ' + people[0]['from']);
        $('#target-to').text('To: ' + people[0]['to']);
        $('#target-profile-picture').attr('src', people[0]['img'])
    });

    google.maps.event.addListener(belotMarker, 'click', function () {
        $('#no-activity-selected').hide();
        $('#event-info').show();
        $('#target-main-info').text('Activity: ' + people[1]['activity']);
        $('#target-from').text('From: ' + people[1]['from']);
        $('#target-to').text('To: ' + people[1]['to']);
        $('#target-profile-picture').attr('src', people[1]['img'])
    });

    google.maps.event.addListener(runningMarker, 'click', function () {
        $('#no-activity-selected').hide();
        $('#event-info').show();
        $('#target-main-info').text('Activity: ' + people[2]['activity']);
        $('#target-from').text('From: ' + people[2]['from']);
        $('#target-to').text('To: ' + people[2]['to']);
        $('#target-profile-picture').attr('src', people[2]['img'])
    });

    google.maps.event.addListener(beerMarker, 'click', function () {
        $('#no-activity-selected').hide();
        $('#event-info').show();
        $('#target-main-info').text('Activity: ' + people[3]['activity']);
        $('#target-from').text('From: ' + people[3]['from']);
        $('#target-to').text('To: ' + people[3]['to']);
        $('#target-profile-picture').attr('src', people[3]['img'])
    });

    google.maps.event.addListener(dogsWalkingMarker, 'click', function () {
        $('#no-activity-selected').hide();
        $('#event-info').show();
        $('#target-main-info').text('Activity: ' + people[4]['activity']);
        $('#target-from').text('From: ' + people[4]['from']);
        $('#target-to').text('To: ' + people[4]['to']);
        $('#target-profile-picture').attr('src', people[4]['img'])
    });
}

navigator.geolocation.getCurrentPosition(success);