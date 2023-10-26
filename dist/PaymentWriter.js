"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const paymentsWriter = new index_1.CSVWriter(['amount', 'notes', 'id', 'to']);
// add initial rows
paymentsWriter.addRows([
    { id: 1, amount: 30, notes: 'payment for plumbing work', to: 'yoshi' },
    { id: 2, amount: 50, to: 'peach', notes: 'payment for design work' },
    { id: 3, amount: 25, to: 'yoshi', notes: 'clearing a debt' },
]);
// save the file
paymentsWriter.save('data/payments.csv');
