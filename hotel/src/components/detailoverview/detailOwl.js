<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" /> 

export const detailOwl = () =>{

    // (function($) {
    //     "use strict";

   
    $('.detail-page-gallery-carousel').owlCarousel({
        loop: true,
        margin: 10,
        dots:false,
        nav: true,
        autoplay:true,
        items: 1,
        responsiveClass: true
    })

// })(jQuery);
}