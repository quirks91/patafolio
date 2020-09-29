$(function () {
      // Single-slider
      $('.visual').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        fade: true,
        dots: true,
        arrows: true,
        prevArrow: "<a class=\"slick-prev slider-slick-prev\"></a>",
        nextArrow: "<a class=\"slick-next slider-slick-next\"></a>",
        responsive: [{
          breakpoint: 1800,
          settings: {
            infinite: true,
            dots: false,
            arrows: false,
          }
        }]
      });

  $('.wear-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: "<a class=\"slick-prev slider-slick-prev\"></a>",
    nextArrow: "<a class=\"slick-next slider-slick-next\"></a>",
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false,
      }
    }
  ]
  });

  $('.activity-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    prevArrow: "<a class=\"slick-prev slider-slick-prev\"></a>",
    nextArrow: "<a class=\"slick-next slider-slick-next\"></a>",
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false,
      }
    }]
  });



  $('.item-btn li').click(function () {
    $(this).addClass('active')
    $(this).siblings().removeClass('active')

    var tab = $(this).attr('data-alt')
    $('.item-tabs ul').removeClass('active')
    $('#' + tab).addClass('active')
  })


  $(".btn1").on("click", function () {
    $(".item1>img").attr({
      "src": "imgs/select-gold.jpg"
    });
  });
  $(".btn2").on("click", function () {
    $(".item1>img").attr({
      "src": "imgs/select-blue.jpg"
    });
  });
  $(".btn3").on("click", function () {
    $(".item3>img").attr({
      "src": "imgs/item3-orange.jpg"
    });
  });
  $(".btn4").on("click", function () {
    $(".item3>img").attr({
      "src": "imgs/item3-green.jpg"
    });
  });
  $(".btn5").on("click", function () {
    $(".item4>img").attr({
      "src": "imgs/item4-beige.jpg"
    });
  });
  $(".btn6").on("click", function () {
    $(".item4>img").attr({
      "src": "imgs/item4-green.jpg"
    });
  });
  $(".btn7").on("click", function () {
    $(".item5>img").attr({
      "src": "imgs/item5-beige.jpg"
    });
  });
  $(".btn8").on("click", function () {
    $(".item5>img").attr({
      "src": "imgs/item5-flower.jpg"
    });
  });
  $(".btn9").on("click", function () {
    $(".item6>img").attr({
      "src": "imgs/bestitem1-blue.jpg"
    });
  });
  $(".btn10").on("click", function () {
    $(".item7>img").attr({
      "src": "imgs/bestitem2-gray.jpg"
    });
  });
  $(".btn11").on("click", function () {
    $(".item8>img").attr({
      "src": "imgs/bestitem3-ivory.jpg"
    });
  });
  $(".btn12").on("click", function () {
    $(".item8>img").attr({
      "src": "imgs/bestitem3-mint.jpg"
    });
  });
  $(".btn13").on("click", function () {
    $(".item8>img").attr({
      "src": "imgs/bestitem3-navy.jpg"
    });
  });

  $('.subaside a').click(function () {
    $('.subaside a').removeClass()
    $(this).addClass('on')
  })

  $('.subfilter a').click(function () {
    $('.subfilter a').removeClass()
    $(this).addClass('on')
  })

  $(window).scroll(function () {
    var height = $(document).scrollTop(); //실시간으로 스크롤의 높이를 측정
    if (height > 0) {
      $('header').addClass('fixed');
    } else if (height == 0) {
      $('header').removeClass('fixed');
    }
  });

  // Trigger
  $('.trigger').click(function () {
    $(this).toggleClass('active')
  })
  $('.trigger').click(function () {
  $('.utility').toggleClass('active')
  })

  });
