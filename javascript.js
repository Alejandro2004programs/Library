const myLibrary = [];

function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}

function addBookToLibrary(title, author, pages, haveRead) {
  bookToAdd = new Book(title, author, pages, haveRead);
  myLibrary.push(bookToAdd);
}

function displayBooks() {
  const bookContainer = document.querySelector(".bookContainer");
  myLibrary.forEach((book) => {
    let currentBook = document.createElement("div");
    for(element in book) {
      let current = document.createElement("p");
      current.textContent = book[element];
      currentBook.appendChild(current)
    }
    currentBook.setAttribute("class", "book");
    bookContainer.appendChild(currentBook);
  })
}

// Adding a function to only append the most recent book should make it run faster
function displayMostRecentBook() {
  bookContainer = document.querySelector(".bookContainer");
  let currentBook = document.createElement("div");
  book = myLibrary.at(-1);
  for(element in book) {
    let current = document.createElement("p");
    current.textContent = book[element];
    currentBook.appendChild(current);
  }
  currentBook.setAttribute("class", "book");
  bookContainer.appendChild(currentBook);
}

addBookToLibrary("How to Win Friends", "Dale Carnegie", 250, "Have Read");
addBookToLibrary("Meditations", "Marcus Aurelius", 200, "Have Read");

displayBooks();

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
  dialog.close();
});



