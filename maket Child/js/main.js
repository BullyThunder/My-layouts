$(document).ready(function(){
    $('.category__slick__content').slick({
      arrows:false,
      dots:true,
      infinite: true,
      slidesToShow:1,
      slidesToScroll: 1,
      adaptiveHeight: false,
      autoplay:false,
      dotsClass: 'slick-dots',
      speed:1000,
        responsive:[
            {
                breakpoint: 814,
                settings: {
                    slidesToShow:1,
                }
            },
            {
                breakpoint: 1269,
                settings: {
                    slidesToShow:1,
                }
            },
            {
                breakpoint: 1441,
                settings: {
                    slidesToShow:1,
                }
            },
        ]
    });
});
$('.popular__actual__slick').slick({
  arrows:true,
  dots:true,
  infinite: true,
  slidesToShow:1,
  slidesToScroll: 1,
  adaptiveHeight: false,
  prevArrow: $('.prev'),
  nextArrow: $('.next'), 
  autoplay:false,
  speed:1000,
  autoplaySpeed:800,
    responsive:[
        {
            breakpoint: 426,
            settings: {
                slidesToShow:1,
            }
        }
    ]
});
    $('.popular__slick').slick({
        arrows:true,
        dots:true,
        infinite: false,
        slidesToShow:4,
        slidesToScroll: 1,
        adaptiveHeight: false,
        autoplay:false,
        speed:1000,
        autoplaySpeed:800,
          responsive:[
              {
                  breakpoint: 768,
                  settings: {
                      slidesToShow:3,
                      
                  }
              },
              {
                breakpoint: 527,
                settings: {
                    slidesToShow:2,
                    arrows:false,
                }
            }
          ]
      });
      $('.spring__images').slick({
        dots:true,
        arrows:false,
        infinite: false,
        slidesToShow:1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay:false,
        speed:1000,
        autoplaySpeed:800,
        mobileFirst: true,
        responsive: [
          {
            breakpoint: 375,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            }
         },
           {
              breakpoint: 749,
              settings: "unslick"
           }
        ]
     });
      $('.fashion__contents').slick({
        dots:true,
        arrows:false,
        infinite: false,
        slidesToShow:1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay:false,
        speed:1000,
        autoplaySpeed:800,
        mobileFirst: true,
        responsive: [
          {
            breakpoint: 426,
            settings: {
              slidesToShow: 2,
            }
          },
           {
              breakpoint: 507,
              settings: "unslick"
           }
        ]
     });
      $('.fashion__contents').slick({
        dots:true,
        arrows:false,
        infinite: true,
        slidesToShow:1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay:false,
        speed:1000,
        autoplaySpeed:800,
        mobileFirst: true,
        responsive: [
          
           {
              breakpoint: 550,
              settings: "unslick"
           }
        ]
     });

  window.addEventListener("resize", function() {
    if (window.innerWidth <= 550) {
      $('.fashion__contents').slick('unslick');
      sliderIsLive = false;
    }
    else {
      if (sliderIsLive) {
        $('.fashion__contents').slick();
        sliderIsLive = true;
      }
    }
  });

  window.addEventListener("resize", function() {
    if (window.innerWidth <= 749) {
      $('.spring__images').slick('unslick');
      sliderIsLive = false;
    }
    else {
      if (sliderIsLive) {
        $('.spring__images').slick();
        sliderIsLive = true;
      }
    }
  });


