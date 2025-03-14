const myLibrary = [];

function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.id = crypto.randomUUID();

    Book.prototype.changeReadValue = function() {
      if(this.haveRead == "Have read") {
        this.haveRead = "Have not read";
        console.log("A");
      }
      else {
        this.haveRead = "Have read";
        console.log("B");
      }
    }
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
    bookContainer.appendChild(currentBook);
  })
}

// Adding a function to only append the most recent book should make it run faster
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
  bookContainer.appendChild(currentBook);
}

// function updateRemoveButtons() {
//   const removeButtons = document.querySelectorAll(".removeButton");
//   removeButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//       const bookContainer = document.querySelector(".bookContainer");
//       bookContainer.removeChild(button.parentNode);
//     });
//   });
// }

addBookToLibrary("How to Win Friends", "Dale Carnegie", 250, "Have read");
addBookToLibrary("Meditations", "Marcus Aurelius", 200, "Have read");

displayBooks();
// updateRemoveButtons();

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
  // updateRemoveButtons();
  dialog.close();
  removeButtons = document.querySelectorAll(".removeButton");
});

// toggleButtons = document.querySelectorAll(".toggleButton");
// toggleButtons.forEach((toggleButton) => {
//   toggleButton.addEventListener("click", () => {
//     let currentBook = toggleButton.parentNode;
//     console.log(currentBook);
//     currentBook.changeReadValue();
//   });
// })


