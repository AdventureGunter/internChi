'use strict';

const boxarts = [
    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
    { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
    { width: 425, height: 150, url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
];

function solveChallenge(boxarts) {
    return boxarts.filter(function (item) {
        return item.width * item.height === boxarts.reduce(function (container, current) {
                if (container < current.width * current.height)
                {
                    return current.width * current.height;
                }
                else return container;
            }, 0);
    }).map(function (mapItem) {
        return mapItem.url;
    }).reduce(function (container, current) {
        return current.url;
    });
}

let a = solveChallenge (boxarts);
console.log(a);

// Try combining reduce() with map() to reduce multiple boxart objects to a single value: 
// the url of the largest box art.
