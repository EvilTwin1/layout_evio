$( document ).ready(function() {

    $('.burger').click(function () {
		  $('.menu').addClass('active-menu');
    });
    
    $('.close_menu').click(function () {
		  $('.menu').removeClass('active-menu');
    });


  $(' .blog').slice(0, 1).show();

  $('#loadMore').on('click', function (event) {
      event.preventDefault();

      $('.blog:hidden').slice(0, 1).slideDown();
      if ($('.blog:hidden').length === 0) {
          $('#loadMore').fadeOut();
      }
  });


  $('.test5').owlCarousel({
    loop:true,
    nav:false,
    item: 5,
    dots:true,
    responsive:{
        320:{
          items:1
        },
        500:{
          items:2
        },
        700:{
          items:3
        },
        1000:{
          items:3
        },
        1200:{
          items:4
        },
        1400:{
          items:5
        }
    }
  })

  $('.test4').owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    // center:true,
    items:1
  })


    $('.test3').owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    items:1
  })

    $('.test2').owlCarousel({
      loop:true,
      nav:false,
      dots:true,
      responsive:{
          320:{
              items:1
          },
          700:{
              items:2
          },
          1200:{
            items:3
        },
          1400:{
              items:4
          }
      }
    })


    $('.test').owlCarousel({
      loop:true,
      nav:false,
      dots:true,
      responsive:{
          320:{
              items:1
          },
          700:{
              items:2
          },
          1200:{
            items:3
        },
          1400:{
              items:3
          }
      }
    })

    var path = window.location.pathname.split("/").pop();

    if (path == " "){
      path ='index.html';
    }

    var target = $('ul a[href="'+path+'"]');

    target.addClass('active-menu-item');

});