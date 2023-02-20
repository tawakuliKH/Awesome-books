const books = [];
const localData = JSON.parse(localStorage.getItem('Books'));
const BookListContainer = document.querySelector('.books-container');


if (localData != null) {
  localData.forEach((item) => {
    BookListContainer.innerHTML += `
  <div>
  <div>${item.name}</div>
  <div>${item.author}</div>
  <button>Remove</button>
  </div>
  <hr>
  `;
    const book = {
      name: item.name,
      author: item.author,
    }
    books.push(book);
  });
}

const btnSubmit = document.querySelector('.add-book');
const BookName = document.querySelector('.name');
const BookAuthor = document.querySelector('.author');
btnSubmit.addEventListener('click', () => {
  let book = {
    name: BookName.value,
    author: BookAuthor.value,
  };
  books.push(book);
  localStorage.setItem('Books', JSON.stringify(books));
  BookListContainer.innerHTML += `
  <div>
  <div>${books[books.length - 1].name}</div>
  <div>${books[books.length - 1].author}</div>
  <button>Remove</button>
  </div>
  <hr>
  `;

});