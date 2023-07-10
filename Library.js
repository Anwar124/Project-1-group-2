class Book {
  constructor(title,author,pages)
  {
    this.title=title;
    this.author=author;
    this.pages=pages;

  }
  read()
  {
    console.log("You've started reading "+this.title+" by "+this.author+" It has " +this.pages+ " pages.")
  }
  
}
class Library {
  constructor()
  {
    this.books=[];
  }
  addBook(Book) {
    
    Book_added = new Book()
    this.books.push(book_result)
    console.log(this.books)
  }
  findBook(title) {
    for (i = 0; i < this.books.length; i++) {
        if (title == (this.books[i].title) { 
            book_result().read()
        }
        else {
            console.log('Book not found')
        }
    }
}

}

