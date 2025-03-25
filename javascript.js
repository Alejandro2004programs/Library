const myLibrary = [];

class Book {
  constructor(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.id = crypto.randomUUID();
  }
}

Book.prototype.changeReadValue = function() {
    if(this.haveRead == "Have read") {
      this.haveRead = "Have not read";
    }
    else {
      this.haveRead = "Have read";
    }
}

function addBookToLibrary(title, author, pages, haveRead) {
  bookToAdd = new Book(title, author, pages, haveRead);
  myLibrary.push(bookToAdd);
}

function displayMostRecentBook() {
  bookContainer = document.querySelector(".bookContainer");
  let currentBook = document.createElement("div");
  book = myLibrary.at(-1);
  for(element in book) {
    if(element != "id" && element != "changeReadValue") {
      let current = document.createElement("p");
      current.textContent = book[element];
      currentBook.appendChild(current)
    }
  }
  let toggleButton = document.createElement("button");
    toggleButton.textContent = "Change read status";
    toggleButton.setAttribute("class", "toggleButton");
    currentBook.appendChild(toggleButton);
    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.setAttribute("class", "removeButton");
    currentBook.appendChild(removeButton);
    currentBook.setAttribute("class", "book");
    currentBook.setAttribute("data-id", book.id);
    bookContainer.appendChild(currentBook);
}

function updateRemoveButtons() {
  const removeButtons = document.querySelectorAll(".removeButton");
  let button = removeButtons[removeButtons.length - 1];
  button.addEventListener("click", () => {
  const bookContainer = document.querySelector(".bookContainer");
  bookContainer.removeChild(button.parentNode);
  });
}

function updateToggleButtons() {
  toggleButtons = document.querySelectorAll(".toggleButton");
  let button = toggleButtons[toggleButtons.length - 1];
  button.addEventListener("click", () => {
  let currentBook = button.parentNode;
  let bookId = currentBook.getAttribute('data-id');
  for(let i = 0; i < myLibrary.length; i++) {
    if(myLibrary[i].id == bookId) {
      myLibrary[i].changeReadValue();
      let children = currentBook.children;
      children[3].textContent = myLibrary[i].haveRead;
    }
  }
})
}

const openButton = document.querySelector(".openButton");
const cancelButton = document.querySelector(".cancelButton");
const addButton = document.querySelector(".addButton");
const dialog = document.querySelector("dialog");
const form = document.querySelector(".form");

openButton.addEventListener("click", () => {
  dialog.showModal();
})

cancelButton.addEventListener("click", () => {
  dialog.close();
});

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  const bookName = form.bookName.value;
  const authorName = form.authorName.value;
  const numberOfPages = form.numberOfPages.value;
  const haveReadYet = form.haveReadYet.value;
  addBookToLibrary(bookName, authorName, numberOfPages, haveReadYet);
  displayMostRecentBook();
  updateRemoveButtons();
  updateToggleButtons();
  dialog.close();
});






