import "./navbar.css"
// import "../../generalcss/general.css";
// import "../../generalcss/helper.css";
// import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/fontawesome-free';
// import "../../generalcss/responsive.css";
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { useState } from "react";



const Navbar = () => {
    // used to show nav dropdown in mobile
    const [show, setShow] = useState(false);
    return <>
        <div className="header">
            
            <div className="wrapper" >
                <div className="container">
                {/* <div className="topContainer"> */}
                      <div className="row d-flex align-items-center">
                        <div className="col-lg-8 col-md-6 col-sm-4 col-2">
                            

                        <nav className="navbar header-navigation navbar-expand-lg p-0" >

                        <div onClick={()=>setShow(!show)} style={{cursor:"pointer"}}  className="navbar-toggler" data-toggle="collapse" data-target="#navbarTheme" aria-controls="navbarTheme" aria-expanded="false" aria-label="Toggle navigation"> <span></span> <span></span><span></span></div>

                            <div className="topBar collapse navbar-collapse" style={show ? {display: "block"} : {display: "none"}}>
                            <ul className="navbar-nav align-items-start align-items-lg-center">
                                <li className="active"><a className="nav-link" href="index.html">Home</a></li>
                                <li><a className="nav-link" href="about.html">About Us</a></li>
                                <li><a className="nav-link" href="gallery.html">Gallery</a></li>
                                <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="#" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Destinations</a>
                                <div className="dropdown-menu" aria-labelledby="dropdown02"> <a className="dropdown-item" href="destinations.html">Destinations</a> <a className="dropdown-item" href="destination-detail.html">Destination Detail</a> </div>
                                </li>
                                <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog</a>
                                <div className="dropdown-menu" aria-labelledby="dropdown04"> <a className="dropdown-item" href="blog.html">Blog</a> <a className="dropdown-item" href="blog-single.html">Blog Singal</a> </div>
                                </li>
                                <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="#" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                                <div className="dropdown-menu" aria-labelledby="dropdown05"> <a className="dropdown-item" href="listing.html">Hotel Listing</a> <a className="dropdown-item" href="hotel-detail.html">Hotel Detail</a> <a className="dropdown-item" href="signin.html">Login</a> <a className="dropdown-item" href="register.html">Register</a> <a className="dropdown-item" href="team.html">Team</a> <a className="dropdown-item" href="testimonial.html">Testimonial</a> <a className="dropdown-item" href="traveler-information.html">Traveler Information</a> <a className="dropdown-item" href="payment-information.html">Payment Information</a> <a className="dropdown-item" href="faq.html">Faq</a> </div>
                                </li>
                                <li><a className="nav-link" href="contact-us.html">Contact Us</a></li>
                            </ul>
                            </div> 
                        </nav>  
                        </div>


                        {/* login/register part of top */}
                        <div className="col-lg-4 col-md-6 col-sm-8 col-10 text-right">
                            <div className="header-right-link">
                                <ul>
                                <li className="pt-1"><a href="signin.html"><ChevronRightOutlinedIcon /> Sign in</a></li>
                                <li className="pt-1"><a href="register.html" className="text-white"><ChevronRightOutlinedIcon /> Register</a></li>
                                {/* <li><a href="contact-us.html" class="header-request text-white">Request a Quote</a></li> */}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    {/* </div> */}

</>   
}

export default Navbar;