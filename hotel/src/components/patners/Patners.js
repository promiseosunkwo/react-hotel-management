import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import "./patners.css";

const Patners = () => {

    
    return <>

{/* <!-- ================ Partner area ================ --> */}
<div className="partner-section pb-50">
  <div className="container">
    <OwlCarousel items={6} margin={8} loop autoplay={true} className="partner-carousel p-20 rounded bg-gray owl-carousel owl-theme">
      <div className="item">
        {/* <!-- partner item --> */}
        <div className="partner-item"> <img src="img/partner/1.png" className="img-fluid bg-white" alt="" /></div>
        {/* <!-- partner item end --> */}
      </div>
      <div className="item">
        {/* <!-- partner item --> */}
        <div className="partner-item"> <img src="img/partner/2.png" className="img-fluid bg-white" alt="" /></div>
        {/* <!-- partner item end --> */}
      </div>
      <div className="item">
        {/* <!-- partner item --> */}
        <div className="partner-item"> <img src="img/partner/3.png" className="img-fluid bg-white" alt="" /></div>
        {/* <!-- partner item end --> */}
      </div>
      <div className="item">
        {/* <!-- partner item --> */}
        <div className="partner-item"> <img src="img/partner/4.png" className="img-fluid bg-white" alt="" /></div>
        {/* <!-- partner item end --> */}
      </div>
      <div className="item">
        {/* <!-- partner item --> */}
        <div className="partner-item"> <img src="img/partner/5.png" className="img-fluid bg-white" alt="" /></div>
        {/* <!-- partner item end --> */}
      </div>
      <div className="item">
        {/* <!-- partner item --> */}
        <div className="partner-item"> <img src="img/partner/5.png" className="img-fluid bg-white" alt="" /></div>
        {/* <!-- partner item end --> */}
      </div>
      <div className="item">
        {/* <!-- partner item --> */}
        <div className="partner-item"> <img src="img/partner/5.png" className="img-fluid bg-white" alt="" /></div>
        {/* <!-- partner item end --> */}
      </div>
    </OwlCarousel>
  </div>
</div>
{/* <!-- ================ Partner area ================ --> */}

        </>;
}


export default Patners;