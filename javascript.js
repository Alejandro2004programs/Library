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

addBookToLibrary("How to Win Friends", "Dale Carnegie", 250, "Have Read");
addBookToLibrary("Meditations", "Marcus Aurelius", 200, "Have Read");


displayBooks();