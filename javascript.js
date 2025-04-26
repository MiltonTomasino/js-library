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


const container = document.querySelector(".container");


for(let i = 0; i < myLibrary.length; i++) {
    let child = document.createElement("div");
    child.classList.add("card");
    child.textContent = `${myLibrary[i].title} by ${myLibrary[i].author}`;

    container.appendChild(child);
}