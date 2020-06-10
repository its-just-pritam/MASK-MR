function $(e) { return document.querySelector(e); }

var next = $('.next');
var prev = $('.prev');
var index = 0;

var randomText = [
  {
    title: "PAGE 1",
    src: "0.png"
  },
  {
    title: "PAGE 2",
    src: "2.png"
  },
  {
    title: "PAGE 3",
    src: "8.png"
  },
  {
    title: "PAGE 4",
    src: "15.png"
  } 
];

$('.content__title').innerHTML = randomText[0].title;
$('.content__img').src = randomText[0].src;

next.addEventListener('click', function() {
  if (index >= 0 && index <= 2) {
    toggleView();
    setTimeout(function() {
      $('.content__title').innerHTML = randomText[index].title;
      $('.content__img').src = randomText[index].src;     
    }, 500)
    $('main').classList.remove('view'+index+'--active');
    $('main').classList.add('view'+(index + 1)+'--active');
    $('header').classList.remove('head'+index+'--active');
    $('header').classList.add('head'+(index + 1)+'--active');
    index++;
  }
}, false);

prev.addEventListener('click', function() {
  if (index > 0 && index <= 3) {
    toggleView();
    setTimeout(function() {
      $('.content__title').innerHTML = randomText[index].title;
      $('.content__img').src = randomText[index].src;      
    }, 500)
    $('main').classList.remove('view'+(index)+'--active');
    $('main').classList.add('view'+(index - 1)+'--active');
    $('header').classList.remove('head'+index+'--active');
    $('header').classList.add('head'+(index - 1)+'--active');
    index--;
  }
}, false)

function toggleView() {
    $('main').classList.add('fade-out');
    setTimeout(function() {
      $('main').classList.remove('fade-out');
    }, 500)
}