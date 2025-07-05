import {
    getCategoryList,
    getTopBooks,
    getBooksByCategory,
    getBookDetails,
    testConnection,
  } from "./src/js/api.js";
  
  const MOCK_BOOKS = [
    {
      _id: "1",
      title: "I will find you",
      author: "Harlan Coben",
      book_image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/be59079c942166f40b9f9b8ca0c95c9b0dd376cd?width=454",
      list_name: "Combined Print and E-book Fiction",
      description: "A gripping thriller from bestselling author Harlan Coben.",
      buy_links: [{ name: "Amazon", url: "https://amazon.com" }],
    },
    {
      _id: "2",
      title: "Hello Beautiful",
      author: "Ann Napolitano",
      book_image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/19b4f0571fe7d229818636954191ba15ff05696e?width=454",
      list_name: "Combined Print and E-book Fiction",
      description: "A beautiful story about family, love, and resilience.",
      buy_links: [{ name: "Amazon", url: "https://amazon.com" }],
    },
    {
      _id: "3",
      title: "It starts with us",
      author: "Colleen Hoover",
      book_image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/001f2a76a1b4620d1fb977b29164da216a346da5?width=454",
      list_name: "Combined Print and E-book Fiction",
      description: "The sequel to the bestselling romance novel.",
      buy_links: [{ name: "Amazon", url: "https://amazon.com" }],
    },
    {
      _id: "4",
      title: "Daisy Jones & The Six",
      author: "Taylor Jenkins Reid",
      book_image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9f8788ef7427aac176befc2418495a850e31f227?width=454",
      list_name: "Combined Print and E-book Fiction",
      description: "A novel about a rock band's rise to fame in the 1970s.",
      buy_links: [{ name: "Amazon", url: "https://amazon.com" }],
    },
    {
      _id: "5",
      title: "Saver",
      author: "Benjamin Hall",
      book_image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/98d2449870ec58a16c70ac2ab8a312374e6dcc62?width=454",
      list_name: "Combined Print & E-book Nonfiction",
      description: "A non-fiction book about financial management and saving.",
      buy_links: [{ name: "Amazon", url: "https://amazon.com" }],
    },
    {
      _id: "6",
      title: "Spare",
      author: "Prince Harry",
      book_image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/84191fe427cba5940c78d3b0b66c500d4f85379f?width=454",
      list_name: "Combined Print & E-book Nonfiction",
      description: "Prince Harry's memoir about his life and experiences.",
      buy_links: [{ name: "Amazon", url: "https://amazon.com" }],
    },
    {
      _id: "7",
      title: "Paris The Memoir",
      author: "Paris Hilton",
      book_image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/fddd368da72ad14deca914c44fc8fdc26589fe53?width=454",
      list_name: "Combined Print & E-book Nonfiction",
      description: "Paris Hilton's personal memoir and life story.",
      buy_links: [{ name: "Amazon", url: "https://amazon.com" }],
    },
    {
      _id: "8",
      title: "The Courage to Be Free",
      author: "Ron DeSantis",
      book_image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/95f91ea1698f095cdea11e73b64d9deedb74e1f1?width=454",
      list_name: "Combined Print & E-book Nonfiction",
      description: "Political memoir and vision for America's future.",
      buy_links: [{ name: "Amazon", url: "https://amazon.com" }],
    },
    {
      _id: "9",
      title: "The body keeps the score",
      author: "Bessel van der Kolk",
      book_image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/eb7283e734ea5c1a3e973593a98c1fb950720617?width=454",
      list_name: "Advice How-To and Miscellaneous",
      description: "A groundbreaking book about trauma and recovery.",
      buy_links: [{ name: "Amazon", url: "https://amazon.com" }],
    },
    {
      _id: "10",
      title: "Lessons in chemistry",
      author: "Bonnie Garmus",
      book_image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/de8e5256a092a75663a70ebad4f598d410a983d3?width=454",
      list_name: "Combined Print and E-book Fiction",
      description: "A novel about a female chemist in the 1960s.",
      buy_links: [{ name: "Amazon", url: "https://amazon.com" }],
    },
    {
      _id: "11",
      title: "Tomorrow and Tomorrow and Tomorrow",
      author: "Gabrielle Zevin",
      book_image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6c211f6ed1a913f6387ae2258abf662c77e44cc2?width=454",
      list_name: "Combined Print and E-book Fiction",
      description: "A novel about friendship and gaming.",
      buy_links: [{ name: "Amazon", url: "https://amazon.com" }],
    },
    {
      _id: "12",
      title: "I'm Glad My Mom Died",
      author: "Jennette McCurdy",
      book_image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9f6aea0fcc830497d46221f2aa67d6216f846a98?width=454",
      list_name: "Combined Print & E-book Nonfiction",
      description: "A powerful memoir about childhood stardom and family.",
      buy_links: [{ name: "Amazon", url: "https://amazon.com" }],
    },
    {
      _id: "13",
      title: "The Seven Moons of Maali Almeida",
      author: "Shehan Karunatilaka",
      book_image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ea9008b04bd05c29b9958daf4cab7d5d8363b333?width=454",
      list_name: "Combined Print and E-book Fiction",
      description: "A darkly funny afterlife adventure.",
      buy_links: [{ name: "Amazon", url: "https://amazon.com" }],
    },
    {
      _id: "14",
      title: "The Atlas Six",
      author: "Olivie Blake",
      book_image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/09192c2b149378095a3df5dfdd9d768107deffe1?width=454",
      list_name: "Combined Print and E-book Fiction",
      description: "A dark academic fantasy about six magicians.",
      buy_links: [{ name: "Amazon", url: "https://amazon.com" }],
    },
    {
      _id: "15",
      title: "Educated",
      author: "Tara Westover",
      book_image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/05b647891df90004e53febfd626d7677f5b8bffd?width=454",
      list_name: "Combined Print & E-book Nonfiction",
      description: "A memoir about education and family.",
      buy_links: [{ name: "Amazon", url: "https://amazon.com" }],
    },
    {
      _id: "16",
      title: "The Thursday Murder Club",
      author: "Richard Osman",
      book_image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/85daae4642e37eb4d924fecc884c822a5cae8aa7?width=454",
      list_name: "Combined Print and E-book Fiction",
      description: "A cozy mystery set in a retirement village.",
      buy_links: [{ name: "Amazon", url: "https://amazon.com" }],
    },
    {
      _id: "17",
      title: "Atomic Habits",
      author: "James Clear",
      book_image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7fb7e96835fecf1cb69394d3ef0630de77546b8d?width=454",
      list_name: "Advice How-To and Miscellaneous",
      description: "A guide to building good habits and breaking bad ones.",
      buy_links: [{ name: "Amazon", url: "https://amazon.com" }],
    },
    {
      _id: "18",
      title: "The Midnight Library",
      author: "Matt Haig",
      book_image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/73d0b49530ac0a63445a67445297dd6a2a3d3329?width=454",
      list_name: "Combined Print and E-book Fiction",
      description: "A novel about life's infinite possibilities.",
      buy_links: [{ name: "Amazon", url: "https://amazon.com" }],
    },
    {
      _id: "19",
      title: "Becoming",
      author: "Michelle Obama",
      book_image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9f6aea0fcc830497d46221f2aa67d6216f846a98?width=454",
      list_name: "Combined Print & E-book Nonfiction",
      description: "The former First Lady's powerful memoir.",
      buy_links: [{ name: "Amazon", url: "https://amazon.com" }],
    },
    {
      _id: "20",
      title: "Where the Forest Meets the Stars",
      author: "Glendy Vanderah",
      book_image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/23d519246fd0211e2aa3678be56181200ab72505?width=454",
      list_name: "Combined Print and E-book Fiction",
      description: "A heartwarming story about healing and hope.",
      buy_links: [{ name: "Amazon", url: "https://amazon.com" }],
    },
    {
      _id: "21",
      title: "The Guest List",
      author: "Lucy Foley",
      book_image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4e88e224f5b21410964eeec848d75a9b2c5afcd6?width=454",
      list_name: "Combined Print and E-book Fiction",
      description: "A psychological thriller set at a wedding.",
      buy_links: [{ name: "Amazon", url: "https://amazon.com" }],
    },
    {
      _id: "22",
      title: "Sapiens",
      author: "Yuval Noah Harari",
      book_image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/52c3113b5cea70eef0a1226e0a9f66d7e0e7a026?width=454",
      list_name: "Combined Print & E-book Nonfiction",
      description: "A brief history of humankind.",
      buy_links: [{ name: "Amazon", url: "https://amazon.com" }],
    },
    {
      _id: "23",
      title: "The Silent Patient",
      author: "Alex Michaelides",
      book_image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/09b246cfd4ba727da8dd9a33b57fce06cf2c41bc?width=454",
      list_name: "Combined Print and E-book Fiction",
      description: "A psychological thriller about a woman who refuses to speak.",
      buy_links: [{ name: "Amazon", url: "https://amazon.com" }],
    },
    {
      _id: "24",
      title: "The Power of Now",
      author: "Eckhart Tolle",
      book_image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e5d41e744e86169ba86dd2394676e58bcf728f24?width=454",
      list_name: "Advice How-To and Miscellaneous",
      description: "A guide to spiritual enlightenment.",
      buy_links: [{ name: "Amazon", url: "https://amazon.com" }],
    },
    {
      _id: "25",
      title: "Little Fires Everywhere",
      author: "Celeste Ng",
      book_image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/be59079c942166f40b9f9b8ca0c95c9b0dd376cd?width=454",
      list_name: "Combined Print and E-book Fiction",
      description: "A novel about family secrets and community tensions.",
      buy_links: [{ name: "Amazon", url: "https://amazon.com" }],
    },
    {
      _id: "26",
      title: "Untamed",
      author: "Glennon Doyle",
      book_image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/19b4f0571fe7d229818636954191ba15ff05696e?width=454",
      list_name: "Combined Print & E-book Nonfiction",
      description: "A memoir about breaking free from expectations.",
      buy_links: [{ name: "Amazon", url: "https://amazon.com" }],
    },
    {
      _id: "27",
      title: "The Vanishing Half",
      author: "Brit Bennett",
      book_image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/001f2a76a1b4620d1fb977b29164da216a346da5?width=454",
      list_name: "Combined Print and E-book Fiction",
      description: "A novel about identity and family secrets.",
      buy_links: [{ name: "Amazon", url: "https://amazon.com" }],
    },
    {
      _id: "28",
      title: "Born a Crime",
      author: "Trevor Noah",
      book_image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9f8788ef7427aac176befc2418495a850e31f227?width=454",
      list_name: "Combined Print & E-book Nonfiction",
      description: "A memoir about growing up in South Africa.",
      buy_links: [{ name: "Amazon", url: "https://amazon.com" }],
    },
  ];
  
  const MOCK_CATEGORIES = [
    {
      name: "Combined Print and E-book Fiction",
      displayName: "Combined Print and E-book Fiction",
    },
    {
      name: "Combined Print & E-book Nonfiction",
      displayName: "Combined Print & E-book Nonfiction",
    },
    { name: "Hardcover Fiction", displayName: "Hardcover Fiction" },
    { name: "Paperback Trade Fiction", displayName: "Paperback Trade Fiction" },
    { name: "Paperback Nonfiction", displayName: "Paperback Nonfiction" },
    {
      name: "Advice How-To and Miscellaneous",
      displayName: "Advice, How-To and Miscellaneous",
    },
    {
      name: "Children's Middle Grade Hardcover",
      displayName: "Children's Middle Grade Hardcover",
    },
  ];
  
  let currentCategory = "all";
  let visibleBooks = window.innerWidth <= 768 ? 10 : 24;
  let booksPerLoad = 4;
  let allBooks = [];
  let categories = MOCK_CATEGORIES;
  let isLoading = false;
  let useBackupData = false;
  
  function getInitialBookCount() {
    return window.innerWidth <= 768 ? 10 : 24;
  }
  
  const bookList = document.getElementById("book-list");
  const showMoreBtn = document.getElementById("show-more-btn");
  const showingCount = document.getElementById("showing-count");
  const totalCount = document.getElementById("total-count");
  const categoryButtons = document.querySelectorAll(".category-btn");
  const modalOverlay = document.getElementById("modal-overlay");
  const modalClose = document.getElementById("modal-close");
  const modalContent = document.getElementById("modal-content");
  
  debugLog("Modal elements check:", {
    modalOverlay: !!modalOverlay,
    modalClose: !!modalClose,
    modalContent: !!modalContent,
  });
  
  if (!modalOverlay || !modalClose || !modalContent) {
    debugLog("ERROR: Missing modal elements!", {
      modalOverlay: !!modalOverlay,
      modalClose: !!modalClose,
      modalContent: !!modalContent,
    });
  }
  
  function debugLog(message, data = null) {
    console.log(`[Books App Debug] ${message}`, data || "");
  }
  async function fetchCategories() {
    try {
      debugLog("Fetching categories...");
      categories = await getCategoryList();
      debugLog("Categories loaded from API:", categories);
      useBackupData = false;
      return categories;
    } catch (error) {
      debugLog("Categories API failed, using backup data:", error.message);
      categories = MOCK_CATEGORIES;
      useBackupData = true;
      return categories;
    }
  }
  
  async function fetchTopBooks() {
    try {
      debugLog("Fetching top books...");
      const books = await getTopBooks();
      debugLog(`Loaded ${books.length} top books from API`);
      useBackupData = false;
      return books;
    } catch (error) {
      debugLog("Top books API failed, using backup data:", error.message);
      useBackupData = true;
      return MOCK_BOOKS;
    }
  }
  
  async function fetchBooksByCategory(category) {
    try {
      debugLog(`Fetching books for category: ${category}`);
      const books = await getBooksByCategory(category);
      debugLog(`Loaded ${books.length} books for category ${category}`);
      return books;
    } catch (error) {
      debugLog(
        `Category books API failed for ${category}, using filtered backup data:`,
        error.message,
      );
      return MOCK_BOOKS.filter((book) => book.list_name === category);
    }
  }
  
  async function fetchBookDetails(bookId) {
    try {
      debugLog(`Fetching details for book: ${bookId}`);
      const data = await getBookDetails(bookId);
      debugLog("Book details loaded from API:", data);
      return data;
    } catch (error) {
      debugLog(
        `Book details API failed for ${bookId}, using backup data:`,
        error.message,
      );
      return (
        allBooks.find((book) => book._id === bookId) ||
        MOCK_BOOKS.find((book) => book._id === bookId) ||
        null
      );
    }
  }
  
  function createBookItem(book) {
    const displayPrice = "Check Price";
    const imageUrl =
      book.book_image || "https://via.placeholder.com/227x323?text=No+Image";
  
    return `
      <li class="book-item">
          <img
              class="book-image"
              src="${imageUrl}"
              alt="${book.title} by ${book.author}"
              loading="lazy"
              onerror="this.src='https://via.placeholder.com/227x323?text=No+Image'"
          />
          <div class="book-content">
              <div class="book-header">
                  <div class="book-info">
                      <h3 class="book-title">${book.title}</h3>
                      <p class="book-author">${book.author}</p>
                  </div>
                  <div class="book-price">${displayPrice}</div>
              </div>
              <button class="learn-more-btn" onclick="handleLearnMore('${book._id}')">
                  Learn More
              </button>
          </div>
      </li>
    `;
  }
  
  function createLoadingSkeleton() {
    return `
      <li class="book-item">
        <div class="book-image" style="background: #e0e0e0; animation: pulse 1.5s ease-in-out infinite;"></div>
        <div class="book-content">
          <div class="book-header">
            <div class="book-info">
              <div style="height: 20px; background: #e0e0e0; border-radius: 4px; margin-bottom: 8px; animation: pulse 1.5s ease-in-out infinite;"></div>
              <div style="height: 16px; background: #e0e0e0; border-radius: 4px; width: 70%; animation: pulse 1.5s ease-in-out infinite;"></div>
            </div>
            <div style="height: 24px; background: #e0e0e0; border-radius: 4px; width: 60px; animation: pulse 1.5s ease-in-out infinite;"></div>
          </div>
          <div style="height: 40px; background: #e0e0e0; border-radius: 4px; animation: pulse 1.5s ease-in-out infinite;"></div>
        </div>
      </li>
    `;
  }
  
  function getFilteredBooks() {
    if (currentCategory === "all") {
      return allBooks;
    }
    return allBooks.filter((book) => book.list_name === currentCategory);
  }
  
  function showLoading() {
    isLoading = true;
    const skeletonCount = window.innerWidth <= 768 ? 10 : 24;
    bookList.innerHTML = Array(skeletonCount)
      .fill(createLoadingSkeleton())
      .join("");
    showMoreBtn.disabled = true;
    debugLog("Showing loading state");
  }
  
  function renderBooks() {
    if (isLoading) {
      debugLog("Still loading, skipping render");
      return;
    }
  
    const filteredBooks = getFilteredBooks();
    const booksToShow = filteredBooks.slice(0, visibleBooks);
  
    debugLog(
      `Rendering ${booksToShow.length} books out of ${filteredBooks.length} total`,
    );
  
    if (booksToShow.length === 0) {
      bookList.innerHTML =
        '<li style="grid-column: 1/-1; text-align: center; padding: 40px; color: #0b0500;">No books found for this category.</li>';
    } else {
      bookList.innerHTML = booksToShow
        .map((book) => createBookItem(book))
        .join("");
    }
  
    showingCount.textContent = booksToShow.length;
    totalCount.textContent = filteredBooks.length;
  
    if (booksToShow.length >= filteredBooks.length) {
      showMoreBtn.classList.add("hidden");
    } else {
      showMoreBtn.classList.remove("hidden");
    }
  
    showMoreBtn.disabled = false;
  }

  async function loadBooks() {
    debugLog(`Loading books for category: ${currentCategory}`);
    showLoading();
  
    try {
      if (currentCategory === "all") {
        allBooks = await fetchTopBooks();
      } else {
        allBooks = await fetchBooksByCategory(currentCategory);
      }
  
      if (allBooks.length === 0) {
        throw new Error("No books loaded");
      }
  
      isLoading = false;
      debugLog(`Successfully loaded ${allBooks.length} books`);
      renderBooks();
    } catch (error) {
      debugLog("Error loading books:", error.message);
      isLoading = false;
  
      if (!useBackupData) {
        debugLog("Attempting to use backup data");
        allBooks =
          currentCategory === "all"
            ? MOCK_BOOKS
            : MOCK_BOOKS.filter((book) => book.list_name === currentCategory);
        useBackupData = true;
        renderBooks();
      } else {
        bookList.innerHTML =
          '<li style="grid-column: 1/-1; text-align: center; padding: 40px; color: #0b0500;">Unable to load books. Please check your internet connection and try again.</li>';
        showMoreBtn.classList.add("hidden");
      }
    }
  }
  
  async function updateCategoriesInSidebar() {
    try {
      debugLog("Updating categories in sidebar");
      const fetchedCategories = await fetchCategories();
      const categoriesContainer = document.querySelector(".categories");
  
      if (!categoriesContainer) {
        debugLog("Categories container not found");
        return;
      }
  
      const categoryHTML = `
        <li><button class="category-btn active" data-category="all">All categories</button></li>
        ${fetchedCategories
          .map(
            (category) =>
              `<li><button class="category-btn" data-category="${category.name}">${category.displayName}</button></li>`,
          )
          .join("")}
      `;
  
      categoriesContainer.innerHTML = categoryHTML;
      debugLog("Categories updated in sidebar");
  
      const newCategoryButtons = document.querySelectorAll(".category-btn");
      newCategoryButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          handleCategorySelect(btn.dataset.category);
        });
      });
    } catch (error) {
      debugLog("Error updating categories:", error.message);
    }
  }
  
  async function handleCategorySelect(category) {
    if (isLoading) {
      debugLog("Already loading, ignoring category selection");
      return;
    }
  
    debugLog(`Category selected: ${category}`);
    currentCategory = category;
    visibleBooks = getInitialBookCount();
  
    document.querySelectorAll(".category-btn").forEach((btn) => {
      btn.classList.remove("active");
      if (btn.dataset.category === category) {
        btn.classList.add("active");
      }
    });
  
    await loadBooks();
  }
  
  function handleShowMore() {
    if (isLoading) return;
  
    const filteredBooks = getFilteredBooks();
    visibleBooks = Math.min(visibleBooks + booksPerLoad, filteredBooks.length);
    debugLog(`Show more clicked, now showing ${visibleBooks} books`);
    renderBooks();
  }
  
  async function handleLearnMore(bookId) {
    try {
      debugLog(`Learn more clicked for book: ${bookId}`);
  
      if (!modalOverlay || !modalContent) {
        debugLog("Modal elements not found!");
        return;
      }
  
      modalContent.innerHTML =
        '<div style="text-align: center; padding: 40px; color: #0b0500;">Loading book details...</div>';
      modalOverlay.classList.add("active");
      modalOverlay.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
  
      const bookDetails = await fetchBookDetails(bookId);
  
      if (bookDetails) {
        openBookModal(bookDetails);
      } else {
        modalContent.innerHTML =
          '<div style="text-align: center; padding: 40px; color: #0b0500;">Error loading book details.</div>';
      }
    } catch (error) {
      debugLog("Error loading book details:", error.message);
      modalContent.innerHTML =
        '<div style="text-align: center; padding: 40px; color: #0b0500;">Error loading book details.</div>';
    }
  }
  
  window.handleLearnMore = handleLearnMore;
  
  function openBookModal(book) {
    const buyLinksHTML =
      book.buy_links && book.buy_links.length > 0
        ? book.buy_links
            .map(
              (link) =>
                `<a href="${link.url}" target="_blank" rel="noopener noreferrer" style="color: #e15d05; margin-right: 12px;">${link.name}</a>`,
            )
            .join("")
        : "Available at major book retailers";
  
    modalContent.innerHTML = `
      <img
        class="modal-book-image"
        src="${book.book_image || "https://via.placeholder.com/309x467?text=No+Image"}"
        alt="${book.title} by ${book.author}"
        onerror="this.src='https://via.placeholder.com/309x467?text=No+Image'"
      />
      <div class="modal-book-details">
        <div class="modal-product-info">
          <div class="modal-product-name">
            <h3 class="modal-book-title">${book.title}</h3>
            <p class="modal-book-author">${book.author}</p>
            <div class="modal-book-price">Check Price</div>
          </div>
  
          <div class="modal-form">
            <div class="modal-quantity">
              <button class="quantity-btn" onclick="changeQuantity(-1)">-</button>
              <input type="number" class="quantity-input" id="quantity" value="1" min="1" readonly>
              <button class="quantity-btn" onclick="changeQuantity(1)">+</button>
            </div>
  
            <div class="modal-cart-buttons">
              <button class="cart-btn primary" onclick="addToCart('${book._id}')">Add To Cart</button>
              <button class="cart-btn secondary" onclick="buyNow('${book._id}')">Buy Now</button>
            </div>
          </div>
        </div>
  
        <div class="modal-accordion">
          <div class="accordion-item">
            <div class="accordion-header" onclick="toggleAccordion(this)">
              <h4 class="accordion-title">Details</h4>
              <svg class="accordion-icon" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6023 9.36791C11.822 9.14823 12.1781 9.14823 12.3978 9.36791L18.1326 15.1028C18.3523 15.3225 18.3523 15.6786 18.1326 15.8982L17.8674 16.1634C17.6478 16.3831 17.2916 16.3831 17.0719 16.1634L12 11.0915L6.92808 16.1634C6.7084 16.3831 6.3523 16.3831 6.13263 16.1634L5.86743 15.8982C5.64775 15.6786 5.64775 15.3225 5.86743 15.1028L11.6023 9.36791Z" fill="#0B0500"/>
              </svg>
            </div>
            <div class="accordion-content">
              ${book.description || "I Will Find You is a gripping thriller by the master of suspense, Harlan Coben. The story follows David Burroughs, a former prisoner wrongfully convicted of murdering his own son. When he discovers a clue suggesting his son might still be alive, David escapes from prison to uncover the truth. Fast-paced, emotional, and full of unexpected twists — this novel will keep you hooked until the very last page."}
            </div>
          </div>
  
          <div class="accordion-item">
            <div class="accordion-header" onclick="toggleAccordion(this)">
              <h4 class="accordion-title">Shipping</h4>
              <svg class="accordion-icon" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6023 9.36784C11.822 9.14817 12.1781 9.14817 12.3978 9.36784L18.1326 15.1027C18.3523 15.3224 18.3523 15.6785 18.1326 15.8982L17.8674 16.1634C17.6478 16.383 17.2916 16.383 17.0719 16.1634L12 11.0914L6.92808 16.1634C6.7084 16.383 6.3523 16.383 6.13263 16.1634L5.86743 15.8982C5.64775 15.6785 5.64775 15.3224 5.86743 15.1027L11.6023 9.36784Z" fill="#0B0500"/>
              </svg>
            </div>
            <div class="accordion-content">
              We ship across the United States within 2–5 business days. All orders are processed through USPS or a reliable courier service. Enjoy free standard shipping on orders over $50.
            </div>
          </div>
  
          <div class="accordion-item">
            <div class="accordion-header" onclick="toggleAccordion(this)">
              <h4 class="accordion-title">Returns</h4>
              <svg class="accordion-icon" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6023 9.36784C11.822 9.14817 12.1781 9.14817 12.3978 9.36784L18.1326 15.1027C18.3523 15.3224 18.3523 15.6785 18.1326 15.8982L17.8674 16.1634C17.6478 16.383 17.2916 16.383 17.0719 16.1634L12 11.0914L6.92808 16.1634C6.7084 16.383 6.3523 16.383 6.13263 16.1634L5.86743 15.8982C5.64775 15.6785 5.64775 15.3224 5.86743 15.1027L11.6023 9.36784Z" fill="#0B0500"/>
              </svg>
            </div>
            <div class="accordion-content">
              You can return an item within 14 days of receiving your order, provided it hasn't been used and is in its original condition. To start a return, please contact our support team — we'll guide you through the process quickly and hassle-free.
            </div>
          </div>
        </div>
      </div>
    `;
  }
  
  function closeBookModal() {
    modalOverlay.classList.remove("active");
    modalOverlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  
  function changeQuantity(delta) {
    const quantityInput = document.getElementById("quantity");
    if (quantityInput) {
      const currentValue = parseInt(quantityInput.value) || 1;
      const newValue = Math.max(1, currentValue + delta);
      quantityInput.value = newValue;
    }
  }
  
  function addToCart(bookId) {
    const quantity = document.getElementById("quantity")?.value || 1;
    debugLog(`Adding ${quantity} of book ${bookId} to cart`);
    alert(`Added ${quantity} book(s) to cart!`);
  }
  
  function buyNow(bookId) {
    const quantity = document.getElementById("quantity")?.value || 1;
    debugLog(`Buy now: ${quantity} of book ${bookId}`);
    alert(`Proceeding to checkout with ${quantity} book(s)!`);
  }
  
  function toggleAccordion(element) {
    const content = element.nextElementSibling;
    const icon = element.querySelector(".accordion-icon");
  
    if (content && icon) {
      if (content.classList.contains("active")) {
        content.classList.remove("active");
        icon.style.transform = "rotate(0deg)";
      } else {
        document.querySelectorAll(".accordion-content.active").forEach((item) => {
          item.classList.remove("active");
          const itemIcon =
            item.previousElementSibling?.querySelector(".accordion-icon");
          if (itemIcon) {
            itemIcon.style.transform = "rotate(0deg)";
          }
        });
  
        content.classList.add("active");
        icon.style.transform = "rotate(180deg)";
      }
    }
  }
  
  const style = document.createElement("style");
  style.textContent = `
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
  `;
  document.head.appendChild(style);
  
  document.querySelectorAll(".category-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      handleCategorySelect(btn.dataset.category);
    });
  });
  
  showMoreBtn.addEventListener("click", handleShowMore);

  modalClose.addEventListener("click", closeBookModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeBookModal();
    }
  });
  
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
      closeBookModal();
    }
  });
  

  window.addEventListener("resize", () => {
    const newInitialCount = getInitialBookCount();
    const oldInitialCount = window.innerWidth <= 768 ? 24 : 10;
  

    if (visibleBooks === oldInitialCount) {
      visibleBooks = newInitialCount;
      renderBooks();
    }
  });
  
  function showApiStatus(isWorking) {
    const countElement = document.querySelector(".count");
    if (countElement && useBackupData) {
      countElement.style.color = "#e15d05";
      countElement.style.fontWeight = "500";
      countElement.title =
        "Using offline data - API server unavailable or blocked by CORS policy";

        if (!countElement.querySelector(".offline-indicator")) {
        const indicator = document.createElement("span");
        indicator.className = "offline-indicator";
        indicator.innerHTML = " 🔴";
        indicator.style.fontSize = "12px";
        indicator.title = "Offline mode";
        countElement.appendChild(indicator);
      }
    } else if (countElement) {
      countElement.style.color = "#0b0500";
      countElement.style.fontWeight = "normal";
      countElement.title = "Live data from API";

        
      const indicator = countElement.querySelector(".offline-indicator");
      if (indicator) {
        indicator.remove();
      }
  
      if (!countElement.querySelector(".online-indicator")) {
        const indicator = document.createElement("span");
        indicator.className = "online-indicator";
        indicator.innerHTML = " 🟢";
        indicator.style.fontSize = "12px";
        indicator.title = "Live data";
        countElement.appendChild(indicator);
  
        setTimeout(() => {
          if (indicator.parentNode) {
            indicator.remove();
          }
        }, 3000);
      }
    }
  }
  
  async function testApiConnection() {
    try {
      debugLog("Testing API connection...");
      const isConnected = await testConnection();
      debugLog("API connection test result:", isConnected);
      return isConnected;
    } catch (error) {
      debugLog("API connection test failed:", error.message);
      return false;
    }
  }
  
  // Initialize the app
  document.addEventListener("DOMContentLoaded", async () => {
    debugLog("App initializing...");
  
    // Make functions globally accessible for onclick handlers
    window.handleLearnMore = handleLearnMore;
    window.changeQuantity = changeQuantity;
    window.addToCart = addToCart;
    window.buyNow = buyNow;
    window.toggleAccordion = toggleAccordion;
  
    // Always start with backup data for immediate display
    allBooks = MOCK_BOOKS;
    useBackupData = true;
    isLoading = false;
    visibleBooks = getInitialBookCount(); // Reset to proper initial count
    renderBooks();
    showApiStatus(false);
    debugLog("Initial render with backup data complete");
  
    // Test API connection first
    debugLog("Testing API connection...");
    const apiAvailable = await testApiConnection();
  
    if (!apiAvailable) {
      debugLog("API server unreachable - staying in offline mode");
      showApiStatus(false);
  
      // Show user-friendly message
      const bookList = document.getElementById("book-list");
      if (bookList && bookList.children.length > 0) {
        // Add a subtle notification
        const notification = document.createElement("div");
        notification.style.cssText = `
          position: fixed;
          top: 20px;
          right: 20px;
          background: #e15d05;
          color: white;
          padding: 12px 16px;
          border-radius: 4px;
          font-size: 14px;
          z-index: 1000;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        `;
        notification.textContent = "Using offline data - API unavailable";
        document.body.appendChild(notification);
  
        // Remove notification after 5 seconds
        setTimeout(() => {
          if (notification.parentNode) {
            notification.remove();
          }
        }, 5000);
      }
  
      return; // Don't try API calls if connection test failed
    }
  
    // API is available, try to load real data
    debugLog("API connection successful - loading real data...");
  
    setTimeout(async () => {
      try {
        await updateCategoriesInSidebar();
        await loadBooks();
        showApiStatus(!useBackupData);
        debugLog("Real data loading complete");
      } catch (error) {
        debugLog("Real data loading failed:", error.message);
        showApiStatus(false);
      }
    }, 100);
  
    debugLog("App initialization complete");
  });
  