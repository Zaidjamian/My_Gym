$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      nav: false,
      dots: true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
          },
          600:{
              items:1,
          },
          1000:{
              items:1,
          }
      }
    });
  });