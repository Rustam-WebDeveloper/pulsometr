$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,        
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/chevron-left-solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/chevron-right-solid.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
      });
  });