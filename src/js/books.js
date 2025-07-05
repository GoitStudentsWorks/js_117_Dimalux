const filtersEl = document.querySelector('.filters');
const booksListEl = document.querySelector('.books-list');
const bookCountEl = document.querySelector('.book-count');
const showMoreBtn = document.getElementById('show-more');
const modal = document.getElementById('book-modal');
const modalDetails = document.getElementById('modal-details');

const fakeBooks = Array.from({ length: 40 }, (_, i) => ({
    _id: `book-${i + 1}`,
    title: `Fake Book ${i + 1}`,
    author: `Author ${i + 1}`,
    book_image: `https://via.placeholder.com/150x200?text=Book+${i + 1}`,
    description: `This is a description for Book ${i + 1}.`,
    price: (10 + i).toFixed(2)
}));

let allBooks = fakeBooks;
let displayedBooks = [];
let booksPerPage = window.innerWidth <= 768 ? 10 : 24;
let loadStep = 4;


const categories = ['All categories', 'Fiction', 'Nonfiction', 'Science', 'Mystery'];

function renderFilters() {
    filtersEl.innerHTML = categories.map(cat => `
<li><button data-category="${cat}">${cat}</button></li>
`).join('');
}

function renderBooks() {
    booksListEl.innerHTML = displayedBooks.map(book => `
<li class="book-item">
  <img src="${book.book_image}" alt="${book.title}" />
  <h4>${book.title}</h4>
  <p>${book.author}</p>
  <p class="price">$${book.price}</p>
  <button onclick="openModal('${book._id}')">Learn More</button>
</li>
`).join('');

    bookCountEl.textContent = `Showing ${displayedBooks.length} of ${allBooks.length}`;
    showMoreBtn.style.display = displayedBooks.length < allBooks.length ? 'inline-block' : 'none';
}

showMoreBtn.addEventListener('click', () => {
    const next = allBooks.slice(displayedBooks.length, displayedBooks.length + loadStep);
    displayedBooks = [...displayedBooks, ...next];
    renderBooks();
});

filtersEl.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const category = e.target.dataset.category;
        allBooks = category === 'All categories' ? fakeBooks : fakeBooks.filter(b => b.title.includes(category));
        displayedBooks = allBooks.slice(0, booksPerPage);
        renderBooks();
    }
});

function openModal(bookId) {
    const book = allBooks.find(b => b._id === bookId);
    modalDetails.innerHTML = `
<img src="${book.book_image}" alt="${book.title}" />
<h2>${book.title}</h2>
<h4>${book.author}</h4>
<p>${book.description}</p>
`;
    modal.style.display = 'flex';
}

renderFilters();
displayedBooks = allBooks.slice(0, booksPerPage);
renderBooks();