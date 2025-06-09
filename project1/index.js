
// let currentGenre = "All";
// let favorites = [];
// let cart = [];


// // DOM elements
// const landingPage = document.getElementById("landing-page");
// const mainContent = document.getElementById("main-content");
// const bookContainer = document.getElementById("book-container");
// const searchBar = document.getElementById("search-bar");
// const genreTabs = document.getElementById("genre-tabs");

// document.getElementById("enter-btn").addEventListener("click", () => {
//   landingPage.style.display = "none";
//   mainContent.style.display = "block";
//   updateDisplay();
// });

// // Display Book Cards
// function displayBooks(bookList) {
//   bookContainer.innerHTML = "";

//   if (bookList.length === 0) {
//     bookContainer.innerHTML = "<p>No books found.</p>";
//     return;
//   }

//   bookList.forEach(book => {
//     const isFavorite = favorites.includes(book.id);
//     const isInCart = cart.includes(book.id);

//     const bookCard = document.createElement("div");
//     bookCard.className = "book-card";

//     bookCard.innerHTML = `
//       <img src="${book.cover_image}" alt="${book.title}" />
//       <h3>${book.title}</h3>
//       <p><strong>Author:</strong> ${book.author}</p>
//       <p><strong>Year:</strong> ${book.publication_year}</p>
//       <p><strong>Genres:</strong> ${book.genre.join(", ")}</p>
//       <p><strong>Price:</strong> $${book.price.toFixed(2)}</p>
//       <p><strong>Rating:</strong> ⭐ ${book.rating}</p>
//       <div class="card-actions">
//         <i class="fa-solid fa-heart favorite-icon ${isFavorite ? 'active' : ''}" data-id="${book.id}" title="Add to Favorites"></i>
//         <i class="fa-solid fa-cart-shopping cart-icon ${isInCart ? 'active' : ''}" data-id="${book.id}" title="Add to Cart"></i>
//       </div>
//     `;

//     bookContainer.appendChild(bookCard);
//   });

//   addCardEventListeners();
// }

// // Event listeners for favorites and cart buttons
// // function addCardEventListeners() {
// //   document.querySelectorAll('.favorite-icon').forEach(icon => {
// //     icon.addEventListener('click', () => {
// //       const bookId = parseInt(icon.dataset.id);
// //       toggleFavorite(bookId);
// //     });
// //   });

// //   document.querySelectorAll('.cart-icon').forEach(icon => {
// //     icon.addEventListener('click', () => {
// //       const bookId = parseInt(icon.dataset.id);
// //       toggleCart(bookId);
// //     });
// //   });
// // }

// // Toggle favorite
// // function toggleFavorite(bookId) {
// //   if (favorites.includes(bookId)) {
// //     favorites = favorites.filter(id => id !== bookId);
// //   } else {
// //     favorites.unshift(bookId); // add to top
// //   }
// //   updateDisplay();
// // }

// // // Toggle cart
// // function toggleCart(bookId) {
// //   if (cart.includes(bookId)) {
// //     cart = cart.filter(id => id !== bookId);
// //   } else {
// //     cart.unshift(bookId); // add to top
// //   }
// //   updateDisplay();
// // }

// // Update display: filter + search
// function updateDisplay() {
//   const searchTerm = searchBar.value.toLowerCase();

//   const filteredBooks = books.filter(book => {
//     const matchesGenre = currentGenre === "All" || book.genre.includes(currentGenre);
//     const matchesSearch = book.title.toLowerCase().includes(searchTerm);
//     return matchesGenre && matchesSearch;
//   });

//   displayBooks(filteredBooks);
// }

// // Genre click
// genreTabs.addEventListener("click", e => {
//   if (e.target.classList.contains("genre-btn")) {
//     currentGenre = e.target.dataset.genre;
//     updateDisplay();
//   }
// });

// // Search input
// searchBar.addEventListener("input", updateDisplay);
// function updateDisplay() {
//   const searchTerm = searchBar.value.toLowerCase();

//   let filteredBooks;

//   if (currentGenre === "Bestsellers") {
//     filteredBooks = books.filter(book => book.isBestseller && book.title.toLowerCase().includes(searchTerm));
//   } else {
//     filteredBooks = books.filter(book => {
//       const matchesGenre = currentGenre === "All" || book.genre.includes(currentGenre);
//       const matchesSearch = book.title.toLowerCase().includes(searchTerm);
//       return matchesGenre && matchesSearch;
//     });
//   }

//   displayBooks(filteredBooks);
// }
// let currentGenre = "All";

// // DOM elements
// const landingPage = document.getElementById("landing-page");
// const mainContent = document.getElementById("main-content");
// const bookContainer = document.getElementById("book-container");
// const searchBar = document.getElementById("search-bar");
// const genreTabs = document.getElementById("genre-tabs");

// document.getElementById("enter-btn").addEventListener("click", () => {
//   landingPage.style.display = "none";
//   mainContent.style.display = "block";
//   updateDisplay();
// });

// // Display Book Cards (No favorites or cart)
// function displayBooks(bookList) {
//   bookContainer.innerHTML = "";

//   if (bookList.length === 0) {
//     bookContainer.innerHTML = "<p>No books found.</p>";
//     return;
//   }

//   bookList.forEach(book => {
//     const bookCard = document.createElement("div");
//     bookCard.className = "book-card";

