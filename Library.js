class Library extends Books {
  constructor(books) {
    this.books = [];
  }
  addBook(title, author, pages) {
    books_1 = new Book(title, author, pages)
    this.books.push(books_1)
  }
  
  findBook(bookTitle) {
    for (i = 0; i < this.books.length; i++) {
      if (bookTitle == this.books[i]) {
        return this.books[i]
      }
      else {
        console.log('Book not found')
      }
    }
  }
}