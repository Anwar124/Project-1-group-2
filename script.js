class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
  read() {
    console.log(`You've started reading ${this.title} by ${this.author}. It has ${this.pages} pages.`)
  }
}

class Library {
  constructor() {
    this.libraryBooks = [];
  }

  addBook(bookObject) {
    this.libraryBooks.push(bookObject)
    console.log(bookObject)
  }

  findBook(bookTitle) {
    var increment = 0;
    for (let i = 0; i < this.libraryBooks.length; i++) {
      if (bookTitle == (this.libraryBooks[i]).title) {
        console.log(this.libraryBooks[i])
        return this.libraryBooks[i]
        break;
      }
      increment++
    }
    if (increment == this.libraryBooks.length) console.log('Book not found')
  }
  createTable() {
    let table = document.createElement("table");
    for (let i = 0; i < this.libraryBooks.length; i++) {
      let row = table.insertRow(i);
      for (let j = 0; j < this.libraryBooks[i].length; j++) {
        row.insertCell(j).innerHTML = array[i][j];
      }
    }
    document.getElementById('list-l1').innerHTML=createTable()
  }
}

// var lib = new Library([''])

 var Book1 = new Book('hi', 'hello', 100)
 var Book2 = new Book('hala', 'kifak', 200)
 var library = new Library();
// Book1.read();
 library.addBook(Book1);
 library.addBook(Book2);
 console.log(library)
// library.findBook('hi')
// library.findBook('hello')
// library.findBook('hello')
// library.findBook('hello')
// library.findBook('hi')
// library.findBook('hello')
// library.findBook('hello')
// library.findBook('hello')

document.getElementById("searchForm").addEventListener("submit", function (event) {
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


function addBook() {
  titlenew=document.getElementById('titlenew').value;

  authornew=document.getElementById('authornew').value;
  
  pagesnew=document.getElementById('pagesnew').value;

let newbook=new Book(titlenew,authornew,pagesnew)
console.log("It is added")
library.addBook(newbook)
console.log(library)
}



