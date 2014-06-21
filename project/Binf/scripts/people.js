var people = [{
    nickname: 'epitsin',
    gender: 'Female',
    age: '21',
    interests: 'Programming, Basketball, Travelling, Belot'
}, {
    nickname: 'adzhazhev',
    gender: 'Male',
    age: '22',
    interests: 'Programming, Football, Computer Games, Belot'
}, {
    nickname: 'kris4o1993',
    gender: 'Male',
    age: '21',
    interests: 'Programming, Game of thrones, Computer Games, Belot'
}, {
    nickname: 'chervenkov',
    gender: 'Female',
    age: '23',
    interests: 'Programming, Sport, Computer Games, Belot'
}, {
    nickname: 'pesho',
    gender: 'Male',
    age: '65',
    interests: 'Pedophilia, Little children, BDSM'
}];

window.onload = function () {
    var people = [{
        nickname: 'epitsin',
        gender: 'Female',
        age: '21',
        interests: 'Programming, Basketball, Travelling, Belot'
    }, {
        nickname: 'adzhazhev',
        gender: 'Male',
        age: '22',
        interests: 'Programming, Football, Computer Games, Belot'
    }, {
        nickname: 'kris4o1993',
        gender: 'Male',
        age: '21',
        interests: 'Programming, Game of thrones, Computer Games, Belot'
    }, {
        nickname: 'chervenkov',
        gender: 'Female',
        age: '23',
        interests: 'Programming, Sport, Computer Games, Belot'
    }, {
        nickname: 'pesho',
        gender: 'Male',
        age: '65',
        interests: 'Pedophilia, Little children, BDSM'
    }];

    var peopleListContainer = document.getElementById('target-info');

    var peopleListTemplate = Handlebars.compile((document.getElementById('people-template')).innerHTML);

    //// empty the container
    //while (authorsListContainer.firstChild) {
    //    authorsListContainer.removeChild(authorsListContainer.firstChild);
    //}

    //authorsListContainer.innerHTML = authorsListTemplate({
    //    authors: authors
    //});


    var addPeople = peopleListTemplate( people[0] );

    peopleListContainer.innerHTML += addPeople;
};