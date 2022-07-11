export const ListOwl = () =>{
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" /> 
    /* ----------------------------
    list box carousel
    ------------------------------ */
	
$('.list-box-carousel').owlCarousel({
	loop: true,
	margin: 10,
	dots:false,
	nav: true,
	autoplay:true,
	items: 1,
	responsiveClass: true,
	responsive: {
	  0: {
		items: 1
	  },
	  767: {
		items: 2
	  },
	  768: {
		items: 1
	  },
	  1000: {
		items: 1,
		loop: true
	  }
	}
})

}