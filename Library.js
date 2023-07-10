class Library extends Books {
  constructor(books)
  {
    this.books=[];
  }
  addBook(title,author,pages){
    books1= new Book(title,author,pages)
    this.books.push(books1)
    return books1
  }
}