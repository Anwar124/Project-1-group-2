findBook(bookTitle) {
    for (i = 0; i < this.books.length; i++) {
        if (bookTitle == this.books[i]) {
            return this.books[i]
        }
        else {
            console.log('Book not found')
        }
    }
}