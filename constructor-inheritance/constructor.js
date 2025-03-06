class Students{
    constructor(name, grid, marks){
        this.name = name;
        this.grid = grid;
        this.marks = marks;
    }

    getStudentInfo(){
        console.log(`Name : ${this.name}`, `GRID : ${this.grid}`, `Marks : ${this.marks}`);
    }
}

let s1 = new Students("Shreya", 1739, [40, 45, 49]);
// s1.getStudentInfo();
console.log(s1.marks);
console.log(s1.name);