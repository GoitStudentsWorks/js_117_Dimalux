import axios from 'axios';


// Базовий URL API
const BASE_URL = 'https://books-backend.p.goit.global/books';


 // Запит на список категорій книг 

export async function getCategoryList() {
  try {
    const response = await axios.get(`${BASE_URL}/category-list`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Помилка при отриманні категорій:', error);

    return [];
  }
}

// Для перевірки роботи функції
// getCategoryList();




// Запит на популярні книги (топ книг) 

export async function getTopBooks() {
  try {
    const response = await axios.get(`${BASE_URL}/top-books`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Помилка при отриманні топу книг:', error);
    return [];
  }
}

// Для перевірки роботи функції
// getTopBooks()



//  Запит на книги певної категорії
 
export async function getBooksByCategory(category) {
  try {
    const response = await axios.get(`${BASE_URL}/category`, {
      params: { category },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Помилка при отриманні книг за категорією:', error);
    return [];
  }
}

// Для перевірки роботи функції
// getBooksByCategory("Hardcover Fiction");




//  Запит на детальну інформацію про книгу за ID

export async function getBookDetails(bookId) {
  try {
    const response = await axios.get(`${BASE_URL}/${bookId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Помилка при отриманні інформації про книгу книги:', error);
    return null;
  }
}

// Для перевірки роботи функції для різних ID
// getBookDetails('65fc3c9ca957e5c1ae05b6d3');

// getBookDetails('65fc3c9da957e5c1ae05b77c');