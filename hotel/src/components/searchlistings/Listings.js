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
// import Modal from 'react-bootstrap/Modal'

// import OwlCarousel from 'react-owl-carousel';  
// import 'owl.carousel/dist/assets/owl.carousel.css';  
// import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import { useLocation } from "react-router-dom";

import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import SearchList from "../searchlist/SearchList";

const Listings = () => {

const location = useLocation();

const [showHotels, setShowHotels] = useState(true);
const [showPrice, setShowPrice] = useState(true);

const [showModal, setShowModal] = useState(false);

const [destination, setDestination] = useState(location.state.destination);
const [adult, setAdult] = useState(location.state.adult);
const [children, setChildren] = useState(location.state.children);
const [rooms, setRooms] = useState(location.state.rooms);
const [bookingDate, setbookingDate] = useState(location.state.bookingDate)

const [openDate, setOpenDate] = useState(false);




// console.log(location);


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

                    <div className="input-section m-2">
                          <label htmlFor="adult"><b>Destination</b></label>
                          <select id="adult" className="modify-input p-2"> 
                          <option>{destination}</option>
                          </select>
                      </div>

                      <div className="input-section m-2">
                          <label htmlFor="adult"><b>Check-in to Check-out</b></label>
                          <div onClick={()=>setOpenDate(!openDate)} className="modify-date-input">{`${format(bookingDate[0].startDate, "dd/MM/yyyy")} to ${format(bookingDate[0].endDate, "dd/MM/yyyy")} `}</div>
                          {openDate && <DateRange
                          editableDateInputs={true}
                          onChange={item => setbookingDate([item.selection])}
                          moveRangeOnFirstSelection={false}
                          ranges={bookingDate}
                          className="booking-Date"
                          minDate={new Date()}
                      />}
                      </div>

                      <div className="input-section m-2">
                          <label htmlFor="adult"><b>Adults</b></label>
                          <input type="number" placeholder={adult} id="adult" className="modify-input" />
                      </div>

                      <div className="input-section m-2">
                          <label htmlFor="children"><b>Children</b></label>
                          <input type="number" placeholder={children} id="children" className="modify-input" />
                      </div>

                      <div className="input-section m-2">
                          <label htmlFor="rooms"><b>Rooms</b></label>
                          <input type="number" placeholder={rooms} id="rooms" className="modify-input" />
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
      <SearchList />
      </div>
      </div>
      </div>
     
{/* <!-- ================ Listing page end ================ -->  */}
    

{/* <!-- ================ Top scroll ================ -->  */}
<a href="#" className="scroll-top">Top</a> 
{/* <!-- ================ Top scroll end ================ -->  */}






    </>;
}


export default Listings;