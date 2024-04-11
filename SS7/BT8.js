"use strict";
const book = {
    title: "realds",
    author: "blabalsd",
    price: 25.99,
    printBook: function () {
        console.log("Title:", this.title);
        console.log("Author:", this.author);
        console.log("Price:", this.price);
    },
    updateBook: function (title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
};
book.printBook();
book.updateBook("blablals", "akshd", 1912399);
book.printBook();
