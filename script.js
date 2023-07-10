document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission from refreshing the page
    
    // Get the input value
    var searchInput = document.getElementById("searchInput").value;
    
    // Call the findBook() function from the Library class with the inputted title
    var searchResults = findBook(searchInput);
    
    // Display the search results
    var searchResultsElement = document.getElementById("searchResults");
    if (searchResults !== "Book not found.") {
      searchResultsElement.textContent = "Title: " + searchResults.title + ", Author: " + searchResults.author + ", Pages: " + searchResults.pages;
    } else {
      searchResultsElement.textContent = searchResults;
    }
  });
  