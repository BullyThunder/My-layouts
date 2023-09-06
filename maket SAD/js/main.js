$(document).ready(function(){
    $('.land__slider ').slick({
        responsive:[
            {
                breakpoint: 321,
                settings: {
                    slidesToShow:1,
                    arrows:true,
                    dots:false,
                    slidesToShow:1,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                    autoplay:false,
                    centreMode: true,
                    speed:1000,
                    autoplaySpeed:800,
                }
            }
        ]
    });
});
$('.slick__slider__block').slick({
              arrows:true,
              dots:true,
              infinite: true,
              slidesToShow:3,
              slidesToScroll: 1,
              adaptiveHeight: false,
              autoplay:false,
              speed:1000,
              autoplaySpeed:800,
              responsive:[
                {
                    breakpoint: 950,
                    settings: {
                        slidesToShow:2,
                        arrows:true,
                        dots:true,
                        slidesToScroll: 1,
                        autoplay:false,
                        centreMode: true,
                        speed:1000,
                        autoplaySpeed:800,
                    }
                },
                {
                  breakpoint: 427, 
                  settings: {
                    arrows: true,
                    dots: true,
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                  }
                }
            ]
      }
);
function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.header__burger-menu_button', '.header__burger-menu_lines');
    let links = menu.find('.header__burger-menu_link');
    let overlay = menu.find('.header__burger-menu_overlay');
    
    button.on('click', (e) => {
      e.preventDefault();
      toggleMenu();
    });
    
    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());
    
    function toggleMenu(){
      menu.toggleClass('header__burger-menu_active');
      
      if (menu.hasClass('header__burger-menu_active')) {
        $('body').css('overlow', 'hidden');
      } else {
        $('body').css('overlow', 'visible');
      }
    }
  }
  
  burgerMenu('.header__burger-menu');

  $(".care__button__first").click(function(){
    $(".option").toggle('show')
})
$(".care__button__second").click(function(){
  $(".second").toggle('show')
})
$(".care__button__third").click(function(){
  $(".third").toggle('show')
})
$(".care__button__fourth").click(function(){
  $(".fourth").toggle('show')
})

