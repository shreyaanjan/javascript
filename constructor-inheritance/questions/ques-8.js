class Person {
    #age = 15
    constructor(name) {
        this.name = name;
    }

    getAge() {
        console.log(this.#age)
    }

}

let o = new Person("k")

o.getAge()