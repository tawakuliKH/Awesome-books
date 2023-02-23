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

const listBtn = document.querySelector('.list-btn');
const addNewBtn = document.querySelector('.add-btn');
const contactBtn = document.querySelector('.contact-btn');
const list = document.querySelector('.list');
const form = document.querySelector('.form');
const contact = document.querySelector('.contact');

function showList() {
  list.classList.remove('hide-list');
  form.classList.add('hide-form');
  contact.classList.add('hide-contact');
}

function showForm() {
  form.classList.remove('hide-form');
  contact.classList.add('hide-contact');
  list.classList.add('hide-list');
}

function showContact() {
  contact.classList.remove('hide-contact');
  list.classList.add('hide-list');
  form.classList.add('hide-form');
}

window.onload=showList();

listBtn.addEventListener('click', () => {
  showList();
})

addNewBtn.addEventListener('click', () => {
  showForm();
})

contactBtn.addEventListener('click', () => {
  showContact();
})
