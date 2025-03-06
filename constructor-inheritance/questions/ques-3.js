class Animal{
    makeSound(){

    }
}

class Dog extends Animal{
    makeSound(){
        console.log("Barking...");
        
    }
}
class Cat extends Animal{
    makeSound(){
        console.log("meowing .....");
    }
}

let d1 = new Dog()
let c1 = new Cat()

d1.makeSound()
c1.makeSound()