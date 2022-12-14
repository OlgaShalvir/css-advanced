// toggle section content 
var titles = document.querySelectorAll('.section__title')
titles.forEach(element =>{
  element.onclick = function (event) {
    let button = event.target.closest('.section')
    console.log(button)
    let hide = button.querySelector('.section__content')
    hide.classList.toggle('visible')
  }
})

//card 
var card = document.querySelector('.card');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});

//cube
var cube = document.querySelector('.cube');
var radioGroup = document.querySelector('.radio-group');
var currentClass = '';

function changeSide() {
  var checkedRadio = radioGroup.querySelector(':checked');
  var showClass = 'show-' + checkedRadio.value;
  if ( currentClass ) {
    cube.classList.remove( currentClass );
  }
  cube.classList.add( showClass );
  currentClass = showClass;
}
// set initial side
changeSide();

radioGroup.addEventListener( 'change', changeSide );

//box
var box = document.querySelector('.box');
var boxRadioGroup = document.querySelector('.box-radio-group');
var currentBoxClass = '';

function changeBoxSide() {
  var checkedBoxRadio = boxRadioGroup.querySelector(':checked');
  var showBoxClass = 'show-' + checkedBoxRadio.value;
  if ( currentBoxClass ) {
    box.classList.remove( currentBoxClass );
  }
  box.classList.add( showBoxClass );
  currentBoxClass = showBoxClass;
}
// set initial side
changeBoxSide();

boxRadioGroup.addEventListener( 'change', changeBoxSide );

//carousel
var carousel = document.querySelector('.carousel');
var cellCount = 9;
var selectedIndex = 0;

function rotateCarousel() {
  var angle = selectedIndex / cellCount * -360;
  carousel.style.transform = 'translateZ(-288px) rotateY(' + angle + 'deg)';
}

var prevButton = document.querySelector('.previous-button');
prevButton.addEventListener( 'click', function() {
  selectedIndex--;
  rotateCarousel();
});

var nextButton = document.querySelector('.next-button');
nextButton.addEventListener( 'click', function() {
  selectedIndex++;
  rotateCarousel();
});

//advanced select
jQuery('.advanced-select').select2();

