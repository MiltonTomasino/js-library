const myLibrary = [];

class Book {
    constructor(title, author, pageNum, read, id) {
        this.title = title;
        this.author = author;
        this.id = id;
        this.pageNum = pageNum;
        this.read = read;
    }

    toggleRead() {
        this.read = !this.read;
    }
}

function addBookToLibrary(title, author, pageNum, read) {
    let id = crypto.randomUUID();
    let book = new Book(title, author, pageNum, read, id)

    myLibrary.push(book);
}

addBookToLibrary("Leviathan Wakes", "James S. A. Corey", 582, true);
addBookToLibrary("Childhood's End", "Arthur C. Clarke", 224, true);
addBookToLibrary("Mistborn: The Final Empire", "Brandon Sanderson", 655, true);
addBookToLibrary("Hyperion", "Dan Simmons", 481, false);

// console.log(myLibrary);
// console.log(myLibrary[0].title);
let container = document.querySelector(".container");
let newBookBtn = document.querySelector("#new-book");


function displayLibrary() {
    const oldCards = document.querySelectorAll(".card");
    oldCards.forEach(card => card.remove());

    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let child = createCardElement(book, i);
    
        container.insertBefore(child, newBookBtn)
    }
}

function createCardElement(book, index) {
    let child = document.createElement("div");
    child.classList.add("card");

    let div1 = document.createElement("div");
    div1.classList.add("info1");
    child.appendChild(div1);

    let div2 = document.createElement("div");
    div2.classList.add("info2")
    child.appendChild(div2);

    let text = document.createElement("h2");
    text.textContent = `${book.title}`;

    div1.appendChild(text);

    let subtitle = document.createElement("p");
    subtitle.textContent = `by ${book.author}`;

    div1.appendChild(subtitle);


    let info = document.createElement("p");
    info.textContent = `Page Count: ${book.pageNum}`;

    div2.appendChild(info);

    let label = document.createElement("label");
    label.textContent = "Read:";
    div2.appendChild(label)

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = book.read;

    div2.appendChild(checkbox);

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.id = book.id;
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", (e) => {
        console.log(book.id);
        console.log(index);
        
        myLibrary.splice(index, 1);
        displayLibrary();
    })
    
    child.appendChild(deleteBtn)

    return child;
}

let modal = document.querySelector(".modal");

newBookBtn.addEventListener("click", () => {
    modal.showModal();
})

let addBookBtn = document.querySelector("#add-book");

addBookBtn.addEventListener("click", (e) => {
    e.preventDefault(); // prevent browser from refreshing on submit
    
    let title = document.querySelector("#title");
    let author = document.querySelector("#author");
    let pageNum = document.querySelector("#page-count");
    let read = document.querySelector("#read-status");

    addBookToLibrary(title.value, author.value, pageNum.value, read.checked);
    
    displayLibrary()
    modal.close();

    title.value = "";
    author.value = "";
    pageNum.value = "";
    read.checked = false;

})

displayLibrary();