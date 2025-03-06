class Vehicle{
    constructor(brand,model,year){
        this.brand = brand
        this.model = model
        this.year = year
    }
}

class Car extends Vehicle{
    constructor(brand,model,year,fuelType){
        super(brand,model,year)
        this.fuelType = fuelType
    }

    describe(){
        console.log(`Brand ${this.brand} Model ${this.model} Year ${this.year} FualType ${this.fuelType}`);
    }
}

let car = new Car("bmw","x",2000,"Dieasal")
car.describe()