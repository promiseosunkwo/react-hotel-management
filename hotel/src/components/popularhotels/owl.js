
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" /> 

export const myJQuery = () =>{
$('.popular-hotel-carousel').owlCarousel({
    loop: true,
    margin: 15,
    dots:false,
    items: 4,
    nav: true,
    autoplay:true,
    navText : ['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      767: {
        items: 2
      },
      768: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
})
}

          
  



