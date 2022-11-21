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