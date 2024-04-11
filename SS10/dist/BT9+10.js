var Book = /** @class */ (function () {
    function Book(title, author, quantiy) {
        if (quantiy === void 0) { quantiy = 1; }
        this.title = title;
        this.author = author;
        this.quantity = quantiy;
    }
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.getQuantity = function () {
        return this.quantity;
    };
    Book.prototype.setQuantity = function (quantity) {
        return this.quantity = quantity;
    };
    return Book;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        var result = this.books.find(function (item) { return item.getTitle() == book.getTitle(); });
        if (result) {
            result.setQuantity(result.getQuantity() + 1);
        }
        else
            this.books.push(book);
    };
    Library.prototype.printBooks = function () {
        this.books.forEach(function (book, index) {
            console.log(index + 1 + ". " + book.getTitle() + " - " + book.getAuthor() + " - " + book.getQuantity());
        });
    };
    return Library;
}());
var book1 = new Book("1", "1", 12);
var book2 = new Book("2", "2");
var book3 = new Book("3", "3", 32);
var book4 = new Book("4", "4");
var book5 = new Book("5", "5");
var library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.printBooks();
