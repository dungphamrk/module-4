var Book = /** @class */ (function () {
    function Book(title, author) {
        this.title = title;
        this.author = author;
    }
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    return Book;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.printBooks = function () {
        console.log("Danh sách các quyển sách trong thư viện:");
        this.books.forEach(function (book, index) {
            console.log(index + 1 + ". " + book.getTitle() + " - " + book.getAuthor());
        });
    };
    return Library;
}());
var book1 = new Book("1", "1");
var book2 = new Book("2", "2");
var book3 = new Book("3", "3");
var book4 = new Book("4", "4");
var book5 = new Book("5", "5");
var library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.printBooks();
