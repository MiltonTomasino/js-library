const myLibrary = [];

function Book(title, author, pageNum, read, id) {
    if (!new.target) {
        throw Error("new not used to create Book Object.")
    }
    this.title = title;
    this.author = author;
    this.id = id;
    this.pageNum = pageNum,
    this.read = read
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

console.log(myLibrary);
console.log(myLibrary[0].title);
let container = document.querySelector(".container");


function displayLibrary() {
    for (let i = 0; i < myLibrary.length; i++) {
        let child = document.createElement("div");
        child.classList.add("card");
        child.textContent = `${myLibrary[i].title} by ${myLibrary[i].author}\nPage Count: ${myLibrary[i].pageNum} Read: ${myLibrary[i].read}`;

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
    let pageNum = document.querySelector("#page-count");
    let read = document.querySelector("#read-status");

    addBookToLibrary(title.value, author.value, pageNum.value, read.checked);
    container.innerHTML = "";
    displayLibrary()
    modal.close();

})

displayLibrary();