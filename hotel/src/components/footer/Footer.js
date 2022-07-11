import "./footer.css";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Footer = () => {
    return <>

{/* <!-- ================ Footer area ================ --> */}
<footer className="pt-50">
  <div className="footer-top">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-6 mb-30">
          {/* <!-- title --> */}
          <div className="title mb-10">
            <h3>About Us</h3>
          </div>
          {/* <!-- title end -->
          <!-- text --> */}
          <div className="text text-white">
            <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet consectetur scing elit amet consectetur adipiscing elit sed et eletum.</p>
            <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet consectetur scing elit amet.</p>
          </div>
          {/* <!-- end text -->
          <!-- footer social --> */}
          <div className="footer-social"> <a href=""><i className="fab fa-facebook-square"></i></a> <a href=""><i className="fab fa-twitter-square"></i></a> <a href=""><i className="fab fa-linkedin"></i></a> <a href=""><i className="fab fa-pinterest-square"></i></a> <a href=""><i className="fab fa-google-plus-square"></i></a> </div>
          {/* <!-- footer social end --> */}
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6 mb-30">
          {/* <!-- title --> */}
          <div className="title mb-10">
            <h3>Navigation</h3>
          </div>
          {/* <!-- title end -->
          <!-- footer link --> */}
          <ul className="footer-link">
            <li><ChevronRightIcon className="icon" /> <a href="#">Home</a> </li>
            <li><ChevronRightIcon className="icon" /> <a href="#">About Us</a> </li>
            <li><ChevronRightIcon className="icon" /> <a href="#">Services</a> </li>
            <li><ChevronRightIcon className="icon" /> <a href="#">Projects</a> </li>
            <li><ChevronRightIcon className="icon" /> <a href="#">Blog</a> </li>
            <li><ChevronRightIcon className="icon" /> <a href="#">Faq</a> </li>
            <li><ChevronRightIcon className="icon" /> <a href="#">Contact</a> </li>
          </ul>
          {/* <!-- footer link end --> */}
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6 mb-30">
          {/* <!-- title --> */}
          <div className="title mb-10">
            <h3>Recent posts</h3>
          </div>
          {/* <!-- title end -->
          <!-- recent-posts --> */}
          <div className="footer-recent-post">
            {/* <!-- footer recent post item --> */}
            <div className="footer-recent-post-item"> <a href="">
              <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>
              <small><CalendarMonthIcon /> 01 Oct 2020</small></a> </div>
            {/* <!-- footer recent post item end -->
            <!-- footer recent post item --> */}
            <div className="footer-recent-post-item"> <a href="">
              <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>
              <small><CalendarMonthIcon /> 01 Oct 2020</small></a> </div>
            {/* <!-- footer recent post item end -->
            <!-- footer recent post item --> */}
            <div className="footer-recent-post-item"> <a href="">
              <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>
              <small><CalendarMonthIcon /> 01 Oct 2020</small></a> </div>
            {/* <!-- footer recent post item end --> */}
          </div>
          {/* <!-- recent-posts end --> */}
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6 mb-30">
          {/* <!-- title --> */}
          <div className="title mb-10">
            <h3>Newsletter</h3>
          </div>
          {/* <!-- title end -->
          <!-- footer newsletter text --> */}
          <div className="footer-newsletter-text">
            {/* <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet consectetur scing elit sed et eletum.</p> */}
          </div>
          {/* <!-- footer newsletter text end -->
          <!-- footer newsletter form --> */}
          <div className="footer-newsletter-form">
            <form>
              <input placeholder="Email Adress..." type="text" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
          {/* <!-- footer newsletter form end --> */}
        </div>
      </div>
    </div>
  </div>
  {/* <!-- footer copyright --> */}
  <div className="copyright text-center mt-20">© <span className="current-year"></span> All Rights Reserved.</div>
  {/* <!-- footer copyright end --> */}
</footer>
{/* <!-- ================ Footer area end ================ --> */}

{/* <!-- ================ Top scroll ================ --> */}
<a href="#" className="scroll-top">Top</a>
{/* <!-- ================ Top scroll end ================ --> */}


        </>;
}


export default Footer;