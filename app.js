let books = [];
const localData = JSON.parse(localStorage.getItem('Books'));
const BookListContainer = document.querySelector('.books-container');

if (localData != null) {
  localData.forEach((item) => {
    BookListContainer.innerHTML += `
  <div>
  <div>${item.name}</div>
  <div>${item.author}</div>
  <button class='btn-remove' id='${item.id}' onclick='remove(${item.id})'>Remove</button>
  </div>
  <hr>
  `;
    const book = {
      id: item.id,
      name: item.name,
      author: item.author,
    };
    books.push(book);
  });
}

const btnSubmit = document.querySelector('.add-book');
const BookName = document.querySelector('.name');
const BookAuthor = document.querySelector('.author');
btnSubmit.addEventListener('click', () => {
  const book = {
    id: books.length,
    name: BookName.value,
    author: BookAuthor.value,
  };
  books.push(book);
  localStorage.setItem('Books', JSON.stringify(books));
});

// eslint-disable-next-line no-unused-vars
function remove(id) {
  books = books.filter((item) => item.id !== id);
  localStorage.setItem('Books', JSON.stringify(books));
  window.location.reload();
}