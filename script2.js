// const carousel = document.querySelector('.carousel');
// let index = 0;
//
// function moveCarousel() {
//   index++;
//   if (index >= carousel.children.length) {
//     index = 0; // Возвращаемся к первому изображению, если достигли конца
//   }
//   carousel.style.transform = `translateX(${-index * 400}px)`; // Сдвигаем карусель на ширину одного изображения
// }
//
// setInterval(moveCarousel, 3000); // Прокручиваем карусель каждые 3 секунды

// const carousel = document.querySelector('.carousel');
// const firstSlide = carousel.children[0]; // Первый слайд
// const cloneFirstSlide = firstSlide.cloneNode(true); // Клонируем первый слайд
// carousel.appendChild(cloneFirstSlide); // Добавляем клон в конец карусели
//
// let index = 0;
//
// function moveCarousel() {
//   index++;
//
//   // Если индекс превышает количество слайдов, возвращаемся к первому
//   if (index >= carousel.children.length) {
//     index = 1; // Устанавливаем индекс на 1, чтобы не показывать клон
//     carousel.style.transition = "none"; // Отключаем анимацию
//     carousel.style.transform = `translateX(${-index * 300}px)`; // Сразу перемещаем к первому слайду
//   } else {
//     carousel.style.transition = "transform 0.5s ease-in-out"; // Включаем анимацию
//     carousel.style.transform = `translateX(${-index * 300}px)`; // Двигаем карусель
//   }
// }
//
// // Меняем слайды каждые 3 секунды
// setInterval(moveCarousel, 3000);


// const carousel = document.querySelector('.carousel');
// const slides = carousel.children;
// let index = 0;
//
// // Функция для перемещения карусели
// function moveCarousel() {
//   index++;
//
//   // Если индекс больше количества слайдов, возвращаемся к первому
//   if (index >= slides.length) {
//     index = 0; // Возвращаемся к первому слайду
//   }
//
//   carousel.style.transform = `translateX(${-index * 300}px)`; // Двигаем карусель
// }
//
// // Меняем слайды каждые 3 секунды
// setInterval(moveCarousel, 3000);


const carousel = document.querySelector('.carousel');
const slides = carousel.children;
const totalSlides = slides.length;
const visibleSlides = 5; // Количество видимых слайдов
let index = 0;

// Функция для перемещения карусели
function moveCarousel() {
  index += visibleSlides; // Увеличиваем индекс на количество видимых слайдов

  // Если индекс превышает общее количество слайдов, возвращаемся к первому
  if (index >= totalSlides) {
    index = 0; // Возвращаемся к первому слайду
  }

  // Двигаем карусель
  carousel.style.transform = `translateX(${-index * 300}px)`; // Сдвигаем на ширину слайдов
}

// Меняем слайды каждые 3 секунды
setInterval(moveCarousel, 6000);
