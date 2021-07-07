$(function(){
   
   $('.navbar__menu').on('click', function () {
      $('.navbar__inner').slideToggle();
    });
    $('.nav__link').on('click', function () {
      $(this).closest('.nav__item').toggleClass('active');
    });
  
   // $('select, input.radio, input.checkbox').styler();
 
   $('.hp-zapasy__inner').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay:true,
      infinite:true,
      prevArrow: '<button class="hp-zapasy__btn hp-zapasy__btnprev"><img src="images/svg/arrow-left-solid.svg" alt="" ></button> ',
      nextArrow: ' <button class="hp-zapasy__btn hp-zapasy__btnnext"><img src="images/svg/arrow-right-solid.svg" alt = "" ></button > ',
      responsive: [
         {
            breakpoint: 1541,
            settings: {
               dots: true,
               arrows: false,
              
            }
         },
         {
            breakpoint: 1340,
            settings: {
               dots: true,
               slidesToShow: 2,
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 1,
               dots: true,
            }
         },
        
      ]

   });

   $('.milniky__inner').slick({
      prevArrow: '<button class="milniky__btn milniky__btnprev"><img src="images/svg/arrow-left-solid.svg" alt="" ></button> ',
      nextArrow: ' <button class="milniky__btn milniky__btnnext"><img src="images/svg/arrow-right-solid.svg" alt = "" ></button > ',
      centerMode: true,
      slidesToScroll: 1,
      autoplay:true,
      infinite:true,
      slidesToShow: 3,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1541,
          settings: {
            dots: true,
            arrows: false,
            centerMode: true,
          
          }
        },
        {
          breakpoint: 1401,
          settings: {
            dots: true,
            centerMode: true,
            arrows: false,
            slidesToShow: 1
          }
        },
        {
         breakpoint: 451,
         settings: {
           centerMode: false,
           dots: true,
           arrows: false,
           slidesToShow: 1,
           variableWidth: 400,
         }
       }
      ]
    });
// end
});