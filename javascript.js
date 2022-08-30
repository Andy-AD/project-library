let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = read || false;
  }

  Book.prototype.info = function() {
    let readString = (this.isRead) ? 'read already' : 'not read yet';
    return `${title} by ${author}, ${pages} pages, ${readString}`
  }

  function addBookToLibrary() {
    
  }