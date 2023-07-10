class Library extends Books {
  constructor()
  {
    this.books=[];
  }
  addBook(title, author, pages) {
    books_1 = new Book(title, author, pages)
    this.books.push(books_1)
    console.log(books_1)
    return books_1
  }
  findBook(title) {
    for (i = 0; i < this.books.length; i++) {
        if (title == this.books[i]) {
            return this.books[i]
        }
        else {
            console.log('Book not found')
        }
    }
}

}
