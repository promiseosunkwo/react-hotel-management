import "./searchbanner.css";

const SearchBanner = () => {
    return <>

{/* <!-- ================ Inner banner ================ --> */}
<div className="inner-banner inner-banner-bg pt-70 pb-40">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-8 col-md-8 mb-30"> 
        {/* <!-- page-title --> */}
        <div className="page-title">
          <h1>Searched Best Result</h1>
        </div>
        {/* <!-- page-title end -->  */}
      </div>
      <div className="col-lg-4 col-md-4 mb-30"> 
        {/* <!-- breadcrumb --> */}
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item active">Hotel Result</li>
        </ol>
        {/* <!-- breadcrumb end -->  */}
      </div>
    </div>
  </div>
</div>
{/* <!-- ================ Inner banner end ================ -->  */}

    </>;
}

export default SearchBanner;