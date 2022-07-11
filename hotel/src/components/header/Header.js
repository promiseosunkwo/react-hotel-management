import "./header.css"
// import "../../generalcss/general.css";
// import "../../generalcss/helper.css";
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Header = () => {
    return <>

{/* <!-- header lover --> */}
  <div className="header-lover">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-3 col-md-12">
          {/* <!-- brand --> */}
          <div className="logo"><a className="navbar-brand p-0" href="index.html"><img src="img/logo.png" alt="" /></a></div>
          {/* <!-- brand end --> */}
        </div>
        <div className="col-lg-9 col-md-12">
          {/* <!-- header call us --> */}
          <div className="header-call-us">
            <ul>
              <li>
                <div className="iocn-holder"><AccessTimeOutlinedIcon className="icon" /></div>
                <div className="text-holder">
                  <h6>Working Hours</h6>
                  <p className="mb-0">Monday - Sunday: 9.00am to 6.00pm</p>
                </div>
              </li>
              <li>
                <div className="iocn-holder"><PhoneInTalkOutlinedIcon className="icon" /></div>
                <div className="text-holder">
                  <h6>Call Us</h6>
                  <p className="mb-0"><a href="tel:123456789">+011 123 4567</a></p>
                </div>
              </li>
              <li>
                <div className="iocn-holder"><EmailOutlinedIcon className="icon" /></div>
                <div className="text-holder">
                  <h6>Mail Us</h6>
                  <p className="mb-0"><a href="mailto:info@exampal.com">info@exampal.com</a></p>
                </div>
              </li>
            </ul>
          </div>
          {/* <!-- header call us end --> */}
        </div>
      </div>
    </div>
  </div>

  {/* <!-- header lover end --> */}

    </>;
}


export default Header;