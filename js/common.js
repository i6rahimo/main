$(function() {


// Шторка при загрузке на телефоне
let touchstartY = 0;
let touchendY = 0;

const body = document.querySelector('body'),
      gestureZone = document.querySelector('.curtain');

gestureZone.addEventListener('touchstart', function(event) {
  touchstartY = event.changedTouches[0].screenY;
}, false);

gestureZone.addEventListener('touchend', function(event) {
  touchendY = event.changedTouches[0].screenY;
  handleGesture();
}, false); 

function handleGesture() {
  if (touchendY < touchstartY) {
    gestureZone.style.transform = "translateY(" + (-100) + "%)";
    setTimeout(function(){
      body.style.overflow = "visible";
    }, 500);    
  }
}



// PHONE CALL LIGHTBOX
const lbox_link = $('.callback'),
      lbox = $('#callback_modal'),
      lboxIcon = $('.callback__icon'),
      lboxClose = $('.callback__close');

lbox_link.click(function() {
  $(this).toggleClass('active');
  lbox.toggleClass('show');
  lboxIcon.toggleClass('hide');
  lboxClose.toggleClass('show');
});




var lazyLoadInstance = new LazyLoad({
  elements_selector: ".lazy",
  threshold: 500
});




// Gallery caption
Fancybox.bind('[data-fancybox]', {
  Toolbar: {
    display: [
      "counter",
      "close",
    ],
  },
  //infinite: false,
  //loop: false,
  autoFocus: false  
});




// Anchor
function scrollTo(c,e,d){d||(d=easeOutCuaic);var a=document.documentElement;if(0===a.scrollTop){var b=a.scrollTop;++a.scrollTop;a=b+1===a.scrollTop--?a:document.body}b=a.scrollTop;0>=e||("object"===typeof b&&(b=b.offsetTop),"object"===typeof c&&(c=c.offsetTop),function(a,b,c,f,d,e,h){function g(){0>f||1<f||0>=d?a.scrollTop=c:(a.scrollTop=b-(b-c)*h(f),f+=d*e,setTimeout(g,e))}g()}(a,b,c,0,1/e,20,d))};

function easeInOutCuaic(t){
  t/=0.5;
  if(t<1)return t*t*t/2;
  t-=2;
  return (t*t*t+2)/2;
}

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}



//Go to top
$(window).scroll(function() {
  var position = $(window).scrollTop(),
      goTop = $('.go-top'),
      block_position = $('#projects').offset().top;
  if (position > block_position) {
      goTop.addClass('show');
  } else {
      goTop.removeClass('show');
  }
});





// Random slides
function shuffle() {
  let container = document.querySelector('.promo__inner');
  let elementsArray = Array.prototype.slice.call(container.getElementsByClassName('swiper-slide'));
    elementsArray.forEach(function(element){
    container.removeChild(element);
  })
  shuffleArray(elementsArray);
  elementsArray.forEach(function(element){
    container.appendChild(element);
  })
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
shuffle()



const promo_slider = new Swiper("#promo_slider", {
  slidesPerView: 1,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  lazy: {
    loadPrevNext: true,
  },
  speed: 1500,
  autoplay: {
    delay: 3000,
  },
  allowTouchMove: false
});




let mySwiper;

const optimizedSlider = document.querySelector("#optimized_slider");

function mobileSlider() {
  if (window.innerWidth <= 991 && optimizedSlider.dataset.mobile == 'false') {
    mySwiper = new Swiper(optimizedSlider, {
      autoHeight: true,
      spaceBetween: 30,
      speed: 500,
      allowTouchMove: false,
      navigation: {
        prevEl: "#optimized_prev",
        nextEl: "#optimized_next",
      },
      pagination: {
        el: '#optimized_count',
        type: 'fraction'
      },
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        }
      }
    });

    optimizedSlider.dataset.mobile = 'true';
  }

  if (window.innerWidth > 991) {
    optimizedSlider.dataset.mobile = 'false';
    if (optimizedSlider.classList.contains('swiper-initialized')) {
      mySwiper.destroy();
    }
  }
}

mobileSlider()

window.addEventListener('resize', () => {
  mobileSlider();
});




var d1_sh_160_nav = new Swiper("#d1_sh_160_nav", {
  slidesPerView: 3,
  spaceBetween: 5,
  speed: 500,
  lazy: true,
});
var d1_sh_160 = new Swiper("#d1_sh_160", {
  speed: 500,
  lazy: true,
  // navigation: {
  //   prevEl: "#d1_sh_160_prev",
  //   nextEl: "#d1_sh_160_next",
  // },  
  thumbs: {
    swiper: d1_sh_160_nav,
  }  
});

var d1_sh_205_nav = new Swiper("#d1_sh_205_nav", {
  slidesPerView: 3,
  spaceBetween: 5,
  speed: 500,
});
var d1_sh_205 = new Swiper("#d1_sh_205", {
  speed: 500,
  // navigation: {
  //   prevEl: "#d1_sh_205_prev",
  //   nextEl: "#d1_sh_205_next",
  // },
  thumbs: {
    swiper: d1_sh_205_nav,
  },
});

var d2_m_270_nav = new Swiper("#d2_m_270_nav", {
  slidesPerView: 3,
  spaceBetween: 5,
  speed: 500,
});
var d2_m_270 = new Swiper("#d2_m_270", {
  speed: 500,
  // navigation: {
  //   prevEl: "#d2_m_270_prev",
  //   nextEl: "#d2_m_270_next",
  // },
  thumbs: {
    swiper: d2_m_270_nav,
  },
});

