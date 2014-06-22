window.onload = function () {
    var people = [{
        activity: 'volleyball',
        from: '09:00',
        to: '11:00'
    }, {
        activity: 'basketball',
        from: '09:00',
        to: '11:00'
    }, {
        activity: 'football',
        from: '09:00',
        to: '11:00'
    }, {
        activity: 'chess',
        from: '09:00',
        to: '11:00'
    }, {
        activity: 'belot',
        from: '09:00',
        to: '11:00'
    }, {
        activity: 'running',
        from: '09:00',
        to: '11:00'
    }, {
        activity: 'walking dogs',
        from: '09:00',
        to: '11:00'
    }];

    var peopleListContainer = document.getElementById('target-info');

    var peopleListTemplate = Handlebars.compile((document.getElementById('people-template')).innerHTML);

    var addPeople = peopleListTemplate( people[0] );

    peopleListContainer.innerHTML += addPeople;
};