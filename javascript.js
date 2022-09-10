let myLibrary = [];

const book1 = new Book('1984', 'George Orwell', '328');
const book2 = new Book('1984', 'George Orwell', '328', true);
myLibrary.push(book1, book2);

const booksContainer = document.querySelector('.books-container');
const modal = document.querySelector('.modal');
const newBookButton = document.getElementById('new-book');
const closeButton = document.querySelector('.close');
const submitBookButton = document.getElementById('submit');

newBookButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
submitBookButton.addEventListener('click', addBookToLibrary);

function openModal() {
  modal.style.display = 'flex';
}

function closeModal() {
  clearAddBookValues();
  modal.style.display = 'none';
}

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
  let title = document.querySelector("#add-title").value;
  let author = document.querySelector("#add-author").value;
  let pages = document.querySelector("#add-pages").value;
  let read = document.querySelector("#read").checked;

  myLibrary.push(new Book(title, author, pages, read));
  clearAddBookValues();
  modal.style.display = 'none';
  showBooks(myLibrary);
}

function clearAddBookValues() {
  document.querySelector("#add-title").value = '';
  document.querySelector("#add-author").value = '';
  document.querySelector("#add-pages").value = '';
  document.querySelector("#read").checked = false;
}

function showBooks(library) {
  let id = 0;
  library.forEach(library_book => {    
    if (document.querySelector(`#book-${id}`) === null) {
      let bookCard = createBookCard(library_book,id);      
      booksContainer.appendChild(bookCard);
    }
    id++;
  })
}


function createBookCard(book, id) {
  let bookCard = document.createElement('div');
  bookCard.classList.add('book-card');
  bookCard.setAttribute('id', `book-${id}`)

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
  isRead.setAttribute('id', `checkbox-container-${id}`)
  let label = document.createElement('label');
  label.setAttribute('for', 'isRead');
  label.textContent = 'Mark as read:'
  let checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox')
  checkbox.setAttribute('id', 'isRead');
  if (book.isRead) {
    checkbox.checked = true;
    bookCard.classList.add('read-already');
  }
  checkbox.setAttribute('onchange', 'updateIsRead(this.parentElement.id)');
  isRead.appendChild(label);
  isRead.appendChild(checkbox);

  let deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.setAttribute('id', `delete-book-${id}`);
  deleteButton.classList.add('delete-book');
  deleteButton.setAttribute('onclick', 'deleteBook(this.parentElement.id)');


  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(isRead);
  bookCard.appendChild(deleteButton);

  return bookCard
}

function deleteBook(id) {
  bookToBeDeleted = document.getElementById(`${id}`);
  booksContainer.removeChild(bookToBeDeleted);
  myLibrary.splice(id,1);
  booksContainer.removeChild(lastElementChild);
  showBooks(myLibrary);
}

function updateIsRead(id) {
  let bookId = id.split('-')[2];
  let bookToBeUpdated = document.getElementById(`book-${bookId}`);
  bookToBeUpdated.classList.toggle('read-already');
  myLibrary[bookId].isRead = !myLibrary[bookId].isRead;

}

showBooks(myLibrary);



