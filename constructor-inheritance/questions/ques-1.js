class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    greet(){
        console.log(`Gretting... ${this.firstName } ${this.lastName} ${this.jobTitle}` );
    }

}

class Employee extends Person{
    constructor(firstName, lastName, age,jobTitle){
        super(firstName, lastName, age)
        this.jobTitle = jobTitle
    }

}

let Employee1 = new Employee("sheru", "Anjan",25,"chalu")
Employee1.greet() 