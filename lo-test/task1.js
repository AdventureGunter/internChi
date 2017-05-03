'use strict';
const lists = [
    {
        "id": 5434364,
        "name": "New Releases"
    },
    {
        "id": 65456475,
        name: "Thrillers"
    }
];

const videos = [
    {
        "listId": 5434364,
        "id": 65432445,
        "title": "The Chamber"
    },
    {
        "listId": 5434364,
        "id": 675465,
        "title": "Fracture"
    },
    {
        "listId": 65456475,
        "id": 70111470,
        "title": "Die Hard"
    },
    {
        "listId": 65456475,
        "id": 654356453,
        "title": "Bad Boys"
    }
];

// We have 2 arrays each containing lists, and videos respectively. Each video has a listId field
// indicating its parent list. We want to build an array of list objects, each with a name and a
// videos array. The videos array will contain the video's id and title. In other words we want to
// build the following structure:
// [
// 	{
// 		"name": "New Releases",
// 		"videos": [
// 			{
// 				"id": 65432445,
// 				"title": "The Chamber"
// 			},
// 			{
// 				"id": 675465,
// 				"title": "Fracture"
// 			}
// 		]
// 	},
// 	{
// 		"name": "Thrillers",
// 		"videos": [
// 			{
// 				"id": 70111470,
// 				"title": "Die Hard"
// 			},
// 			{
// 				"id": 654356453,
// 				"title": "Bad Boys"
// 			}
// 		]
// 	}
// ]
// TODO: Solve using map and filter functions

function solveIssue(lists, videos) {
    return lists.map(function (item) {
        return {
            name: item.name,
            videos: videos.filter(function (video) {
                return video.listId === item.id

            })
        };
    });
}

let resultArr = solveIssue(lists, videos);

console.log(resultArr[0]);
console.log(resultArr[1]);

