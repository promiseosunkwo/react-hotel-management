import "./listings.css";
import SearchIcon from '@mui/icons-material/Search';
import RoomIcon from '@mui/icons-material/Room';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HouseIcon from '@mui/icons-material/House';
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BathtubIcon from '@mui/icons-material/Bathtub';
import PoolIcon from '@mui/icons-material/Pool';
import PhoneIcon from '@mui/icons-material/Phone';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { useState } from "react";
import Modal from 'react-bootstrap/Modal'

import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 



const Listings = () => {

const [showHotels, setShowHotels] = useState(true);
const [showPrice, setShowPrice] = useState(true);

const [showModal, setShowModal] = useState(false);




    return <>

    

{/* <!-- ================ Listing page ================ --> */}
<div className="listing-page pt-70 pb-40">
  <div className="container">
    <div className="row">
      <div className="col-lg-3">
        <aside> 
          {/* <!-- sidebar --> */}
          <div className="desktop-filter-sidebar"> 
            {/* <!-- filter widget --> */}
            <div className="filter-widget mb-20">
              <div className="accordion filter-accordion" id="filter-widget-accordion4-d">
                <div className="card">
                  <div className="card-header" id="headingOne4-d">  
                    {/* <!-- title widget --> */}
                    <div className="filter-title-widget">
                      <h3>Hotels 
                        
                        {showHotels ? 
                       <IndeterminateCheckBoxIcon onClick={()=>setShowHotels(!showHotels)} style={{cursor:"pointer"}} /> :
                       <AddBoxIcon onClick={()=>setShowHotels(!showHotels)} style={{cursor:"pointer"}} /> 
                        }
                       </h3>
                    </div>
                    {/* <!-- title widget end -->  */}
                </div>
                  <div className="collapse show mt-10" style={showHotels ? {display:"block"} : {display:"none"}} aria-labelledby="headingOne4-d" data-parent="#filter-widget-accordion4-d">
                    <div className="card-body">
                      <ul className="list-inline select-all mb-10">
                        <li className="list-inline-item">4 Hotels on screen</li>
                      </ul>
                      <div className="table-responsive">
                        <table className="table table-bordered bg-gray w-100 border-0">
                            {/* <thead>
                            </thead> */}
                        <tbody>
                          <tr>
                            <td>Check In</td>
                            <td>Jan 01, 2020 Wed</td>
                          </tr>
                          <tr>
                            <td>Check Out</td>
                            <td>Jan 01, 2020 Fri</td>
                          </tr>
                          <tr>
                            <td>Room 1</td>
                            <td>1  Adult(s)</td>
                          </tr>
                        </tbody>
                        </table>
                      </div>
                      <button className="btn-style-1" onClick={()=>setShowModal(true)} style={{cursor:"pointer"}}><SearchIcon /> Modify Search </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- filter widget end --> 
            <!-- filter widget --> */}
            <div className="filter-widget mb-20">
              <div className="accordion filter-accordion" id="filter-widget-accordion-d">
                <div className="card">
                  <div className="card-header" id="headingOne-d"> 
                    {/* <!-- title widget --> */}
                    <div className="filter-title-widget">
                      <h3>Price 
                      {showPrice ? 
                       <IndeterminateCheckBoxIcon onClick={()=>setShowPrice(!showPrice)} style={{cursor:"pointer"}} /> :
                       <AddBoxIcon onClick={()=>setShowPrice(!showPrice)} style={{cursor:"pointer"}} /> 
                        }
                      </h3>
                    </div>
                    {/* <!-- title widget end -->  */}
                    </div>
                  <div style={showPrice ? {display:"block"} : {display:"none"}} className="collapse show mt-10" aria-labelledby="headingOne-d" data-parent="#filter-widget-accordion-d">
                    <div className="card-body">
                      <select className="form-control">
                        <option>$100 - $200</option>
                        <option>$200 - $300</option>
                        <option>$300 - $400</option>
                        <option>$400 - $500</option>
                        <option>$500 - $600</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- filter widget end --> 
            <!-- filter widget --> */}
            <div className="filter-widget mb-20">
              <div className="accordion filter-accordion" id="filter-widget-accordion2-d">
                <div className="card">
                  <div className="card-header" id="headingOne2-d"> <a className="btn btn-link w-100 text-left" href="" data-toggle="collapse" data-target="#collapseOne2-m" aria-expanded="true" aria-controls="collapseOne2-m"> 
                    {/* <!-- title widget --> */}
                    <div className="filter-title-widget">
                      <h3>Star Rating <i className="fas fa-plus-square float-right"></i> <i className="fas fa-minus-square float-right"></i></h3>
                    </div>
                    {/* <!-- title widget end -->  */}
                    </a> </div>
                  <div id="collapseOne2-m" className="collapse show mt-10" aria-labelledby="headingOne2-d" data-parent="#filter-widget-accordion2-d">
                    <div className="card-body">
                      <ul className="list-inline select-all mb-10">
                        <li className="list-inline-item"> <a href="">Select All</a> </li>
                        <li className="list-inline-item"><a href="">Clear</a></li>
                      </ul>
                      <div className="filter-checkbox-widget">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" />
                          <label className="form-check-label"> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <small>(5)</small> </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" />
                          <label className="form-check-label"> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="far fa-star"></i> <small>(4)</small> </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" />
                          <label className="form-check-label"> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="far fa-star"></i> <i className="far fa-star"></i> <small>(3)</small> </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" />
                          <label className="form-check-label"> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="far fa-star"></i> <i className="far fa-star"></i> <i className="far fa-star"></i> <small>(2)</small> </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" />
                          <label className="form-check-label"> <i className="fas fa-star"></i> <i className="far fa-star"></i> <i className="far fa-star"></i> <i className="far fa-star"></i> <i className="far fa-star"></i> <small>(1)</small> </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- filter widget end --> 
            <!-- filter widget --> */}
            <div className="filter-widget mb-20">
              <div className="accordion filter-accordion" id="filter-widget-accordion3-d">
                <div className="card">
                  <div className="card-header" id="headingOne3-d"> <a className="btn btn-link w-100 text-left" href="" data-toggle="collapse" data-target="#collapseOne3-m" aria-expanded="true" aria-controls="collapseOne3-m"> 
                    {/* <!-- title widget --> */}
                    <div className="filter-title-widget">
                      <h3>Area and Direction <i className="fas fa-plus-square float-right"></i> <i className="fas fa-minus-square float-right"></i></h3>
                    </div>
                    {/* <!-- title widget end -->  */}
                    </a> </div>
                  <div id="collapseOne3-m" className="collapse show mt-10" aria-labelledby="headingOne3-d" data-parent="#filter-widget-accordion3-d">
                    <div className="card-body">
                      <ul className="list-inline select-all mb-10">
                        <li className="list-inline-item"> <a href="">Select All</a> </li>
                        <li className="list-inline-item"><a href="">Clear</a></li>
                      </ul>
                      <div className="filter-checkbox-widget">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" />
                          <label className="form-check-label"> Resort <small>(2)</small> </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" />
                          <label className="form-check-label"> West <small>(3)</small> </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" />
                          <label className="form-check-label"> Downtown <small>(1)</small> </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" />
                          <label className="form-check-label"> South <small>(2)</small> </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- filter widget end --> 
            <!-- help us --> */}
            <div className="help-us mb-30">
              <h3>How can we help you?</h3>
              <p>Lorem ipsum dolor sit ametdf consectetur adipiscing elitdgsh ametdf consectetur piscing.</p>
              <span className="view-detail-btn" href=""><PhoneIcon /> Contact Us</span> </div>
            {/* <!-- help us end -->  */}
          </div>
          {/* <!-- sidebar end -->  */}
        </aside>
      </div>
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
          <div className="list-box mb-30">
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
          </div>
          {/* <!-- list box end --> 
          <!-- list box --> */}
          <div className="list-box mb-30">
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
          </div>
          {/* <!-- list box end --> 
          <!-- list box --> */}
          <div className="list-box mb-30">
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
          </div>
          {/* <!-- list box end -->  */}
        </div>
        {/* <!-- hotel results list end --> 
        <!-- pagination --> */}
        <ul className="pagination pagination-box mb-30">
          <li className="page-item"> <a className="page-link" href="#" aria-label="Previous"> <span aria-hidden="true">&laquo;</span> </a> </li>
          <li className="page-item active"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item"> <a className="page-link" href="#" aria-label="Next"> <span aria-hidden="true">&raquo;</span> </a> </li>
        </ul>
        {/* <!-- pagination end -->  */}
      </div>
    </div>
  </div>
