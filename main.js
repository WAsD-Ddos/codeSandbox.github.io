"use strict"

  
  const burgerBtn = document.querySelector('.header__burger');
  const navMenu = document.querySelector('.header__nav');
  

burgerBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
});

  document.addEventListener('click', (event) => {

    if (navMenu.classList.contains('active') && !event.target.closest('.header__burger')) {
      navMenu.classList.remove('active');
    }

    if (!event.target.closest('.podval_item-title')) {
      document.querySelectorAll('.podval_item-nav').forEach(navItem => {
        navItem.classList.remove('active');
    });

  };
});



 // Получаем все элементы podval_item-title
  const podvalTitles = document.querySelectorAll('.podval_item-title');
  
  // Обработчик клика для podval_item-title
  podvalTitles.forEach(title => {
    title.addEventListener('click', (e) => {

      
      // Находим соответствующий nav элемент (следующий братский элемент)
      const nav = title.nextElementSibling;
      
      // Убираем активный класс у всех nav элементов
      document.querySelectorAll('.podval_item-nav').forEach(navItem => {
        navItem.classList.remove('active');
      });
      
      // Добавляем активный класс к текущему nav элементу
      if (nav && nav.classList.contains('podval_item-nav')) {
        nav.classList.add('active');
      }
    });
  });


