function addBook() {
    const bookTitle = document.getElementById('book-title').value;
    if (bookTitle) {
        const ul = document.getElementById('book-list');
        const li = document.createElement('li');
        li.textContent = bookTitle;
        ul.appendChild(li);
        document.getElementById('book-title').value = ''; // Clear the input field
    }
}


function searchBook() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const ul = document.getElementById('book-list');
    const liElements = ul.getElementsByTagName('li');

    for (const li of liElements) {
        if (li.textContent.toLowerCase().includes(searchTerm)) {
            li.style.backgroundColor = 'yellow';
        } else {
            li.style.backgroundColor = '';
        }
    }
}
function clearSearchHighlights() {
    const ul = document.getElementById('book-list');
    const liElements = ul.getElementsByTagName('li');

    for (const li of liElements) {
        li.style.backgroundColor = '';
    }
}


function removeBook() {
    const bookList = document.getElementById('book-list');
    if (bookList.children.length > 0) {
        const confirmRemoval = confirm('Are you sure you want to remove the last book ?');
        if (confirmRemoval) {
            bookList.removeChild(bookList.lastElementChild);
        }
    } else {
        alert('No books to remove.');
    }
}

function toggleFavorite(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('favorite');
    }
}

document.getElementById('book-list').addEventListener('click', toggleFavorite);