$(function(){

    $('.program-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button type="button" class="slick-prev prorgam-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next prorgam-next">Next</button>',
        dots: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

      $(document).ready(function() {
        let scrollPosition = 0;
      
        // Сохранение текущего положения прокрутки при клике на пункт меню
        $('.menu-item').on('click', function() {
          scrollPosition = $(window).scrollTop();
        });
    
      });
      
      


      $("#glavnaya").click(function() { // ID откуда кливаем
        $('html, body').animate({
        scrollTop: $(".main").offset().top // класс объекта к которому приезжаем
        }, 1000); // Скорость прокрутки
       });

       $("#m_glavnaya").click(function() { // ID откуда кливаем
        $('html, body').animate({
        scrollTop: $(".main").offset().top // класс объекта к которому приезжаем
        }, 1000); // Скорость прокрутки
       });

       $("#mi").click(function() { // ID откуда кливаем
        $('html, body').animate({
        scrollTop: $(".about").offset().top // класс объекта к которому приезжаем
        }, 1000); // Скорость прокрутки
       });

       $("#m_mi").click(function() { // ID откуда кливаем
        $('html, body').animate({
        scrollTop: $(".about").offset().top // класс объекта к которому приезжаем
        }, 1000); // Скорость прокрутки
       });

       $("#uslugi").click(function() { // ID откуда кливаем
        $('html, body').animate({
        scrollTop: $(".programm").offset().top // класс объекта к которому приезжаем
        }, 1000); // Скорость прокрутки
       });

       $("#m_uslugi").click(function() { // ID откуда кливаем
        $('html, body').animate({
        scrollTop: $(".programm").offset().top // класс объекта к которому приезжаем
        }, 1000); // Скорость прокрутки
       });

       $("#usluga").click(function() { // ID откуда кливаем
        $('html, body').animate({
        scrollTop: $(".programm").offset().top // класс объекта к которому приезжаем
        }, 1000); // Скорость прокрутки
       });

       $("#uslug").click(function() { // ID откуда кливаем
        $('html, body').animate({
        scrollTop: $(".programm").offset().top // класс объекта к которому приезжаем
        }, 1000); // Скорость прокрутки
       });


       $("#kontakti").click(function() { // ID откуда кливаем
        $('html, body').animate({
        scrollTop: $(".footer").offset().top // класс объекта к которому приезжаем
        }, 1000); // Скорость прокрутки
       });

       $("#m_kontakti").click(function() { // ID откуда кливаем
        $('html, body').animate({
        scrollTop: $(".footer").offset().top // класс объекта к которому приезжаем
        }, 1000); // Скорость прокрутки
       });


});