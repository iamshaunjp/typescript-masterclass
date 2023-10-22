"use strict";
//----------------------
// extending interfaces
//----------------------
const user = {
    id: 1,
    format() {
        return `This user has an id of ${this.id}`;
    },
};
const bill = {
    id: 2,
    amount: 50,
    server: 'mario',
    format() {
        return `Bill with id ${this.id} has £${this.amount} to pay`;
    },
};
function printFormatted(val) {
    console.log(val.format());
}
function printBill(bill) {
    console.log('server:', bill.server);
    console.log(bill.format());
}
// testing the functions
printFormatted(user);
printFormatted(bill);
// printBill(user) --> not allowed
printBill(bill);
