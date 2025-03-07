class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getInfo(){
        console.log(`Book Title : ${this.title}   Book Author : ${this.author}   Book Year : ${this.year}   Issue Number : ${this.issueNumber}`);
    }
}

class Magazine extends Book{
    constructor(title, author, year, issueNumber){
        super(title, author, year);
        this.issueNumber = issueNumber;
    }
}

let m1 = new Magazine("Vogue", "ABC", 2025, 159);
m1.getInfo();