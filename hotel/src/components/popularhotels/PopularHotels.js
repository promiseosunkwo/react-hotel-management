import "./popularhotels.css"
// To use owl coursel jquery must be added in the index.html then install owl and i created a seperate owl.js to add jquery code
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  


const PopularHotels = () => {


    return <>


{/* 
<!-- ================ Most popular hotel ================ --> */}
<div className="most-popular-hotel pt-70 pb-70 position-relative">
  <div className="bg-style-1"></div>
  <div className="container">
    {/* <!-- section title --> */}
    <div className="section-title text-center">
      <h2>Most Popular Hotel</h2>
      <span className="dashed-border"></span> </div>
    {/* <!-- section title --> */}
  </div>
  <div className="container-fluid">
    {/* <!-- popular hotel carousel --> */}
    <OwlCarousel items={4} margin={8} loop autoplay ={true}  className="popular-hotel-carousel owl-carousel owl-theme">
      <div className="item">
        {/* <!-- popular hotel box --> */}
        <div className="popular-hotel-box">
          <div className="imege mb-10"><img src="img/popular-hotel/1.jpg" alt="" />
            <div className="black-bg"> <a href=""><LocationOnIcon /> Thailand</a> </div>
          </div>
          <div className="reting"><StarIcon /> <StarIcon /> <StarIcon /> <StarHalfIcon /> <StarOutlineIcon /> </div>
          <h4><a href="">Ansan Hotel</a></h4>
          <div className="price">$100.00 / <span>Per night</span></div>
        </div>
        {/* <!-- popular hotel box end --> */}
      </div>
      <div className="item">
        {/* <!-- popular hotel box --> */}
        <div className="popular-hotel-box">
          <div className="imege mb-10"><img src="img/popular-hotel/2.jpg" alt="" />
            <div className="black-bg"> <a href=""><LocationOnIcon /> Vietnam</a> </div>
          </div>
          <div className="reting"> <StarIcon /> <StarIcon /> <StarIcon /> <StarHalfIcon /> <StarOutlineIcon /> </div>
          <h4><a href="">Fawlty Towers</a></h4>
          <div className="price">$200.00 / <span>Per night</span></div>
        </div>
        {/* <!-- popular hotel box end --> */}
      </div>
      <div className="item">
        {/* <!-- popular hotel box --> */}
        <div className="popular-hotel-box">
          <div className="imege mb-10"><img src="img/popular-hotel/3.jpg" alt="" />
            <div className="black-bg"> <a href=""><LocationOnIcon /> Italy</a> </div>
          </div>
          <div className="reting"> <StarIcon /> <StarIcon /> <StarIcon /> <StarHalfIcon /> <StarOutlineIcon /> </div>
          <h4><a href="">Hotel Valle</a></h4>
          <div className="price">$300.00 / <span>Per night</span></div>
        </div>
        {/* <!-- popular hotel box end --> */}
      </div>
      <div className="item">
        {/* <!-- popular hotel box --> */}
        <div className="popular-hotel-box">
          <div className="imege mb-10"><img src="img/popular-hotel/4.jpg" alt="" />
            <div className="black-bg"> <a href=""><LocationOnIcon /> Mexico</a> </div>
          </div>
          <div className="reting"> <StarIcon /> <StarIcon /> <StarIcon /> <StarHalfIcon /> <StarOutlineIcon /> </div>
          <h4><a href="">Hotel Las Trojes</a></h4>
          <div className="price">$400.00 / <span>Per night</span></div>
        </div>
        {/* <!-- popular hotel box end --> */}
      </div>
      <div className="item">
        {/* <!-- popular hotel box --> */}
        <div className="popular-hotel-box">
          <div className="imege mb-10"><img src="img/popular-hotel/5.jpg" alt="" />
            <div className="black-bg"> <a href=""><LocationOnIcon /> United States</a> </div>
          </div>
          <div className="reting"> <StarIcon /> <StarIcon /> <StarIcon /> <StarHalfIcon /> <StarOutlineIcon /> </div>
          <h4><a href="">Rosen Shingle Creek</a></h4>
          <div className="price">$500.00 / <span>Per night</span></div>
        </div>
        {/* <!-- popular hotel box end --> */}
      </div>
    </OwlCarousel>
    {/* <!-- popular hotel carousel end --> */}
  </div>
</div>
{/* <!-- ================ Most popular hotel end ================ --> */}




    </>;
}


export default PopularHotels;