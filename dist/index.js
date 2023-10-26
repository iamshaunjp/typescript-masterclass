"use strict";
//-------------------
// Generic Interface
//-------------------
const collectionOne = {
    data: ['mario', 'luigi', 'peach'],
    name: 'mario characters',
};
const collectionTwo = {
    data: [10, 15, 27, 3, 9, 34],
    name: 'winning lottery numbers',
};
function randomCollectionItem(c) {
    const i = Math.floor(Math.random() * c.data.length);
    return c.data[i];
}
const resultOne = randomCollectionItem(collectionOne);
const resultTwo = randomCollectionItem(collectionTwo);
console.log(resultOne, resultTwo);
