class Book {
    private title: string;
    private author: string;
    private quantity:number;
    constructor(title: string, author: string,quantiy:number=1) {
        this.title = title;
        this.author = author;
        this.quantity=quantiy;
    }
     getTitle(): string {
        return this.title;
    }
    getAuthor(): string {
        return this.author;
    }
    getQuantity():number{
        return this.quantity;
    }
    setQuantity( quantity:number):number{
       return this.quantity=quantity;
    }
}

class Library {
    private books: Book[];
    constructor() {
        this.books = [];
    }
    public addBook(book: Book): void {
        this.books.push(book);
    }
    public printBooks(): void {
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.getTitle()} - ${book.getAuthor()} - ${book.getQuantity()}`);
        });
    }
}
const book1 = new Book("1", "1",12);
const book2 = new Book("2", "2");
const book3 = new Book("3", "3",32);
const book4 = new Book("4", "4")
const book5 = new Book("5", "5");
const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.printBooks();
