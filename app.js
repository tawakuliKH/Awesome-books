class BookCollect {
  constructor() {
    this.books = [];
  }

  removeBook(index) {
    this.books = this.books.filter((item, i) => i !== index);
    localStorage.setItem('Books', JSON.stringify(this.books));
    window.location.reload();
  }

  addBook(BookName, Author) {
    const book = {
      name: BookName,
      author: Author,
    };
    this.books.push(book);
    localStorage.setItem('Books', JSON.stringify(this.books));
  }
}

const BookCollection = new BookCollect();
const localData = JSON.parse(localStorage.getItem('Books'));
const BookListContainer = document.querySelector('.books-container');

if (localData != null) {
  localData.forEach((item) => {
    BookListContainer.innerHTML += `
  <li class='books-list'>
  <div>"${item.name}" by ${item.author}</div>
  <button class='btn-remove'>Remove</button>
  </li>
  `;
    const book = {
      name: item.name,
      author: item.author,
    };
    BookCollection.books.push(book);
  });
}

const btnSubmit = document.querySelector('.add-book');
const btnRemove = document.querySelectorAll('.btn-remove');
const BookName = document.querySelector('.name');
const BookAuthor = document.querySelector('.author');

btnSubmit.addEventListener('click', () => {
  BookCollection.addBook(BookName.value, BookAuthor.value);
});

btnRemove.forEach((item, index) => {
  item.addEventListener('click', () => {
    BookCollection.removeBook(index);
  });
});

const list = document.querySelector('.list-item');
const add = document.querySelector('.add-item');
const contact = document.querySelector('.contact-item');
const addSection = document.querySelector('.add-new');
const listSection = document.querySelector('.list');
const contactSection = document.querySelector('.contact');

add.addEventListener('click', () => {
  addSection.style.display = 'flex';
  listSection.style.display = 'none';
  contactSection.style.display = 'none';
});

list.addEventListener('click', () => {
  window.location.reload();
});

contact.addEventListener('click', () => {
  contactSection.style.display = 'flex';
  listSection.style.display = 'none';
  addSection.style.display = 'none';
});
