const slides = document.querySelectorAll('.events-item');
const indicators = document.querySelectorAll('.events-indicator');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Змінні для відстеження поточного стану
let currentSlide = 0;       // Для мобільних
let currentPage = 0;        // Для планшетів
const totalSlides = slides.length;

// Функція для оновлення відображення
function updateDisplay() {
    // Перевіряємо розмір екрану
    const isTablet = window.innerWidth >= 768;
    
    if (isTablet) {
        // Логіка для планшетів
        hideAllSlides();
        
        if (currentPage === 0) {
            // Показуємо перші 2 події
            slides[0].style.display = 'block';
            if (slides[1]) slides[1].style.display = 'block';
        } else {
            // Показуємо третю подію
            if (slides[2]) slides[2].style.display = 'block';
        }
        
        updateIndicators(currentPage);
        updateButtons(currentPage, 1); // Максимум 2 сторінки
    } else {
        // Логіка для мобільних
        hideAllSlides();
        slides[currentSlide].style.display = 'block';
        
        updateIndicators(currentSlide);
        updateButtons(currentSlide, totalSlides - 1);
    }
}

// Функція для приховування всіх слайдів
function hideAllSlides() {
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
}

// Функція для оновлення індикаторів
function updateIndicators(activeIndex) {
    indicators.forEach((indicator, index) => {
        if (index === activeIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Функція для оновлення кнопок
function updateButtons(current, max) {
    prevBtn.disabled = (current === 0);
    nextBtn.disabled = (current === max);
}

// Функція для переходу назад
function goToPrevious() {
    const isTablet = window.innerWidth >= 768;
    
    if (isTablet) {
        if (currentPage > 0) {
            currentPage = currentPage - 1;
            updateDisplay();
        }
    } else {
        if (currentSlide > 0) {
            currentSlide = currentSlide - 1;
            updateDisplay();
        }
    }
}

// Функція для переходу вперед
function goToNext() {
    const isTablet = window.innerWidth >= 768;
    
    if (isTablet) {
        if (currentPage < 1) {
            currentPage = currentPage + 1;
            updateDisplay();
        }
    } else {
        if (currentSlide < totalSlides - 1) {
            currentSlide = currentSlide + 1;
            updateDisplay();
        }
    }
}

// Функція для переходу до конкретного слайду/сторінки
function goToSpecific(index) {
    const isTablet = window.innerWidth >= 768;
    
    if (isTablet) {
        currentPage = index;
    } else {
        currentSlide = index;
    }
    updateDisplay();
}

// Підключаємо обробники подій
prevBtn.addEventListener('click', goToPrevious);
nextBtn.addEventListener('click', goToNext);

// Обробники для індикаторів
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', function() {
        goToSpecific(index);
    });
});

// Навігація клавіатурою
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        goToPrevious();
    }
    if (event.key === 'ArrowRight') {
        goToNext();
    }
});

// Обробка зміни розміру вікна
window.addEventListener('resize', updateDisplay);

// Обробники для кнопок Register
document.querySelectorAll('.events-register').forEach(function(button) {
    button.addEventListener('click', function() {
        const eventName = this.closest('.events-item').querySelector('.events-name').textContent;
        openModal(eventName);
    });
});

// Функції для модального вікна
function openModal(eventName) {
    const modal = document.getElementById('contactModal');
    const eventNameElement = document.getElementById('modalEventName');
    
    eventNameElement.textContent = eventName;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('contactModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    
    // Очищаємо форму
    document.getElementById('modalForm').reset();
}

// Обробники подій для модального вікна
document.getElementById('closeModal').addEventListener('click', closeModal);

// Закриття по кліку на фон
document.getElementById('contactModal').addEventListener('click', function(event) {
    if (event.target === this) {
        closeModal();
    }
});

// Закриття по Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Обробка відправки форми
document.getElementById('modalForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    console.log('Form submitted:', { name, email, message });
    alert('Дякуємо за реєстрацію!');
    
    closeModal();
});

// Запускаємо при завантаженні сторінки
updateDisplay();