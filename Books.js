class Book {
  constructor(title,author,pages)
  {
    this.title=title;
    this.author=author;
    this.pages=pages;

  }
  addBook(title,author,pages)
  {
    books_1 = new Book(title, author, pages)
    this.books.push(books_1)
    console.log(books_1)
  }
  read()
  {
    const message="You've started reading "+this.title+" by " +this.author+" It has " +this.pages+ " pages."
    return message
  }
  
}
book_1 = new Book("Anna Karenina","	Leo Tolstoy",	864)
book_2 = new Book("To Kill a Mockingbird","Harper Lee",	281)
