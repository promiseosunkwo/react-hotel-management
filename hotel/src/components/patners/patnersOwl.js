
export const patnersOwl = () =>{
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" /> 
$('.partner-carousel').owlCarousel({
    loop: true,
    margin: 10,
    dots:false,
    nav: false,
    autoplay:true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2
      },
      767: {
        items: 3
      },
      768: {
        items: 3
      },
      1000: {
        items: 6,
        loop: true
      }
    }
})
}





