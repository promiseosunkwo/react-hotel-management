import "./searchlist.css";
import React from 'react'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 


import SearchIcon from '@mui/icons-material/Search';
import RoomIcon from '@mui/icons-material/Room';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HouseIcon from '@mui/icons-material/House';
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BathtubIcon from '@mui/icons-material/Bathtub';
import PoolIcon from '@mui/icons-material/Pool';

export default function () {
  return (
    <>

            <div className="col-lg-9"> 
            {/* <!-- hotel results list --> */}
            <div className="hotel-results-list"> 
            {/* <!-- list box --> */}
            <div className="list-box mb-30">
            <OwlCarousel  items={1} loop autoplay={true} className="owl-carousel list-box-carousel">
            <figure className="item"> <img src="img/listing/featured-img/img-01.jpg" alt="img description" /> </figure>
            <figure className="item"><img src="img/listing/featured-img/img-02.jpg" alt="img description" /> </figure>
            <figure className="item"><img src="img/listing/featured-img/img-03.jpg" alt="img description" /> </figure>
            </OwlCarousel>
            <div className="list-box-content">
            <div className="list-box-title">
            <h3>Resort Terra Paraiso <span>$240 <em>/ night</em></span></h3>
            <address>
            <LocationOnIcon /> Gauravaddo, Opp Lane Of Pizza Hut , Calangute, Bardez Goa
            </address>
            </div>
            <div className="list-box-rating"> <span className="at-stars"> <small> <StarIcon className="starIcon" /> <StarIcon className="starIcon" /> </small></span> <em>1000 review</em> </div>
            <ul className="hotel-featured">
            <li><span><DirectionsCarIcon /> Parking Facility</span></li>
            <li><span><BathtubIcon /> Attached Bathroom</span></li>
            <li><span><HouseIcon /> Daily Housekeeping</span></li>
            <li><span><PoolIcon /> Swimming Pool</span></li>
            </ul>
            <div className="btn-wrapper mt-20 d-inline-block w-100"> <a className="view-detail-btn" href="">View Details</a> <a className="book-now-btn ml-6" href="">Book Now</a> </div>
            </div>
            </div>
            {/* <!-- list box end --> 
            <!-- list box --> */}
            {/* <div className="list-box mb-30">
            <OwlCarousel items={1} loop autoplay={true} className="owl-carousel list-box-carousel">
            <figure className="item"> <img src="img/listing/featured-img/img-04.jpg" alt="img description" /> </figure>
            <figure className="item"><img src="img/listing/featured-img/img-05.jpg" alt="img description" /> </figure>
            <figure className="item"><img src="img/listing/featured-img/img-06.jpg" alt="img description" /> </figure>
            </OwlCarousel>
            <div className="list-box-content">
            <div className="list-box-title">
            <h3>Hotel Sunstar Grand <span>$340 <em>/ night</em></span></h3>
            <address>
            <i className="fas fa-map-marker-alt"></i> Gauravaddo, Opp Lane Of Pizza Hut , Calangute, Bardez Goa
            </address>
            </div>
            <div className="list-box-rating"> <span className="at-stars"> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="far fa-star"></i> </span> <em>1000 review</em> </div>
            <ul className="hotel-featured">
            <li><span><i className="fas fa-car"></i> Parking Facility</span></li>
            <li><span><i className="fas fa-bath"></i> Attached Bathroom</span></li>
            <li><span><i className="fas fa-home"></i> Daily Housekeeping</span></li>
            <li><span><i className="fas fa-swimming-pool"></i> Swimming Pool</span></li>
            </ul>
            <div className="btn-wrapper mt-20 d-inline-block w-100"> <a className="view-detail-btn" href="">View Details</a> <a className="book-now-btn ml-6" href="">Book Now</a> </div>
            </div>
            </div> */}
            {/* <!-- list box end --> 
            <!-- list box --> */}
            {/* <div className="list-box mb-30">
            <OwlCarousel items={1} loop autoplay={true} className="owl-carousel list-box-carousel">
            <figure className="item"> <img src="img/listing/featured-img/img-07.jpg" alt="img description" /> </figure>
            <figure className="item"><img src="img/listing/featured-img/img-08.jpg" alt="img description" /> </figure>
            <figure className="item"><img src="img/listing/featured-img/img-09.jpg" alt="img description" /> </figure>
            </OwlCarousel>
            <div className="list-box-content">
            <div className="list-box-title">
            <h3>Treebo Natraj Yes Please <span>$440 <em>/ night</em></span></h3>
            <address>
            <i className="fas fa-map-marker-alt"></i> Gauravaddo, Opp Lane Of Pizza Hut , Calangute, Bardez Goa
            </address>
            </div>
            <div className="list-box-rating"> <span className="at-stars"> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="far fa-star"></i> </span> <em>1000 review</em> </div>
            <ul className="hotel-featured">
            <li><span><i className="fas fa-car"></i> Parking Facility</span></li>
            <li><span><i className="fas fa-bath"></i> Attached Bathroom</span></li>
            <li><span><i className="fas fa-home"></i> Daily Housekeeping</span></li>
            <li><span><i className="fas fa-swimming-pool"></i> Swimming Pool</span></li>
            </ul>
            <div className="btn-wrapper mt-20 d-inline-block w-100"> <a className="view-detail-btn" href="">View Details</a> <a className="book-now-btn ml-6" href="">Book Now</a> </div>
            </div>
            </div> */}
            {/* <!-- list box end --> 
            <!-- list box --> */}
            {/* <div className="list-box mb-30">
            <OwlCarousel items={1} loop autoplay={true} className="owl-carousel list-box-carousel">
            <figure className="item"> <img src="img/listing/featured-img/img-01.jpg" alt="img description" /> </figure>
            <figure className="item"><img src="img/listing/featured-img/img-02.jpg" alt="img description" /> </figure>
            <figure className="item"><img src="img/listing/featured-img/img-03.jpg" alt="img description" /> </figure>
            </OwlCarousel>
            <div className="list-box-content">
            <div className="list-box-title">
            <h3>Wood Castle Grand <span>$540 <em>/ night</em></span></h3>
            <address>
            <i className="fas fa-map-marker-alt"></i> Gauravaddo, Opp Lane Of Pizza Hut , Calangute, Bardez Goa
            </address>
            </div>
            <div className="list-box-rating"> <span className="at-stars"> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="far fa-star"></i> </span> <em>1000 review</em> </div>
            <ul className="hotel-featured">
            <li><span><i className="fas fa-car"></i> Parking Facility</span></li>
            <li><span><i className="fas fa-bath"></i> Attached Bathroom</span></li>
            <li><span><i className="fas fa-home"></i> Daily Housekeeping</span></li>
            <li><span><i className="fas fa-swimming-pool"></i> Swimming Pool</span></li>
            </ul>
            <div className="btn-wrapper mt-20 d-inline-block w-100"> <a className="view-detail-btn" href="">View Details</a> <a className="book-now-btn ml-6" href="">Book Now</a> </div>
            </div>
            </div> */}
            {/* <!-- list box end -->  */}
            </div>
            </div>
            {/* <!-- hotel results list end --> 
            <!-- pagination --> */}
            {/* <ul className="pagination pagination-box mb-30">
            <li className="page-item"> <a className="page-link" href="#" aria-label="Previous"> <span aria-hidden="true">&laquo;</span> </a> </li>
            <li className="page-item active"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"> <a className="page-link" href="#" aria-label="Next"> <span aria-hidden="true">&raquo;</span> </a> </li>
            </ul> */}
            {/* <!-- pagination end -->  */}
            
  
 
        
    </>
  )
}
