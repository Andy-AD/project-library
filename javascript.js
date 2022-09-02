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
const book2 = new Book('1984', 'George Orwell', '328', true);
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
  author.classList.add('author');
  author.textContent = `Author: ${book.author}`;

  let pages = document.createElement('div');
  pages.classList.add('pages');
  pages.textContent = `Pages: ${book.pages}`;

  let isRead = document.createElement('div');
  isRead.classList.add('isRead');
  let label = document.createElement('label');
  label.setAttribute('for', 'isReady');
  label.textContent = 'Did you read it?'
  let checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox')
  checkbox.setAttribute('id', 'isRead');
  if (book.isRead) {
    checkbox.checked =  true;
  }
  isRead.appendChild(label);
  isRead.appendChild(checkbox);


  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(isRead);
  
  return bookCard
}

showBooks(myLibrary);