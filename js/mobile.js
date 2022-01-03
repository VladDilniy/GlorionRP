/*
Разработка сайтов от Victor Mayorov [m0fe.ru]
VK - vk.com/victor.mayorov
Telegram - +7 (937) 135-24-52
*/


$('.menu__link').on('click', function(e) {
  
    e.preventDefault;
  $(this).toggleClass('menu__link--active');
  $('.navs').toggleClass('visible');

});