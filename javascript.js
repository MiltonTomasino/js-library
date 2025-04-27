const myLibrary = [];

function Book(title, author, id) {
    if (!new.target) {
        throw Error("new not used to create Book Object.")
    }
    this.title = title;
    this.author = author;
    this.id = id;
}

function addBookToLibrary(title, author) {
    let id = crypto.randomUUID();
    let book = new Book(title, author, id)

    myLibrary.push(book);
}

addBookToLibrary("Leviathan Wakes", "James S. A. Corey");
addBookToLibrary("Childhood's End", "Arthur C. Clarke");
addBookToLibrary("Mistborn: The Final Empire", "Brandon Sanderson");
addBookToLibrary("Hyperion", "Dan Simmons");

console.log(myLibrary);
console.log(myLibrary[0].title);
let container = document.querySelector(".container");


function displayLibrary() {
    for (let i = 0; i < myLibrary.length; i++) {
        let child = document.createElement("div");
        child.classList.add("card");
        child.textContent = `${myLibrary[i].title} by ${myLibrary[i].author}`;

        container.appendChild(child);
    }
}

let newBookBtn = document.querySelector("#new-book");
let modal = document.querySelector(".modal");

newBookBtn.addEventListener("click", () => {
    modal.showModal();
})

let addBookBtn = document.querySelector("#add-book");

addBookBtn.addEventListener("click", (e) => {
    e.preventDefault(); // prevent browser from refreshing on submit
    
    let title = document.querySelector("#title");
    let author = document.querySelector("#author");

    addBookToLibrary(title.value, author.value);
    container.innerHTML = "";
    displayLibrary()
    modal.close();

})

displayLibrary();