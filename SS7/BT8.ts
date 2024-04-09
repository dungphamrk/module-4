const book = {
    title: "realds",
    author: "blabalsd",
    price: 25.99,

    printBook: function(): void {
        console.log("Title:", this.title);
        console.log("Author:", this.author);
        console.log("Price:", this.price);
    },

    updateBook: function(title: string, author: string, price: number): void {
        this.title = title;
        this.author = author;
        this.price = price;
    }
};

book.printBook();

book.updateBook("blablals", "akshd", 1912399);

book.printBook();
