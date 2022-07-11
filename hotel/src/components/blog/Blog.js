import "./blog.css";

const Blog = () => {
    return <div>

{/* <!-- ================ Blog area ================ --> */}
<div className="blog-area pt-70 pb-40 position-relative">
  <div className="bg-style-1"></div>
  <div className="container">
    {/* <!-- section title --> */}
    <div className="section-title text-center">
      <h2>Latest News</h2>
      <span className="dashed-border"></span> </div>
    {/* <!-- section title --> */}
    <div className="row">
      <div className="col-lg-4 col-md-6 mb-30">
        {/* <!-- blog box --> */}
        <div className="blog-box shadow">
          <div className="blog_img mb-20"><img src="img/blog/blog-1.jpg" alt="" /></div>
          <div className="blog-des">
            <h6 className="blog_date font-weight-normal text-muted"><span>business</span> January 01, 2020</h6>
            <h5 className="mt-10 mb-6"><a href="#" className="text-dark">The Most Advance Business Plan</a></h5>
            <p className="text-muted">Lorem ipsum dolor sit amet consectetur ipiscing elit amet consectetur piscing elit consectetur adipiscing elit sed et eletum.</p>
            <div className="read_more">
              <div className="blog_border"></div>
              <a href="#" className="text-dark text-uppercase"> Read More</a> </div>
          </div>
        </div>
        {/* <!-- blog box end --> */}
      </div>
      <div className="col-lg-4 col-md-6 mb-30">
        {/* <!-- blog box --> */}
        <div className="blog-box shadow">
          <div className="blog_img mb-20"><img src="img/blog/blog-2.jpg" alt="" /></div>
          <div className="blog-des">
            <h6 className="blog_date font-weight-normal text-muted"><span>business</span> January 01, 2020</h6>
            <h5 className="mt-10 mb-6"><a href="#" className="text-dark">Beautiful Home Page</a></h5>
            <p className="text-muted">Lorem ipsum dolor sit amet consectetur ipiscing elit amet consectetur piscing elit consectetur adipiscing elit sed et eletum.</p>
            <div className="read_more">
              <div className="blog_border"></div>
              <a href="#" className="text-dark text-uppercase"> Read More</a> </div>
          </div>
        </div>
        {/* <!-- blog box end --> */}
      </div>
      <div className="col-lg-4 col-md-6 mb-30">
        {/* <!-- blog box --> */}
        <div className="blog-box shadow">
          <div className="blog_img mb-20"><img src="img/blog/blog-3.jpg" alt="" /></div>
          <div className="blog-des">
            <h6 className="blog_date font-weight-normal text-muted"><span>business</span> January 01, 2020</h6>
            <h5 className="mt-10 mb-6"><a href="#" className="text-dark">Modern Design Concept</a></h5>
            <p className="text-muted">Lorem ipsum dolor sit amet consectetur ipiscing elit amet consectetur piscing elit consectetur adipiscing elit sed et eletum.</p>
            <div className="read_more">
              <div className="blog_border"></div>
              <a href="#" className="text-dark text-uppercase"> Read More</a> </div>
          </div>
        </div>
        {/* <!-- blog box end --> */}
      </div>
    </div>
  </div>
</div>
{/* <!-- ================ Blog area end ================ --> */}

    </div>;
}


export default Blog;