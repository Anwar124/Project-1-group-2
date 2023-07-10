class Book {
  constructor(title,author,pages)
  {
    this.title=title;
    this.author=author;
    this.pages=pages;
   
  }
  read()
  {
    const message="You've started reading "+this.title+" by " +this.author+" It has " +this.pages+ " pages."
    return message
  }
  
}