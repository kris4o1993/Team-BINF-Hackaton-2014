window.onload = function () {
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

    var peopleListContainer = document.getElementById('target-info');

    var peopleListTemplate = Handlebars.compile((document.getElementById('people-template')).innerHTML);

    var addPeople = peopleListTemplate( people[0] );

    peopleListContainer.innerHTML += addPeople;
};