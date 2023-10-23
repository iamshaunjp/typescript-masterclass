"use strict";
class MenuItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    get details() {
        return `${this.title} - £${this.price}`;
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
    format() {
        let formatted = this.details + '\n';
        // base
        formatted += `Pizza on a ${this.base} base `;
        // toppings
        if (this.toppings.length < 1) {
            formatted += 'with no toppings.';
        }
        if (this.toppings.length > 0) {
            formatted += `with: ${this.toppings.join(', ')}`;
        }
        return formatted;
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
