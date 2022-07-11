import "./populardestination.css";
import ReplyIcon from '@mui/icons-material/Reply';

const PopularDestination = () => {
    return <>

{/* <!-- ================ Popular destinations ================ --> */}
<div className="popular-destinations pt-70 pb-40 position-relative">
  <div className="bg-style-1"></div>
  <div className="container">
    {/* <!-- section title --> */}
    <div className="section-title text-center">
      <h2>Most Popular Destinations</h2>
      <span className="dashed-border"></span> </div>
    {/* <!-- section title --> */}
    <div className="row">
      <div className="col-lg-4 col-md-6 col-sm-6 mb-30">
        {/* <!-- popular destination box --> */}
        <div className="popular-destination-box">
          <div className="img-holder-overlay">
            <div className="img-holder"><img src="img/popular-destination/1.jpg" alt="" /></div>
            <div className="overlay"><a href="#"><ReplyIcon /></a></div>
          </div>
          <div className="title">
            <h3><a href="">Orlando</a></h3>
          </div>
        </div>
        {/* <!-- popular destination box end --> */}
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6 mb-30">
        {/* <!-- popular destination box --> */}
        <div className="popular-destination-box">
          <div className="img-holder-overlay">
            <div className="img-holder"><img src="img/popular-destination/2.jpg" alt="" /></div>
            <div className="overlay"><a href="#"><ReplyIcon /></a></div>
          </div>
          <div className="title">
            <h3><a href="">Miami</a></h3>
          </div>
        </div>
        {/* <!-- popular destination box end --> */}
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6 mb-30">
        {/* <!-- popular destination box --> */}
        <div className="popular-destination-box">
          <div className="img-holder-overlay">
            <div className="img-holder"><img src="img/popular-destination/3.jpg" alt="" /></div>
            <div className="overlay"><a href="#"><ReplyIcon /></a></div>
          </div>
          <div className="title">
            <h3><a href="">Los Angeles</a></h3>
          </div>
        </div>
        {/* <!-- popular destination box end --> */}
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6 mb-30">
        {/* <!-- popular destination box --> */}
        <div className="popular-destination-box">
          <div className="img-holder-overlay">
            <div className="img-holder"><img src="img/popular-destination/4.jpg" alt="" /></div>
            <div className="overlay"><a href="#"><ReplyIcon /></a></div>
          </div>
          <div className="title">
            <h3><a href="">San Diego</a></h3>
          </div>
        </div>
        {/* <!-- popular destination box end --> */}
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6 mb-30">
        {/* <!-- popular destination box --> */}
        <div className="popular-destination-box">
          <div className="img-holder-overlay">
            <div className="img-holder"><img src="img/popular-destination/5.jpg" alt="" /></div>
            <div className="overlay"><a href="#"><ReplyIcon /></a></div>
          </div>
          <div className="title">
            <h3><a href="">Houston</a></h3>
          </div>
        </div>
        {/* <!-- popular destination box end --> */}
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6 mb-30">
        {/* <!-- popular destination box --> */}
        <div className="popular-destination-box">
          <div className="img-holder-overlay">
            <div className="img-holder"><img src="img/popular-destination/6.jpg" alt="" /></div>
            <div className="overlay"><a href="#"><ReplyIcon /></a></div>
          </div>
          <div className="title">
            <h3><a href="">New York</a></h3>
          </div>
        </div>
        {/* <!-- popular destination box end --> */}
      </div>
    </div>
  </div>
</div>
{/* <!-- ================ Popular destinations end ================ --> */}
        
    </>;
}



export default PopularDestination;