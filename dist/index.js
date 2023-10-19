"use strict";
//--------------
// type aliases
//--------------
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const colorOne = getRandomColor();
const colorTwo = getRandomColor();
console.log(colorOne, colorTwo);
const userOne = { name: 'mario', score: 75 };
function formatUser(user) {
    console.log(`${user.name} has a score of ${user.score}.`);
}
formatUser(userOne);
formatUser({ name: 'yoshi', score: 100 });
