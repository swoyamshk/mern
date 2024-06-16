document.addEventListener('DOMContentLoaded', () => {
    const bookList = document.getElementById('book-list');
    const addBookBtn = document.getElementById('add-book-btn');
    const searchInput = document.getElementById('search-bar');

    addBookBtn.addEventListener('click', addBook);
    searchInput.addEventListener('input', searchBooks);

    function addBook() {
        const bookTitle = prompt("Enter the book title:");
        const bookAuthor = prompt("Enter the book author:");

        if (bookTitle && bookAuthor) {
            const li = document.createElement('li');
            li.classList.add('book-item');
            li.innerHTML = `${bookTitle} by ${bookAuthor}
            <div class='btn-div'>
                <button class="favoriteBtn">Favorite</button>
                <button class="removeBtn">Remove</button>
                </div>`;

            li.querySelector('.favoriteBtn').addEventListener('click', () => {
                li.classList.toggle('favorite');
            });

            li.querySelector('.removeBtn').addEventListener('click', () => {
                li.remove();
            });

            bookList.appendChild(li);
        }
    }

    function searchBooks() {
        const filter = searchInput.value.toLowerCase();
        const books = bookList.getElementsByTagName('li');

        Array.from(books).forEach(book => {
            const text = book.textContent.toLowerCase();
            if (text.includes(filter)) {
                book.style.display = '';
            } else {
                book.style.display = 'none';
            }
        });
    }
});
