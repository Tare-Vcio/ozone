$( document ).ready(function() {
   
    
    $('.slider').slick({    
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    arrows: false,
    autoplaySpeed: 3500,
    speed: 1500,
    });

});

var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
  wow.init();

  const sub_menu = document.querySelector('.sub-menu');
  const menu = document.querySelector('.menu-nav');
  sub_menu.addEventListener('click',()=>{
    sub_menu.classList.toggle('isactive');
    menu.classList.toggle('isactive');   
});

window.addEventListener('scroll', function(){
  let pageTop = document.querySelector('#btnScrolltoTop');
  let windowPosition = window.scrollY > 80;
  pageTop.classList.toggle('active', windowPosition);
})

const btnScrolltoTop = document.querySelector('#btnScrolltoTop');
btnScrolltoTop.addEventListener('click', function(){
  $('html, body').animate({scrollTop: 0}, 'slow');
});

