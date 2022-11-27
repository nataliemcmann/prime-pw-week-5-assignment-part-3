console.log('***** Music Collection *****')

//- Create a variable `collection` that starts as an empty array.
let collection = [];
console.log('Record collection is empty:', collection);

//- Add a function named `addToCollection`. This function should:
//- Take in the album's `title`, `artist`, `yearPublished` as input parameters
//- Create a new object having the above properties
//- Add the new object to the end of the `collection` array
//- Return the newly created object

function addToCollection(title, artist, yearPublished, trackArray) {
    let tracks = Object.fromEntries(trackArray);
    let album = { 
        albumTitle: title,
        albumArtist: artist,
        albumYear: yearPublished,
        albumTracks: tracks
    }
    collection.push(album);
    return album;
}

//test addToCollection
//- Test the `addToCollection` function:
//  - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. 
// (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//  - Console.log each album as added using the returned value.
//  - After all are added, console.log the `collection` array.

//create Rumours track array
let fmArray = [
    ['track1', 'Dreams'], 
    ['time1', '4:17'], 
    ['track2', 'Go Your Own Way'],
    ['time2', '3:39'], 
    ['track3', 'The Chain'], 
    ['time3', '4:30']
];
console.log('Add Rumours by Fleetwood Mac to the collection:', addToCollection('Rumours', 'Fleetwood Mac', 1977, fmArray));
//add some more music albums
console.log('Add The Black Parade by My Chemical Romance to the collection:', 
addToCollection('The Black Parade', 'My Chemical Romance', 2006, //split console.log statement so I test something
//testing if I can add tracks straight in
[
    ['track1', 'The End.'], 
    ['time1', '1:53'], 
    ['track2', 'Welcome to the Black Parade'],
    ['time2', '5:11'], 
    ['track3', 'House of Wolves'], 
    ['time3', '3:04']
])); //and it works but looks messy

//creating track array beforehand lets my console log statement be on one line
let tiArray = [
    ['track1', 'Be Above It'], 
    ['time1', '3:21'], 
    ['track2', 'Feels Like We Only Go Backwards'],
    ['time2', '3:13'], 
    ['track3', 'Elephant'], 
    ['time3', '3:31']
]
console.log('Add Lonerism by Tame Impala to the collection:', addToCollection('Lonerism', 'Tame Impala', 2012, tiArray));

//make 3 more albums
let wigArray = [
    ['track1', 'Hot Potato'],
    ['time1', '1:14'],
    ['track2', 'Fruit Salad'],
    ['time2', '2:28'],
    ['track3', 'Willaby Wallaby Woo'],
    ['time3', '1:34']
]
// Add the Wiggles
console.log('Add Yummy Yummy by The Wiggles to the collection:', addToCollection('Yummy Yummy', 'The Wiggles', 1994, wigArray));
collection[3].funFact = "The Wiggles covered Tame Impala's Elephant and re-mixed it with Fruit Salad in 2020. It was awesome.";
console.log(`Fun fact: ${collection[3].funFact}`); //because I think everyone should know

// Add Phoebe Bridges
let pbArray = [
    ['track1', 'Garden Song'],
    ['time1', '3:39'],
    ['track2', 'Moon Song'],
    ['time2', '4:37'],
    ['track3', 'I Know the End'],
    ['time3', '5:44']
]

console.log('Add Punisher by Phoebe Bridgers to the collection:', addToCollection('Punisher', 'Phoebe Bridgers', 2020, pbArray));

// Add Three Cheers for Sweet Revenge
let mcArray = [
    ['track1', 'Helena'],
    ['time1', '3:23'],
    ['track2', 'To the End'],
    ['time2', '3:01'],
    ['track3', 'The Ghost of You'],
    ['time3', '3:23']
]

console.log('Add Three Cheers for Sweet Revenge by MCR to the collection:', addToCollection('Three Cheers for Sweet Revenge', 'My Chemical Romance', 2004, mcArray));

//log arrary
console.log('Added 6 records to by music collection:', collection);

//- Add a function named `showCollection`. This function should:
//- Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
//- Console.log the number of items in the array.
//- Loop over the array and console.log each album's information formatted like: 
//`TITLE by ARTIST, published in YEAR`.
function showCollection(array){
    console.log('I have this many music albums:', array.length);
    for (let i = 0; i < array.length; i++) {
        console.log(`${array[i].albumTitle} by ${array[i].albumArtist}, published in ${array[i].albumYear}:
        1. ${array[i].albumTracks.track1} : ${array[i].albumTracks.time1} 
        2. ${array[i].albumTracks.track2} : ${array[i].albumTracks.time2} 
        3. ${array[i].albumTracks.track3} : ${array[i].albumTracks.time3}`);
    }
    return "Cool collection, right?"
}

//- Test the `showCollection` function.
console.log(showCollection(collection));

//- Add a function named `findByArtist`. This function should:
//  - Take in `artist` (a string) parameter
//  - Create an array to hold any results, empty to start
//  - Loop through the `collection` and add any objects with a matching artist to the array.
//  - Return the array with the matching results. If no results are found, return an empty array.
function findByArtist(artist) {
    let found = [];
    for (let i = 0; i < collection.length; i++) {
        if (collection[i].albumArtist === artist) {
            found.push(collection[i]);
        } 
    } 
    return found;
}

//- Test the `findByArtist` function.
console.log('Shound find MCR albums:', findByArtist('My Chemical Romance'));
console.log('Should return empty array:', findByArtist('Bing Crosby'));

//Stretch Goals

// - Create a function called `search`. This function should:
//  - Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
//  ```
//  { artist: 'Ray Charles', year: 1957 }
//  ```
//  - The returned output from `search` should meet these requirements:
//  - Return a new array of all items in the `collection` matching *all* of the search criteria.
//  - If no results are found, return an empty array.
//  - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.
console.log(collection[0].albumTracks); //check if album tracks are a nested object

function search({artist, year, trackName} = {}) { //set search object of artist & year to a default blank object if no input
    let found = [];
    for (let i = 0; i < collection.length; i++) {
        if (collection[i].albumArtist === artist && 
            collection[i].albumYear === year) {
                    if(collection[i].albumTracks.track1 === trackName ||
                    collection[i].albumTracks.track2 === trackName ||
                    collection[i].albumTracks.track3 === trackName) {
                        found.push(collection[i]);
                    }
                }
        } if (artist === undefined || 
            year === undefined || 
            trackName === undefined) {
            found = collection;
        }
        return found;
    }

//test search
console.log('Search object empty. Should return all albums:', search({}));
console.log('Should return no albums:', search({artist: 'My Chemical Romance', year: 2022, trackName: 'The Ghost of You'}));
console.log('Should return The Black Parade by MCR:', search({artist: 'My Chemical Romance', year: 2006, trackName: 'The End.'}));
console.log('No search object provided. Should return all albums:', search());