</div>
{/* <!-- ================ Listing page end ================ -->  */}
    

{/* <!-- ================ Top scroll ================ -->  */}
<a href="#" className="scroll-top">Top</a> 
{/* <!-- ================ Top scroll end ================ -->  */}





{/* <!-- Modify search modal --> */}
<Modal className="modal fade" show={showModal} tabindex="-1" role="dialog" aria-labelledby="modify-search-Modal" aria-hidden="true">
  <div className="modal-dialog modal-lg" role="document">
    <div className="modal-content">
      <Modal.Header className="modal-header">
        <h5 className="modal-title" id="modify-search-Modal1">Modify Search</h5>
        <button type="button" className="close" onClick={()=>setShowModal(false)} > <span aria-hidden="true">&times;</span> </button>
      </Modal.Header>
      <Modal.Body className="modal-body">
        <form className="form-style-1">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 mb-1">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search City" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 mb-1">
              <div className="form-group">
                <input type="text" className="form-control" id="check-in" placeholder="Check In" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 mb-1">
              <div className="form-group">
                <input type="text" className="form-control" id="check-out" placeholder="Check Out" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 mb-1">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Hotel" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 mb-1">
              <div className="form-group">
                <select className="form-control">
                  <option>Near Area</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 mb-1">
              <div className="form-group">
                <select className="form-control">
                  <option>Hotel className</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 mb-1">
              <div className="form-group">
                <select className="form-control">
                  <option>Rooms</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6">
              <div className="form-group">
                <select className="form-control">
                  <option>Adult(s)(18+)</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 mb-1">
              <div className="form-group">
                <select className="form-control">
                  <option>Children(0-17)</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            </div>
          </div>
          <button className="btn-style-1 w-100">Search</button>
        </form>
      </Modal.Body>
    </div>
  </div>
</Modal>
{/* <!-- Modify search modal end -->  */}
    
    </>;
}


export default Listings;