import "./downloadapp.css";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const DownloadApp = () => {
    return <>
        {/* <!-- ================ Download app are ================ --> */}
<div className="download-app-area pt-70 pb-40">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-8 mb-30">
        {/* <!-- app text --> */}
        <div className="app-text">
          <h5 className="text-white">Download our app</h5>
          <h2 className="mb-10 text-white">Wow! Get This Templete App For Your Mobile</h2>
          <ul className="text-white">
            <li className="pb-6"><CheckCircleOutlineIcon /> Find nearby hotel in your network with templete</li>
            <li className="pb-6"><CheckCircleOutlineIcon /> Get paperless confirmation</li>
            <li className="pb-6"><CheckCircleOutlineIcon /> Make changes whenever, wherever</li>
            <li className="pb-6"><CheckCircleOutlineIcon /> 24/7 customer service in more than 40 languages</li>
            <li className="pb-6"><CheckCircleOutlineIcon /> No booking or credit card fees</li>
            <li className="pb-6"><CheckCircleOutlineIcon /> No booking or credit card fees</li>
            <li><CheckCircleOutlineIcon /> Add your own reviews and photos</li>
          </ul>
          <div className="app-download-btn mt-20"> <a href="#"><img src="img/appstore-button.png" alt="" /></a> <a href="#"><img src="img/google-play-button.png" alt="" /></a> </div>
        </div>
        {/* <!-- app text end --> */}
      </div>
      <div className="col-lg-6 col-md-6 col-sm-4">
        {/* <!-- app img --> */}
        <div className="app-img"> <img src="img/app-image-1.png" alt="" /> </div>
        {/* <!-- app img end --> */}
      </div>
    </div>
  </div>
</div>
{/* <!-- ================ Download app are end ================ --> */}


    </>;
}


export default DownloadApp;