//     bookCard.innerHTML = `
//       <img src="${book.cover_image}" alt="${book.title}" />
//       <h3>${book.title}</h3>
//       <p><strong>Author:</strong> ${book.author}</p>
//       <p><strong>Year:</strong> ${book.publication_year}</p>
//       <p><strong>Genres:</strong> ${book.genre.join(", ")}</p>
//       <p><strong>Price:</strong> $${book.price.toFixed(2)}</p>
//       <p><strong>Rating:</strong> ⭐ ${book.rating}</p>
//        <div class="book-actions">
//      <i class="ri-heart-line"></i></a>
//       <i class="ri-shopping-bag-line cart"></i></a>
//   </div>
//     `;

//     bookContainer.appendChild(bookCard);
//   });
// }

// // Update display: filter + search
// function updateDisplay() {
//   const searchTerm = searchBar.value.toLowerCase();

//   let filteredBooks;

//   if (currentGenre === "Bestsellers") {
//     filteredBooks = books.filter(book => book.isBestseller && book.title.toLowerCase().includes(searchTerm));
//   } else {
//     filteredBooks = books.filter(book => {
//       const matchesGenre = currentGenre === "All" || book.genre.includes(currentGenre);
//       const matchesSearch = book.title.toLowerCase().includes(searchTerm);
//       return matchesGenre && matchesSearch;
//     });
//   }

//   displayBooks(filteredBooks);
// }

// // Genre tab click
// genreTabs.addEventListener("click", e => {
//   if (e.target.classList.contains("genre-btn")) {
//     currentGenre = e.target.dataset.genre;
//     updateDisplay();
//   }
// });

// // Search input
// searchBar.addEventListener("input", updateDisplay);

let currentGenre = "All";

const landingPage = document.getElementById("landing-page");
const mainContent = document.getElementById("main-content");
const bookContainer = document.getElementById("book-container");
const searchBar = document.getElementById("search-bar");
const genreTabs = document.getElementById("genre-tabs");

document.getElementById("enter-btn").addEventListener("click", () => {
  landingPage.style.display = "none";
  mainContent.style.display = "block";
  updateDisplay();
});

// Fetch Wishlist and Cart from LocalStorage
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Display Books
function displayBooks(bookList) {
  bookContainer.innerHTML = "";

  if (bookList.length === 0) {
    bookContainer.innerHTML = "<p>No books found.</p>";
    return;
  }

  bookList.forEach(book => {
    const bookCard = document.createElement("div");
    bookCard.className = "book-card";

    bookCard.innerHTML = `
      <img src="${book.cover_image}" alt="${book.title}" />
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Year:</strong> ${book.publication_year}</p>
      <p><strong>Genres:</strong> ${book.genre.join(", ")}</p>
      <p><strong>Price:</strong> $${book.price.toFixed(2)}</p>
      <p><strong>Rating:</strong> ⭐ ${book.rating}</p>
      <div class="book-actions">
        <i class="ri-heart-line wishlist-icon" data-id="${book.id}"></i>
        <i class="ri-shopping-bag-line cart-icon" data-id="${book.id}"></i>
      </div>
    `;

    bookContainer.appendChild(bookCard);
  });

  // Attach event listeners to icons after generating cards
  attachIconListeners();
}

function attachIconListeners() {
  const wishlistIcons = document.querySelectorAll(".wishlist-icon");
  const cartIcons = document.querySelectorAll(".cart-icon");

  wishlistIcons.forEach(icon => {
    icon.addEventListener("click", e => {
      const id = parseInt(e.target.dataset.id);
      addToWishlist(id);
    });
  });

  cartIcons.forEach(icon => {
    icon.addEventListener("click", e => {
      const id = parseInt(e.target.dataset.id);
      addToCart(id);
    });
  });
}

// Add to Wishlist
function addToWishlist(bookId) {
  const book = books.find(b => b.id === bookId);
  if (!wishlist.some(b => b.id === bookId)) {
    wishlist.push(book);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    alert(`${book.title} added to wishlist!`);
  } else {
    alert(`${book.title} is already in your wishlist.`);
  }
}

// Add to Cart
function addToCart(bookId) {
  const book = books.find(b => b.id === bookId);
  if (!cart.some(b => b.id === bookId)) {
    cart.push({...book, quantity: 1}); // Add quantity property
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${book.title} added to cart!`);
  } else {
    alert(`${book.title} is already in your cart.`);
  }
}

// Update display: filter + search
function updateDisplay() {
  const searchTerm = searchBar.value.toLowerCase();

  let filteredBooks;
  if (currentGenre === "Bestsellers") {
    filteredBooks = books.filter(book => book.isBestseller && book.title.toLowerCase().includes(searchTerm));
  } else {
    filteredBooks = books.filter(book => {
      const matchesGenre = currentGenre === "All" || book.genre.includes(currentGenre);
      const matchesSearch = book.title.toLowerCase().includes(searchTerm);
      return matchesGenre && matchesSearch;
    });
  }

  displayBooks(filteredBooks);
}

// Genre tab click
genreTabs.addEventListener("click", e => {
  if (e.target.classList.contains("genre-btn")) {
    currentGenre = e.target.dataset.genre;
    updateDisplay();
  }
});

// Search input
searchBar.addEventListener("input", updateDisplay);
