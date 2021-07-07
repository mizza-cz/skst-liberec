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
$(document).ready(function(){var a=!1;$("a[data-gallery]").click(function(){if(!a){a=!0;var r=$(this).data("gallery"),t="/inc/gallery-ajax.php?mode="+r;return 1!=r&&2!=r&&3!=r||(t+="&id="+$(this).data("gallery-id")),$.getJSON(t,{format:"json"}).done(function(a){$(this).lightGallery({hash:!1,share:!1,dynamic:!0,dynamicEl:a,download:!1,backdropDuration:500})}).fail(function(a,r,t){alert("Nastala chyba pĹ™i naÄŤĂ­tĂˇnĂ­ galerie. ProsĂ­m zkuste to znovu."),console.error("getJSON failed, status: "+r+", error: "+t),console.error(a)}).always(function(){a=!1}),!1}})});