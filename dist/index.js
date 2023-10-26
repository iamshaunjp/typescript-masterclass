"use strict";
//---------------------
// Generic Constraints
//---------------------
class DataCollection {
    constructor(data) {
        this.data = data;
    }
    loadOne() {
        const i = Math.floor(Math.random() * this.data.length);
        return this.data[i];
    }
    loadAll() {
        return this.data;
    }
    add(val) {
        this.data.push(val);
        return this.data;
    }
    deleteOne(id) {
        this.data = this.data.filter((item) => item.id !== id);
    }
}
const users = new DataCollection([
    { name: 'shaun', score: 125, id: 1 },
    { name: 'mario', score: 100, id: 2 },
    { name: 'peach', score: 150, id: 3 },
]);
users.deleteOne(2);
console.log('load all - ', users.loadAll());
