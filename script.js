let myLibrary = [];

function showForm() {
    document.getElementById('addBookFormDiv').style.display = 'block';
    document.getElementById('addBook').style.display = 'none';
}

function hideForm() {
    document.getElementById('addBookFormDiv').style.display = 'none';
}

function formData() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').value;

    addBookToLibrary(title, author, pages, read);
    
    document.getElementById('addBookForm').reset();
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = `${pages} Pages`;
    this.read = read ? `Read` : `Not Read`;
}

function addBookToLibrary(title, author, pages, read = false) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayBooksOnPage();
}

function displayBooksOnPage() {
    const removeDivs = document.querySelectorAll(".card");
    removeDivs.forEach(e => e.remove());
    
    const books = document.querySelector('.books');
    
    let index = 0;

    myLibrary.forEach(itemInLibrary => {
    const card = document.createElement('div');
    card.classList.add('card');
    books.appendChild(card);
    
    const removeBookButton = document.createElement('button');
    removeBookButton.classList.add('remove-book-button');
    removeBookButton.textContent = 'Remove';
    removeBookButton.addEventListener('click', removeBookFromLibrary);

    removeBookButton.dataset.linkedArray = index;
    card.appendChild(removeBookButton);

    function removeBookFromLibrary() {
        let bookToRemove = removeBookButton.dataset.linkedArray;
        myLibrary.splice(parseInt(bookToRemove), 1);
        card.remove();
        displayBooksOnPage();
    }

    const toggleReadBtn = document.createElement('button');
    toggleReadBtn.textContent = "Toggle Read";
    toggleReadBtn.addEventListener('click', toggleRead);

    toggleReadBtn.dataset.linkedArray = index;
    index++
    card.appendChild(toggleReadBtn);
    

    function toggleRead() {
        let bookToToggle = myLibrary[toggleReadBtn.dataset.linkedArray];
        bookToToggle.read === 'Read' ? 'Not Read' : 'Read';
        displayBooksOnPage();
    }


    for (let key in itemInLibrary) {
        const para = document.createElement('p');
        para.textContent = (`${itemInLibrary[key]}`);
        card.appendChild(para);
    }})}

