class Person{
    constructor(name){
        this.name = name;
    }

    sayHello(){
        console.log("helloooooooo");
    }
}

class Student extends Person{
    constructor(name,grade){
        super(name);
        this.grade = grade;
    }
}

class Graduate extends Student{
    constructor(name,grade,degree){
        super(name,grade);
        this.degree = degree;
    }

    showdegree(){
        console.log(`${this.name} Degree is: ${this.degree}`);
    }
}

let g1 = new Graduate("ARYAN-KALU", 25, "NO DEGREE");
g1.showdegree();