import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import "./slider.css"
import "../../generalcss/general.css";
import "../../generalcss/helper.css";
import "../../generalcss/responsive.css";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import { useState } from 'react';

const Slider = () => {
  const [openDate, setOpenDate] = useState(false);
  const [bookingDate, setbookingDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  
    return <>
    
{/* // <!-- ================ Slider area ================ --> */}
<div className="slider">
  {/* <!-- search area --> */}
  <div className="search-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-8 col-sm-12 col-12 offset-xl-0 offset-lg-3 offset-sm-0">
          <div className="center-search">
            <h1 className="text-white">Enjoy Your Holiday</h1>
            <p className="text-white">Search and Book Hotel</p>
            <form className="form-style-1">
              <div className="form-group mb-3">
                <input type="text" className="form-control" placeholder="Search City" />
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="form-group mb-3">
                    <div onClick={()=>setOpenDate(!openDate)} className="form-control pb-4" style={{color:"gray", cursor:"pointer"}}>
                       {`${format(bookingDate[0].startDate, "dd/MM/yyyy")} to ${format(bookingDate[0].endDate, "dd/MM/yyyy")} `}
                    </div>
                    {openDate && <DateRange
                        editableDateInputs={true}
                        onChange={item => setbookingDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={bookingDate}
                        className="bookingDate"
                        minDate={new Date()}
                      />}
                  </div>
                </div>
                {/* <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <div className="form-group mb-3">
                    <input type="text" className="form-control" id="check-out" placeholder="Check Out" />
                  </div>
                </div> */}
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <div className="form-group">
                    <select className="form-control mb-3">
                      <option>Adult(s)(18+)</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <div className="form-group">
                    <select className="form-control mb-3">
                      <option>Children(0-17)</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <select className="form-control mb-3">
                  <option>Rooms</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
              <button type="submit" className="btn-style-1 w-100">Search</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- search area end --> */}
  <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel">
    <div className="carousel-inner">
      {/* <!-- slider item --> */}
      <div className="carousel-item active"> <img src="img/slider/slider-1.jpg" alt="" className="img-fluid" /> </div>
      {/* <!-- slider item end --> */}
      {/* <!-- slider item --> */}
      <div className="carousel-item"> <img src="img/slider/slider-2.jpg" alt="" className="img-fluid" /> </div>
      {/* <!-- slider item end --> */}
      {/* <!-- slider item --> */}
      <div className="carousel-item"> <img src="img/slider/slider-3.jpg" alt="" className="img-fluid" /> </div>
      {/* <!-- slider item end --> */}
    </div>
    <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev"> <ChevronLeftOutlinedIcon /></a> <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next"> <ChevronRightOutlinedIcon /></a> </div>
</div>
{/* <!-- ================ Slider area end ================ --> */}
    
    
    </>;
}


export default Slider;



