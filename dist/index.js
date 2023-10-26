"use strict";
//--------------
// Generics 101
//--------------
function logAndReturnString(val) {
    console.log(val);
    return val;
}
function logAndReturnNumber(val) {
    console.log(val);
    return val;
}
function logAndReturnBoolean(val) {
    console.log(val);
    return val;
}
function logAndReturnValue(val) {
    console.log(val);
    return val;
}
const resultOne = logAndReturnValue('mario');
const resultTwo = logAndReturnValue(25);
// example 2
function getRandomArrayValue(values) {
    const i = Math.floor(Math.random() * values.length);
    return values[i];
}
const users = [
    { name: 'mario', score: 100 },
    { name: 'peach', score: 150 },
    { name: 'wario', score: 75 },
    { name: 'yoshi', score: 90 },
];
const randomUser = getRandomArrayValue(users);
console.log(randomUser.name);
