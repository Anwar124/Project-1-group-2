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
class Library extends Books {
  constructor()
  {
    this.books=[];
  }
  addBook() {
    books_1 = new Book(Book.title, Book.author, Book.pages)
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


book_1 = new Book("Anna Karenina","	Leo Tolstoy",	864)
book_2 = new Book("To Kill a Mockingbird","Harper Lee",	281)

document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    
    var searchInput = document.getElementById("searchInput").value;
  
    
    var searchResults = findBook(searchInput);
  
    
    var searchResultsElement = document.getElementById("searchResults");
    if (searchResults !== "Book not found.") {
      searchResultsElement.innerHTML = `
        <h2>Search Results</h2>
        <p>Title: ${searchResults.title}</p>
        <p>Author: ${searchResults.author}</p>
        <p>Pages: ${searchResults.pages}</p>
      `;
    } else {
      searchResultsElement.innerHTML = `<p>${searchResults}</p>`;
    }
  });
  