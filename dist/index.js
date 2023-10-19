"use strict";
//--------
// tuples
//--------
let person = ['mario', 30, true];
// person[0] = false
person[0] = 'mario';
//-----------------
// tuples examples
//-----------------
let hsla;
hsla = [200, '100%', '50%', 1];
let xy;
xy = [94.7, 20.1];
function useCoords() {
    // get coords of something
    const lat = 100;
    const long = 50;
    return [lat, long];
}
const [lat, long] = useCoords();
//--------------
// named tuples
//--------------
let user;
user = ['peach', 25];
console.log(user[0]);
