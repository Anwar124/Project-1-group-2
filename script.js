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
  