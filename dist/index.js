"use strict";
//------------------
// access modifiers
//------------------
class Pizza {
    constructor(title, price) {
        this.title = title;
        this.price = price;
        // title: string
        // price: number
        this.base = 'classic';
        this.toppings = [];
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
    removeTopping(topping) {
        this.toppings = this.toppings.filter((t) => t !== topping);
    }
    selectBase(b) {
        this.base = b;
    }
}
const pizza = new Pizza('mario special', 15);
pizza.selectBase('garlic');
pizza.addTopping('mushrooms');
pizza.addTopping('olives');
console.log(pizza);
// console.log(pizza.title, pizza.price, pizza.toppings)
