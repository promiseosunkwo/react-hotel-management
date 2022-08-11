import "./detailoverview.css";
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
// import WarehouseIcon from '@mui/icons-material/Warehouse';
// import CellWifiIcon from '@mui/icons-material/CellWifi';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';



// UNSAFE_componentWillReceiveProps error was first noticed when i wanted to change the text color on the tab to white,
// i added tabclassNane and it appeared but the real cause of the error is the owl carousel library
const DetailOverview = () => {

    
    return <>

    {/* <!-- ================ Detail page ================ --> */}
    <div className="detail-page pt-70 pb-40">
    <div className="container">
    <div className="row">
    <div className="col-lg-8 col-md-8">
    <div className="title">
    <h2>Hilton Miami Downtown</h2>
    <p>1601 biscayne blvd, miami, 33132, florida, united states</p>
    </div>
    {/* <!-- detail page gallery --> */}
    <OwlCarousel items={1} margin={8} loop autoplay={true} className="owl-carousel owl-theme detail-page-gallery-carousel mb-20">
    <figure className="item mb-0"> <img src="img/hotel-detail/img-01.jpg" alt="img description" /> </figure>
    <figure className="item mb-0"><img src="img/hotel-detail/img-02.jpg" alt="img description" /> </figure>
    <figure className="item mb-0"><img src="img/hotel-detail/img-03.jpg" alt="img description" /> </figure>
    </OwlCarousel>
    {/* <!-- detail page gallery end --> 


    <!-- tabs --> */}
    <div className="detail-tabs mb-30">


    {/* <ul className="nav nav-tabs nav-pills nav-justified" id="myTab" role="tablist">
    <li className="nav-item"> <a className="nav-link active" id="tab1-tab" data-toggle="tab" href="#tab1" role="tab" aria-controls="tab1" aria-selected="true">Overview</a> </li>
    <li className="nav-item"> <a className="nav-link" id="tab2-tab" data-toggle="tab" href="#tab2" role="tab" aria-controls="tab2" aria-selected="false">Ameneties</a> </li>
    <li className="nav-item"> <a className="nav-link" id="tab3-tab" data-toggle="tab" href="#tab3" role="tab" aria-controls="tab3" aria-selected="false">Rooms</a> </li>
    <li className="nav-item"> <a className="nav-link" id="tab4-tab" data-toggle="tab" href="#tab4" role="tab" aria-controls="tab4" aria-selected="false">Reviews</a> </li>
    </ul> */}



    <Tabs defaultActiveKey="first" className="tab-content bg-secondary" id="myTabContent">




    <Tab tabClassName="coloredTab" eventKey="first" title="Overview" className="tab-pane fade show active p-15" id="tab1" role="tabpanel" aria-labelledby="tab1-tab"> 
    {/* <!-- overview --> */}
    <h4 className="mb-6">Overview</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipiscing dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>
    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipiscing dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>
    {/* <!-- overview end -->  */}
    </Tab>






    <Tab tabClassName="coloredTab" eventKey="second" title="Amenities" className="tab-pane fade p-15" id="tab2" role="tabpanel" aria-labelledby="tab2-tab"> 
    {/* <!-- ameneties --> */}
    <h4 className="mb-6">Ameneties</h4>
    <div className="row">
    <div className="col-lg-4">
    <ul className="ameneties-list">
    <li><i className="fas fa-wifi pr-6"></i> Free Wi-Fi</li>
    <li><i className="fas fa-bed pr-6"></i> 2 Singal Beads</li>
    <li><i className="fas fa-shower pr-6"></i> Shower and Bathtub</li>
    </ul>
    </div>
    <div className="col-lg-4">
    <ul className="ameneties-list">
    <li><i className="fas fa-paw pr-6"></i> Pet Friendly</li>
    <li><i className="fas fa-wheelchair pr-6"></i> Wheelchair Friendly</li>
    <li><i className="fas fa-dumbbell pr-6"></i> Fitness Center</li>
    </ul>
    </div>
    <div className="col-lg-4">
    <ul className="ameneties-list">
    <li><i className="fas fa-hot-tub pr-6"></i> Hot Water</li>
    <li><i className="fas fa-swimmer pr-6"></i> Swimming Pool</li>
    <li><i className="fas fa-camera-retro pr-6"></i> Security Cameras</li>
    </ul>
    </div>
    </div>
    {/* <!-- ameneties end -->  */}
    </Tab>



    <Tab tabClassName="coloredTab" eventKey="third" title="Rooms" className="tab-pane fade p-15" id="tab3" role="tabpanel" aria-labelledby="tab3-tab"> 
    {/* <!-- rooms --> */}
    <h4 className="mb-6">Rooms</h4>
    <div className="room-type-wrapper"> 
    {/* <!-- list box --> */}
    <div className="list-box mb-30">
    <div className="list-box-img"> <a href="img/rooms/img-big-01.jpg" className="venobox" data-gall="gallery1"> <img src="img/rooms/img-thum-01.jpg" alt="" /> </a> <a href="img/rooms/img-big-02.jpg" className="venobox" data-gall="gallery1"></a> <a href="img/rooms/img-big-03.jpg" className="venobox" data-gall="gallery1"></a> <a href="img/rooms/img-big-04.jpg" className="venobox" data-gall="gallery1"></a>
    <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Select Room</label>
    </div>
    </div>
    <div className="list-box-content">
    <div className="list-box-title">
    <h3>Standard Single Room <span>$240 <em>/ night</em></span></h3>
    <address>
    Max : 2 Persons
    </address>
    </div>
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
    <div className="list-box-img"> <a href="img/rooms/img-big-01.jpg" className="venobox" data-gall="gallery2"> <img src="img/rooms/img-thum-01.jpg" alt="" /></a> <a href="img/rooms/img-big-02.jpg" className="venobox" data-gall="gallery2"></a> <a href="img/rooms/img-big-03.jpg" className="venobox" data-gall="gallery2"></a> <a href="img/rooms/img-big-04.jpg" className="venobox" data-gall="gallery2"></a>
    <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck11" />
    <label className="form-check-label" htmlFor="exampleCheck1">Select Room</label>
    </div>
    </div>
    <div className="list-box-content">
    <div className="list-box-title">
    <h3>Deluxe Room <span>$340 <em>/ night</em></span></h3>
    <address>
    Max : 5 Persons
    </address>
    </div>
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
    <div className="list-box-img"> <a href="img/rooms/img-big-01.jpg" className="venobox" data-gall="gallery3"> <img src="img/rooms/img-thum-01.jpg" alt="" /> </a><a href="img/rooms/img-big-02.jpg" className="venobox" data-gall="gallery3"></a> <a href="img/rooms/img-big-03.jpg" className="venobox" data-gall="gallery3"></a> <a href="img/rooms/img-big-04.jpg" className="venobox" data-gall="gallery3"></a>
    <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck12" />
    <label className="form-check-label" htmlFor="exampleCheck1">Select Room</label>
    </div>
    </div>
    <div className="list-box-content">
    <div className="list-box-title">
    <h3>Signature Room <span>$440 <em>/ night</em></span></h3>
    <address>
    Max : 3 Persons
    </address>
    </div>
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
    <div className="list-box">
    <div className="list-box-img"> <a href="img/rooms/img-big-01.jpg" className="venobox" data-gall="gallery4"> <img src="img/rooms/img-thum-01.jpg" alt="" /></a> <a href="img/rooms/img-big-02.jpg" className="venobox" data-gall="gallery4"></a> <a href="img/rooms/img-big-03.jpg" className="venobox" data-gall="gallery4"></a> <a href="img/rooms/img-big-04.jpg" className="venobox" data-gall="gallery4"></a>
    <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck13" />
    <label className="form-check-label" htmlFor="exampleCheck1">Select Room</label>
    </div>
    </div>
    <div className="list-box-content">
    <div className="list-box-title">
    <h3>Signature Room <span>$540 <em>/ night</em></span></h3>
    <address>
    Max : 4 Persons
    </address>
    </div>
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
    {/* <!-- rooms -->  */}
    </Tab>






    <Tab tabClassName="coloredTab" eventKey="fourth" title="Review" className="tab-pane fade p-15" id="tab4" role="tabpanel" aria-labelledby="tab4-tab"> 
    {/* <!-- reviews --> */}
    <h4 className="mb-6">Reviews</h4>
    {/* <div className="reviews-wrapper"> 
    <!-- review item --> */}
    <div className="media review-item"> <img src="img/Review/1.jpg" className="mr-3" alt="..." />
    <div className="media-body">
    <h5 className="mt-0">John Doe <span>January 01, 2020 - <a href="">Reply</a></span></h5>
    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>
    </div>
    </div>
    {/* <!-- review item end --> 
    <!-- review item --> */}
    <div className="media review-item"> <img src="img/Review/2.jpg" className="mr-3" alt="..." />
    <div className="media-body">
    <h5 className="mt-0">John Doe <span>January 01, 2020 - <a href="">Reply</a></span></h5>
    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>
    </div>
    </div>
    {/* <!-- review item end --> 
    <!-- review item --> */}
    <div className="media review-item"> <img src="img/Review/3.jpg" className="mr-3" alt="..." />
    <div className="media-body">
    <h5 className="mt-0">John Doe <span>January 01, 2020 - <a href="">Reply</a></span></h5>
    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>
    </div>
    </div>
    {/* <!-- review item end -->  */}
    </Tab>
    {/* <!-- reviews end -->  */}
    </Tabs>
    </div>
    </div>
    {/* <!-- tabs end -->  */}
     




      
    <div className="col-lg-4 col-md-4">
    <aside> 
    {/* <!-- filter widget --> */}
    <div className="filter-widget mb-20">
    <div className="accordion filter-accordion" id="filter-widget-accordion4-d">
    <div className="card">
    <div className="card-header" id="headingOne4-d"> <a className="btn btn-link w-100 text-left" href="" data-toggle="collapse" data-target="#collapseOne4-m" aria-expanded="true" aria-controls="collapseOne4-m"> 
    {/* <!-- title widget --> */}
    <div className="filter-title-widget">
    <h3>Hotel Details <i className="fas fa-plus-square float-right"></i> <i className="fas fa-minus-square float-right"></i></h3>
    </div>
    {/* <!-- title widget end -->  */}
    </a> </div>
    <div id="collapseOne4-m" className="collapse show mt-10" aria-labelledby="headingOne4-d" data-parent="#filter-widget-accordion4-d">
    <div className="card-body">
    <ul className="list-inline select-all mb-10">
    <li className="list-inline-item">Hilton Miami Downtown</li>
    </ul>
    <div className="table-responsive">
    <table className="table table-bordered bg-gray w-100 border-0">
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
    <a className="btn-style-1" href="">Book Selected Rooms</a> </div>
    </div>
    </div>
    </div>
    </div>
    {/* <!-- filter widget end --> 
    <!-- help us --> */}
    <div className="help-us mb-30">
    <h3>How can we help you?</h3>
    <p>Lorem ipsum dolor sit ametdf consectetur adipiscing elitdgsh ametdf consectetur piscing.</p>
    <a className="view-detail-btn" href=""><i className="fas fa-phone-alt"></i> Contact Us</a> </div>
    {/* <!-- help us end -->  */}
    </aside>
    </div>
    </div>
    </div>
    {/* </div> */}
    {/* <!-- ================ Detail page end ================ -->  */}
    </div>

    </>;
}

export default DetailOverview;