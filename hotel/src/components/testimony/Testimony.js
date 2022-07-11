import "./testimony.css";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 


const Testimony = () => {

    return <>

{/* <!-- ================ Testimonials ================ --> */}
<div className="testimonials-area testimonial-bg  pt-70 pb-70">
  <div className="container">
    <OwlCarousel items={2} margin={8} loop autoplay={true} className="testimonial-carousel owl-carousel owl-theme">
      <div className="item">
        {/* <!-- testimonial box --> */}
        <div className="testimonial-box position-relative shadow rounded">
          <p className="text-muted border-bottom font-italic pb-3">" Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum orem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum. "</p>
          <div className="reviewer d-inline-block"> <img src="img/testimonial/01.jpg" className="float-left mr-3 rounded" alt="" />
            <div className="content d-block overflow-hidden">
              <h4 className="name mb-0 text-uppercase">Kevin Marthin</h4>
              <small className="designation text-muted">Developer</small> </div>
          </div>
          <div className="quote-icon"><FormatQuoteIcon /></div>
        </div>
        {/* <!-- testimonial box end --> */}
      </div>
      <div className="item">
        {/* <!-- testimonial box --> */}
        <div className="testimonial-box position-relative shadow rounded">
          <p className="text-muted border-bottom font-italic pb-3">" Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum orem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum. "</p>
          <div className="reviewer d-inline-block"> <img src="img/testimonial/02.jpg" className="float-left mr-3 rounded" alt="" />
            <div className="content d-block overflow-hidden">
              <h4 className="name mb-0 text-uppercase">Joe Gabriel</h4>
              <small className="designation text-muted">Designer</small> </div>
          </div>
          <div className="quote-icon"><FormatQuoteIcon /></div>
        </div>
        {/* <!-- testimonial box end --> */}
      </div>
      <div className="item">
        {/* <!-- testimonial box --> */}
        <div className="testimonial-box position-relative shadow rounded">
          <p className="text-muted border-bottom font-italic pb-3">" Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum orem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum. "</p>
          <div className="reviewer d-inline-block"> <img src="img/testimonial/03.jpg" className="float-left mr-3 rounded" alt="" />
            <div className="content d-block overflow-hidden">
              <h4 className="name mb-0 text-uppercase">Join Mansoor</h4>
              <small className="designation text-muted">Support-Marketing</small> </div>
          </div>
          <div className="quote-icon text-white"><FormatQuoteIcon /></div>
        </div>
        {/* <!-- testimonial box end --> */}
      </div>
    </OwlCarousel>
  </div>
</div>
{/* <!-- ================ Testimonials end ================ --> */}


    </>;
}

export default Testimony;