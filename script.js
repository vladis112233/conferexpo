document.addEventListener('DOMContentLoaded', () => {

  // получаем все элементы с классом pushmenu
  const pushmenu = document.getElementsByClassName('pushmenu');

  // получаем элемент с классом hidden-overley
  const hiddenOverley = document.querySelector('.hidden-overley');

  // отслеживаем клик клика по оверлею
  hiddenOverley.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('show');
    document.querySelector('.sidebar').classList.toggle('show');
    document.querySelector('body').classList.toggle('sidebar-opened');
    for( i=0; i < pushmenu.length; i++ ){
      pushmenu[i].classList.toggle('open');
    }
  });

  const pushmenuFunction = function() {
    document.querySelector('.pushmenu').classList.toggle('open');
    document.querySelector('.sidebar').classList.toggle('show');
    document.querySelector('.hidden-overley').classList.toggle('show');
    document.body.classList.toggle('sidebar-opened')
  };

  // Отслеживаем клики кнопок с классом pushmenu
  for( i=0; i < pushmenu.length; i++ ){
    pushmenu[i].addEventListener('click', pushmenuFunction, false);
  }

  const sidebarAccordeon = document.querySelectorAll('.sidebar .menu-parent-item a:first-child');
  const accordeonFunction =  function() {
    this.parentNode.querySelector('ul').classList.toggle('show');
    this.querySelector('i').classList.toggle('rotate');
  }
  // Отслеживаем клики родительских пунктов меню
  for( i=0; i < sidebarAccordeon.length; i++ ){
    sidebarAccordeon[i].addEventListener('click', accordeonFunction, false);
  }
});

// const carousel = document.querySelector('.carousel');
// const slides = carousel.children;
// const totalSlides = slides.length;
// const visibleSlides = 3; // Количество видимых слайдов
// let index = 0;
//
// // Функция для перемещения карусели
// function moveCarousel() {
//   index += visibleSlides; // Увеличиваем индекс на количество видимых слайдов
//
//   // Если индекс превышает общее количество слайдов, возвращаемся к первому
//   if (index >= totalSlides) {
//     index = 0; // Возвращаемся к первому слайду
//   }
//
//   // Двигаем карусель
//   carousel.style.transform = `translateX(${-index * 300}px)`; // Сдвигаем на ширину слайдов
// }
//
// // Меняем слайды каждые 3 секунды
// setInterval(moveCarousel, 10000);
//


// const carousel = document.querySelector('.carousel');
// const slides = carousel.children;
// const totalSlides = slides.length;
// const visibleSlides = 4; // Количество видимых слайдов
// let index = 0;
//
// // Функция для перемещения карусели
// function moveCarousel() {
//   index++; // Увеличиваем индекс на 1
//
//   // Если индекс превышает количество слайдов, возвращаемся к первому
//   if (index >= totalSlides) {
//     index = 0; // Возвращаемся к первому слайду
//   }
//
//   // Двигаем карусель
//   carousel.style.transform = `translateX(${-index * (300 / visibleSlides)}px)`; // Сдвигаем на ширину одного слайда
// }
//
// // Меняем слайды каждые 3 секунды
// setInterval(moveCarousel, 1000);

const carousel = document.querySelector('.carousel');
const slides = carousel.children;
const totalSlides = slides.length;
const visibleSlides = 3; // Количество видимых слайдов
let index = 0;

// Функция для перемещения карусели
function moveCarousel() {
  index++;

  // Если индекс превышает количество слайдов - возвращаемся к первому
  if (index >= totalSlides - visibleSlides + 1) {
    index = 0; // Возвращаемся к первому слайду
  }

  // Двигаем карусель на один слайд
  carousel.style.transform = `translateX(${-index * 300}px)`; // Сдвигаем на ширину одного слайда
}

// Меняем слайды каждые 3 секунды
setInterval(moveCarousel, 3000);



const carousel1 = document.querySelector('.carousel1'); // Новый карусель
const slides1 = carousel1.children; // Слайды второго каруселя
const totalSlides1 = slides1.length; // Общее количество слайдов
const visibleSlides1 = 4; // Количество видимых слайдов (измените на 5, если хотите)
let index1 = 0; // Индекс для второго каруселя

// Функция для перемещения карусели в обратном направлении
function moveCarousel1() {
  index1--; // Уменьшаем индекс для движения назад

  // Если индекс меньше 0, возвращаемся к последнему слайду
  if (index1 < 0) {
    index1 = totalSlides1 - visibleSlides1; // Устанавливаем индекс на последний видимый слайд
  }

  // Двигаем карусель
  carousel1.style.transform = `translateX(${-index1 * 300}px)`; // Сдвигаем на ширину слайдов
}

// Меняем слайды каждые 6 секунд
setInterval(moveCarousel1, 3000);



const carousel3 = document.querySelector('.carousel3');
const slides3 = carousel3.children;
const totalSlides3 = slides3.length;
const visibleSlides3 = 2; // Количество видимых слайдов
let index3 = 0;

// Функция для перемещения карусели
function moveCarousel3() {
  index3++;

  // Если индекс превышает количество слайдов - возвращаемся к первому
  if (index3 >= totalSlides3 - visibleSlides3 + 1) {
    index3 = 0; // Возвращаемся к первому слайду
  }

  // Двигаем карусель на один слайд
  carousel3.style.transform = `translateX(${-index3 * 300}px)`; // Сдвигаем на ширину одного слайда
}

// Меняем слайды каждые 3 секунды
setInterval(moveCarousel3, 3000);




const carousel4 = document.querySelector('.carousel4'); // Новый карусель
const slides4 = carousel4.children; // Слайды второго каруселя
const totalSlides4 = slides4.length; // Общее количество слайдов
const visibleSlides4 = 5; // Количество видимых слайдов
let index4 = 0; // Индекс для второго каруселя

// Функция для перемещения карусели в обратном направлении
function moveCarousel4() {
  index4--; // Уменьшаем индекс для движения назад

  // Если индекс меньше 0, возвращаемся к последнему слайду
  if (index4 < 0) {
    index4 = totalSlides4 - visibleSlides4; // Устанавливаем индекс на последний видимый слайд
  }

  // Двигаем карусель
  carousel4.style.transform = `translateX(${-index4 * 300}px)`; // Сдвигаем на ширину слайдов
}

// Меняем слайды каждые 3 секунды
setInterval(moveCarousel4, 3000);
