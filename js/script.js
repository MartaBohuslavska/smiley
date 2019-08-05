$(document).ready(function(){

  $('.fotos').slick({
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 900,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 1
      }
    },
    {
      breakpoint: 620,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1
      }
    }]
  });

  $('.blockPeople').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $('.textSlider').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
  })

  $('.slide-prev').on('click', function(){
    $('.blockPeople').slick('slickPrev');
    $('.textSlider').slick('slickPrev');
  });

  $('.slide-next').on('click', function(){
    $('.blockPeople').slick('slickNext');
    $('.textSlider').slick('slickNext');
  });

});