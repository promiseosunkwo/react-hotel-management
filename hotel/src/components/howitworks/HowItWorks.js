import "./howitworks.css";

const HowItWorks = () => {
    return <>

{/* <!-- ================ How it works ================ --> */}
<div className="how-it-works pt-70 pb-40 position-relative">
  <div className="bg-style-1"></div>
  <div className="container">
    {/* <!-- section title --> */}
    <div className="section-title text-center">
      <h2>How it Works</h2>
      <span className="dashed-border"></span> </div>
    {/* <!-- section title --> */}
    <div className="row">
      <div className="col-lg-4 col-md-4 mb-30">
        {/* <!-- how it work box --> */}
        <div className="how-it-work-box text-center">
          <div className="icon mb-15"><img src="img/icon/1.png" alt="" /></div>
          <h4 className="mb-10">Search Multiple Destinations</h4>
          <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum.</p>
        </div>
        {/* <!-- how it work box end --> */}
      </div>
      <div className="col-lg-4 col-md-4 mb-30">
        {/* <!-- how it work box --> */}
        <div className="how-it-work-box text-center">
          <div className="icon mb-15"><img src="img/icon/2.png" alt="" /></div>
          <h4 className="mb-10">Find the Lowest Hotel Prices</h4>
          <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum.</p>
        </div>
        {/* <!-- how it work box end --> */}
      </div>
      <div className="col-lg-4 col-md-4 mb-30">
        {/* <!-- how it work box --> */}
        <div className="how-it-work-box text-center">
          <div className="icon mb-15"><img src="img/icon/3.png" alt="" /></div>
          <h4 className="mb-10">Find the Right Hotel for You</h4>
          <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum.</p>
        </div>
        {/* <!-- how it work box end --> */}
      </div>
    </div>
  </div>
</div>
{/* <!-- ================ How it works end ================ --> */}
    </>;
}

export default HowItWorks;