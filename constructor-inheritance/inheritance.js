class Animals{
    constructor(name, type){
        this.name = name;
        this.type = type;
    }    
}

class Dog extends Animals{
    constructor(name,type ,breed){
        super(name,type);
        this.name = name;
        this.breed = breed;
        this.type = type;
    }

    animalType(){
        console.log(`Animal : ${this.name}`,`Type of Animal : ${this.type}`, `Breed : ${this.breed}`);
    }
}

let a1 = new Dog("Kalu", "Omnivore", "Shiz Tzu");
a1.animalType();