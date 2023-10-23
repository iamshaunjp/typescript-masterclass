"use strict";
class MenuItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    get details() {
        return `${this.title} - £${this.price}`;
    }
    format() {
        return `This menu item is called ${this.title} and is £${this.price}`;
    }
}
class Pizza extends MenuItem {
    constructor(title, price) {
        super(title, price);
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
// select base
pizza.selectBase('garlic');
// add items
pizza.addTopping('mushrooms');
pizza.addTopping('peppers');
pizza.addTopping('olives');
function printFormatted(val) {
    console.log(val.format());
}
printFormatted(pizza);
