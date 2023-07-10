class Library extends Books {
  constructor(books)
  {
    this.books=[];
  }
  addBook(title,author,pages){
    books_1= new Book(title,author,pages)
    this.books.push(books_1)
    return books_1
  }
}
