class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
  add() {
    addBook(this.Book);
  }
  read() {
    console.log("You've started reading " + this.title + " by " + this.author + " It has " + this.pages + " pages.")
  }
}

const book = new Book('hello', 'hi', 100);
Book.read();
Book.add();