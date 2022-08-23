// Book class.
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI class.
class UI {
    // Add book.

    addBookToList(book) {
        const list = document.getElementById('book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a hred='#' class = 'delete'>X</a></td>
        `;
        list.appendChild(row);
    }

    //Delete book.
    deleteBook(target) {
        if (target.className === 'delete'){
            target.parentElement.parentElement.remove();
        }
    }

    // Clear the input.
    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }

    // Show alert.
    showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.textContent = message;
        const bookFrom = document.querySelector('#book-form');
        const container = document.querySelector('.container');
        container.insertBefore(div, bookFrom);
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 2000);
    }
}

// Local storage class.
class Store {
    static getBooks(){
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static displayBooks() {
        const books = this.getBooks();
        books.forEach(book => {
            const ui = new UI();
            ui.addBookToList(book);
        })
        
    }

    static addBook(book) {
        const books = this.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        const books = this.getBooks();
        books.forEach((book, index) => {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}

document.addEventListener('DOMContentLoaded', Store.displayBooks());

// Event Listener for submit
document.querySelector('#book-form').addEventListener('submit', function(e){
    // Get the submitted content
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    let ui = new UI();

    if (title === '' || author === '' || isbn === '') {
        ui.showAlert('Please check your input.', 'error');
    } else {
        let newBook = new Book(title, author, isbn);
        ui.addBookToList(newBook);
        Store.addBook(newBook);
        ui.clearFields();
        ui.showAlert('Book added!', 'success');
    }
    e.preventDefault();
})


// Event Listener for delete
document.querySelector('#book-list').addEventListener('click', function(e){
    let ui = new UI();
    ui.deleteBook(e.target);
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    ui.showAlert('Book deleted!', 'success');
})

