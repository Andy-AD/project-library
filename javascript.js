let myLibrary = [];
const booksContainer = document.querySelector('.books-container');

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.isRead = read || false;
}

Book.prototype.info = function () {
  let readString = (this.isRead) ? 'read already' : 'not read yet';
  return `${this.title} by ${this.author}, ${this.pages} pages, ${readString}.`
}

function addBookToLibrary() {

}

const book1 = new Book('1984', 'George Orwell', '328');
const book2 = new Book('1984', 'George Orwell', '328');
myLibrary.push(book1, book2);


function showBooks(library) {
  library.forEach(library_book => {
    let bookCard = createBookCard(library_book)
    booksContainer.appendChild(bookCard);
  })
}

function createBookCard(book) {
  let bookCard = document.createElement('div');
  bookCard.classList.add('book-card');
  let title = document.createElement('div');
  title.classList.add('title');
  title.textContent = `Title: ${book.title}`;
  let author = document.createElement('div');
  author.textContent = `Author: ${book.author}`;
  let pages = document.createElement('div');
  pages.textContent = `Pages: ${book.pages}`;
  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  
  return bookCard
}

showBooks(myLibrary);