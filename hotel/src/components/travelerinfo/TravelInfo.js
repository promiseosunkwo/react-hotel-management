import "./travelinfo.css";
import PhoneIcon from '@mui/icons-material/Phone';
const TravelInfo = () => {
    return <>
        
        {/* <!-- ================ Traveler Information page ================ --> */}
<div className="detail-page pt-70 pb-40">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 col-md-8 mb-30">
        <form className="form-style-1">
          <div className="row">
            <div className="col-lg-4">
              <div className="form-group">
                <label>Salutation<span className="text-danger">*</span></label>
                <select className="form-control">
                  <option value="0">- Select -</option>
                  <option value="MR">Mr.</option>
                  <option value="MRS">Mrs.</option>
                  <option value="MIS">Miss</option>
                  <option value="MS">Ms.</option>
                  <option value="MST">Master</option>
                </select>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-group">
                <label>First Name<span className="text-danger">*</span></label>
                <input type="text" placeholder="Firstname" className="form-control" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-group">
                <label>Last Name<span className="text-danger">*</span></label>
                <input type="text" placeholder="Lastname" className="form-control" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="form-group">
                <label>Gender<span className="text-danger">*</span></label>
                <select className="form-control">
                  <option value="0">- Select -</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-group">
                <label>Email Address<span className="text-danger">*</span></label>
                <input type="text" placeholder="info@exampal.com" className="form-control" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-group">
                <label>Date of Birth<span className="text-danger">*</span></label>
                <input type="date" id="datepickerdob" style={{color:"lightgray"}} className="form-control" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <label>Country Code<span className="text-danger">*</span></label>
                <select className="form-control">
                  <option value="0">- Select -</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label>Mobile Number<span className="text-danger">*</span></label>
                <input type="text" className="form-control" placeholder="+234 8022 443 66" />
              </div>
            </div>
          </div>
          <button type="submit" className="btn-style-1">Continue with payment</button>
        </form>
      </div>
      <div className="col-lg-4 col-md-4">
        <aside> 
          {/* <!-- help us --> */}
          <div className="help-us mb-30">
            <h3>How can we help you?</h3>
            <p>Lorem ipsum dolor sit ametdf consectetur adipiscing elitdgsh ametdf consectetur piscing.</p>
            <span className="view-detail-btn" style={{cursor:"pointer"}}><PhoneIcon /> Contact Us</span> </div>
          {/* <!-- help us end -->  */}
        </aside>
      </div>
    </div>
  </div>
</div>
{/* <!-- ================ Traveler Information page end ================ -->  */}

    </>;
}


export default TravelInfo;