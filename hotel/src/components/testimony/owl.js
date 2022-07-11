export const TestimonyOwl = () =>{
    /* ----------------------------
    testimonial carousel
    ------------------------------ */

$('.testimonial-carousel').owlCarousel({
	loop: true,
	margin: 15,
	dots:false,
	items: 2,
	nav: true,
	autoplay:true,
	navText : ['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>'],
	responsiveClass: true,
	responsive: {
	  0: {
		items: 1
	  },
	  576: {
		items: 1
	  },
	  767: {
		items: 1
	  },
	  768: {
		items: 2
	  },
	  1000: {
		items: 2
	  }
	}
})
}