var d2_ak_278_nav = new Swiper("#d2_ak_278_nav", {
  slidesPerView: 3,
  spaceBetween: 5,
  speed: 500,
});
var d2_ak_278 = new Swiper("#d2_ak_278", {
  speed: 500,
  // navigation: {
  //   prevEl: "#d2_ak_278_prev",
  //   nextEl: "#d2_ak_278_next",
  // },
  thumbs: {
    swiper: d2_ak_278_nav,
  },
});

var d2_sh_308_nav = new Swiper("#d2_sh_308_nav", {
  slidesPerView: 3,
  spaceBetween: 5,
  speed: 500,
});
var d2_sh_308 = new Swiper("#d2_sh_308", {
  speed: 500,
  // navigation: {
  //   prevEl: "#d2_sh_308_prev",
  //   nextEl: "#d2_sh_308_next",
  // },
  thumbs: {
    swiper: d2_sh_308_nav,
  },
});



const projectSlider = $('.project__slider');
const projectNav = $('.project__slider button');

projectNav.click(function(){
  $(this).closest(projectSlider).find('.swiper-slide-active img').click();
});



// Передача заголовков в попап
var projectBtn = $('.project__btn'),
    projectTitle = $('.project__title'),
    modalSubject = $('.modal__subject'),
    modalProjectTitle = $('.modal__project-title');

projectBtn.click(function() {
  $(modalProjectTitle).text($(this).parent().find(projectTitle).text());
  $(modalSubject).val('Получить смету проекта ' + $(this).parent().find(projectTitle).text());
});




videoSlider = new Swiper("#video_slider", {    
  slidesPerView: 1,
  spaceBetween: 30,
  autoHeight: true,
  speed: 500,
  navigation: {
    prevEl: "#video_prev",
    nextEl: "#video_next",
  }
});


// Video
const wrapperVideo = document.querySelector('.video__box'),
      video = document.querySelector('.video__source'),
      videoImg = document.querySelector('.video__img');;

wrapperVideo.addEventListener('click', function() {
  video.play();
  wrapperVideo.classList.remove('play');
  videoImg.remove();
});




// Accordion
$(".accordion__top").length > 0 &&
($(".accordion__top").on("click", function () {
  $(this).parent().toggleClass("active"), $(this).parent().hasClass("active") ? $(this).next().slideDown() : ($(".accordion__hidden").slideUp(), $(this).parent().removeClass("active"));
}),
$(function (o) {
  o(".accordion__top").mouseup(function (e) {
    var s = o(".accordion.active");
    s.is(e.target) || 0 !== s.has(e.target).length || s.removeClass("active");
  });
}),
$(function (o) {
  o(".accordion__top").mouseup(function (e) {
    var s = o(".accordion__hidden");
    s.is(e.target) || 0 !== s.has(e.target).length || s.slideUp();
  });
}))



// Gallery
exteriorsSlider = new Swiper("#exteriors_slider", {    
  slidesPerView: 1,
  spaceBetween: 30,  
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  speed: 500,
  autoHeight: true,  
  pagination: {
    el: '#exteriors_count',
    type: 'fraction'      
  }
});


const gallerySlider = document.querySelectorAll('#exteriors_slider');
const exteriorsPrev = document.querySelector('#exteriors_prev');
const exteriorsNext = document.querySelector('#exteriors_next');
const galleryNav = document.querySelectorAll('#exteriors_prev, #exteriors_next');

for (let i = 0; i < gallerySlider.length; i++) {    
  for (let j = 0; j < galleryNav.length; j++) {  
    galleryNav[j].addEventListener('click', function() {
      gallerySlider[i].querySelector('.swiper-slide-active').click();
    });
  }
}



/*if($('.quiz__question:first').hasClass('swiper-slide-active')) {
  questionPrevBtn.hide();
}
if($('.quiz__question:not(:last)').hasClass('swiper-slide-active')) {
  questionNextBtn.show();
}

questionPrevBtn.show();    
if($('.quiz__question:last').hasClass('swiper-slide-active')) {
  exteriorsNext.hide();
}*/




/*const submit = $('#callback_modal button[type="submit"]'),
      telInput = $('#callback_modal [type="tel"]');

submit.attr('disabled', 'disabled');
telInput.on('click input blur focus change keyup keydown', checkPhone);
function checkPhone() {
  var this_val = $(this).val();
  this_val = this_val.replace(/-/gi, ''); 
  this_val = this_val.replace(/_/gi, '');
  this_val = this_val.replace(/\+/gi, ''); 
  this_val = this_val.replace(/\)/gi, '');
  this_val = this_val.replace(/\(/gi, '');
  this_val = this_val.replace(/\s/g, ''); 
  if(this_val.length !== 11){
    $(this).closest('form').find(submit).attr('disabled', 'disabled');
  }else{
    $(this).closest('form').find(submit).removeAttr('disabled');
  }
}*/





// Yandex Map
let ok = false;                    
window.addEventListener('scroll', function() {
  if (ok === false) {
      ok = true;    
      setTimeout(function showYaMaps() {
        const script   = document.createElement("script");
        script.src   = "https://api-maps.yandex.ru/2.1/?lang=ru_RU&onload=getYaMap";
        document.body.appendChild(script);
      }, 1000)    
  }
});



// Current year
var date = new Date();
var currentYear = document.getElementsByClassName("current-year");

for(var i = 0; i < currentYear.length; i++) {
  currentYear[i].innerText=date.getFullYear();
}


})