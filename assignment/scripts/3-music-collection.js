console.log('***** Music Collection *****')

//- Create a variable `collection` that starts as an empty array.
let collection = [];
console.log('Record collection is empty:', collection);

//- Add a function named `addToCollection`. This function should:
//- Take in the album's `title`, `artist`, `yearPublished` as input parameters
//- Create a new object having the above properties
//- Add the new object to the end of the `collection` array
//- Return the newly created object
function addToCollection(title, artist, yearPublished) {
    let album = {
        albumTitle: title,
        albumArtist: artist,
        albumYear: yearPublished
    }
    collection.push(album);
    return album;
}

//test addToCollection
console.log('Add Rumours by Fleetwood Mac to the collection:', addToCollection('Rumours', 'Fleetwood Mac', 1977));
//add some more music albums
console.log('Add The Black Parade by My Chemical Romance to the collection:', addToCollection('The Black Parade', 'My Chemical Romance', 2006));
console.log('Add Lonerism by Tame Impala to the collection:', addToCollection('Lonerism', 'Tame Impala', 2012));

//- Add a function named `showCollection`. This function should:
//- Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
//- Console.log the number of items in the array.
//- Loop over the array and console.log each album's information formatted like: 
//`TITLE by ARTIST, published in YEAR`.
function showCollection(array){
    console.log(array.length);
    for (let i = 0; i < array.length; i++) {
        console.log(`${array[i].albumTitle} by ${array[i].albumArtist}, published in ${array[i].albumYear}`);
    }
}

//- Test the `showCollection` function.
showCollection(collection);

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
console.log('Shound find Tame Impala album:', findByArtist('Tame Impala'));
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
function search({artist, year} = {}) { //set search object of artist & year to a default blank object if not input
    let found = [];
    for (let i = 0; i < collection.length; i++) {
        if (collection[i].albumArtist === artist && 
            collection[i].albumYear === year) {
                found.push(collection[i]);
        } else if (artist === undefined && year === undefined) {
            found = collection;
        }
    return found;
    }
}
//test search
console.log('Search object empty. Should return all albums:', search({}));
console.log('Should return no albums:', search({artist: 'My Chemical Romance', year: 2022}));
console.log('Should return The Black Parade by MCR:', search({artist: 'My Chemical Romance', year: 2006}));
console.log('No search object provided. Should return all albums:', search());
