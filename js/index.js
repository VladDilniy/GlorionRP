


function ready() {
  const $logo = document.querySelector('.logo');
  const $htp = document.querySelector('.how-to-play');
  const $nav = document.querySelector('.nav');
  const $servers = document.querySelector('.servers');
  const $play = document.querySelector('.play');
  const $news = document.querySelector('.news-list');
  const $donate = document.querySelector('.donate');
  const $about = document.querySelector('.about');
  const logoWidth = $logo.offsetWidth;
  const logoHeight = $logo.offsetHeight;
  const $container = document.querySelector('.page-container');
  const containerWidth = $container.offsetWidth;
  const containerHeight = $container.offsetHeight;
  const offsetX = (containerWidth - logoWidth)/ 2;
  const offsetY = (containerHeight - logoHeight) / 2;

  $logo.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  setTimeout(function() {
    $logo.classList.remove('logo--hidden');
  }, 600);
  setTimeout(function() {
    $htp.classList.remove('how-to-play--hidden');
  }, 3500);
  setTimeout(function() {
    $servers.classList.remove('servers--hidden');
  }, 3500);
  setTimeout(function() {
    $play.classList.remove('play--hidden');
  }, 3500);
  setTimeout(function() {
    $donate.classList.remove('donate--hidden');
  }, 3500);
  setTimeout(function() {
    $about.classList.remove('about--hidden');
  }, 3500);
  setTimeout(function() {
    $nav.classList.remove('nav--hidden');
  }, 3000);
  setTimeout(function() {
    $news.classList.remove('news-list--hidden');
  }, 3500);
  setTimeout(function() {
    $logo.style.transform = null;
  }, 2000);
}
document.addEventListener('DOMContentLoaded', ready);

// buttons
var animateButton = function(e) {
  e.preventDefault;
  e.target.classList.remove('animate');

  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};
var socialButtons = document.getElementsByClassName("social_join");
var serversButtons = document.getElementsByClassName("join-btn");


for (var i = 0; i < socialButtons.length; i++) {
  socialButtons[i].addEventListener('click', animateButton, false);
}
for (var i = 0; i < serversButtons.length; i++) {
  serversButtons[i].addEventListener('click', animateButton, false);
}



// Официальная страница
jQuery(function($){
  $.ajax({
    url: 'https://vk.com/search?c[section]=people&c[group]=185276084',
    dataType: "jsonp",  
    success:function(e){
        console.log(e.response);
      $('#official').html(e.response.count);
    }  
  });
});

// Свободная группа

jQuery(function($){
  $.ajax({
    url: 'https://api.vk.com/method/groups.getMembers?group_id=gtafive_free&version=5.27&access_token=5cd9f37c5cd9f37c5cd9f37ce35cbfa8b255cd95cd9f37c076bfb20a8b2b73d76d31197',
    dataType: "jsonp",  
    success:function(e){
        console.log(e.response);
      $('#free').html(e.response.count);
    }  
  });
});

// scroll to top

$(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
      $('#toTop').fadeIn();
    } else {
      $('#toTop').fadeOut();
    }
  });
    $('#toTop').click(function() {
    $('body,html').animate({scrollTop:0},800);
  });
});

// slides

$(document).ready(function() {
  $("#carousel").owlCarousel({
      navigation : false,
      slideSpeed : 500,
      paginationSpeed : 800,
      rewindSpeed : 3000,
      singleItem: true,
      autoPlay : true,
      stopOnHover : true,
  });
});