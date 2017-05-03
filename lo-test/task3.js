'use strict';

const movieLists = [{
    name: "Instant Queue",
    videos: [{
        "id": 70111470,
        "title": "Die Hard",
        "boxarts": [
            { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
            { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
        ],
        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
    }, {
        "id": 654356453,
        "title": "Bad Boys",
        "boxarts": [
            { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
            { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

        ],
        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
    }]
}, {
    name: "New Releases",
    videos: [{
        "id": 65432445,
        "title": "The Chamber",
        "boxarts": [
            { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
            { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
        ],
        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
    }, {
        "id": 675465,
        "title": "Fracture",
        "boxarts": [
            { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
            { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
            { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
        ],
        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
    }]
}];

// Create a function that selects {id, title, boxart} for every video in the movieLists. This time 
// though, the boxart property in the result will be the url of the boxart object with dimensions 
// of 150x200px.
// There's just more one thing: you can't use indexers)
// Solve using map, filter, reduce
function solveChallenge(boxarts) {
    let result = [];
    boxarts.reduce(function (container, current) {
            current.videos.reduce(function (container, current) {
                console.log(current.id);
                result.push({
                    id: current.id,
                    title: current.title,
                    boxart: current.boxarts.filter(function (boxart) {
                        return boxart.width === 150&& boxart.height === 200;
                    }).reduce(function (container, current) {
                        return current
                    }, 0)
                });
                return 1
            },0);
        return 1;
    }, 0);
    return result;
}

let result = solveChallenge(movieLists);
console.log(result);