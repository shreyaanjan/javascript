class Shape{
    constructor(color){
        this.color= color;
    }

    area(){
        console.log("Area");
    }
}

class Rectangle extends Shape{
    constructor(color, width, height){
        super(color);
        this.width = width;
        this.height = height;
    }

    area(){
        console.log(`Area : ${this.width * this.height}`)
    }
}

let r1 = new Rectangle("red", 2, 2);
r1.area(); 