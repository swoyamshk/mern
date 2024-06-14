document.addEventListener('DOMContentLoaded', () => {
    const bookList = document.getElementById('book-list');
    const searchBar = document.getElementById('search-bar');
    const addBookBtn = document.getElementById('add-book-btn');

    let books = [];

    function renderBooks(highlightedBooks = []) {
        bookList.innerHTML = '';
        books.forEach((book, index) => {
            const bookItem = document.createElement('li');
            bookItem.className = 'book-item';
            bookItem.style.backgroundColor = highlightedBooks.includes(book) ? '#ccc' : '';

            const bookTitle = document.createElement('span');
            bookTitle.textContent = book.title;
            if (book.favorite) bookTitle.className = 'favorite';

            const actions = document.createElement('div');

            const favoriteBtn = document.createElement('button');
            favoriteBtn.textContent = book.favorite ? 'Unfavorite' : 'Favorite';
            favoriteBtn.addEventListener('click', () => toggleFavorite(book));

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.addEventListener('click', () => removeBook(index));

            actions.appendChild(favoriteBtn);
            actions.appendChild(removeBtn);
            bookItem.appendChild(bookTitle);
            bookItem.appendChild(actions);

            bookList.appendChild(bookItem);
        });
    }

    function addBook() {
        const bookTitle = prompt('Enter the book title:');
        if (bookTitle) {
            books.push({ title: bookTitle, favorite: false });
            renderBooks();
        }
    }

    function searchBook() {
        const searchTerm = searchBar.value.toLowerCase();
        const highlightedBooks = books.filter(book => book.title.toLowerCase().includes(searchTerm));
        renderBooks(highlightedBooks);
    }

    function removeBook(index) {
        if (confirm('Are you sure you want to remove this book?')) {
            books.splice(index, 1);
            renderBooks();
        }
    }

    function toggleFavorite(book) {
        book.favorite = !book.favorite;
        renderBooks();
    }

    function clearSearchHighlights() {
        renderBooks();
    }

    searchBar.addEventListener('input', searchBook);
    addBookBtn.addEventListener('click', addBook);

    renderBooks();
});
