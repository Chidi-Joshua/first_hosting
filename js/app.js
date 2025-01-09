$(document).ready(function(){
    //HERO SLIDER
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items:1,
        dots: false,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        navText : ['PREV', 'NEXT'],
        responsive:{
            0:{
                nav: false,
            },
            768: {
                nav: true,
            }
        }
    });

    //PRODUCT SLIDER
    $('#project-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots: false,
        smartSpeed: 1000,
        margin: 24,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        navText: ["PREV", "NEXT"],
        responsive:{
            0:{
              items: 1,
              nav: false,  
            },
            768: {
                items: 2,
            },
            1140: {
               items: 2,
               center: true,     
            }
        }
    });

    // REVIEW SECTION   
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav: false,
        dots:true,
        items: 1,
        smartSpeed: 800,
    });
});

    