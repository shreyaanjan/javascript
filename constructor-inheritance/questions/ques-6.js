class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price
        this.warrantyPeriod = "No Warrantyyyyuyyyuyuy"
    }
    describe() {
        console.log(`Product Is : ${this.name} Warranty : ${this.warrantyPeriod}`);

    }
}

class Electronics extends Product {
    constructor(name, price, warrantyPeriod) {
        super(name, price)
        this.warrantyPeriod = warrantyPeriod
    }

    describe() {
        console.log(`Product Is : ${this.name} Warranty : ${this.warrantyPeriod}`);
    }
}

let p1 = new Product("ac", 20000,)
let e1 = new Electronics("ac", 20000, 54)

p1.describe()
e1.describe()