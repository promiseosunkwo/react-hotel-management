import "./about.css"
import "./venbox"
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';

const About = () => {


return <>

{/* <!-- ================ About area ================ --> */}
<div className="about-area pt-70 pb-60">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 mb-30">
        {/* <!-- about text --> */}
        <div className="about-col">
          <h6>About us</h6>
          <h2>We <span>provide solutions</span> to grow your business</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>
          <a className=" btn-style-1" href="#" role="button">Explore More <i className="fas fa-long-arrow-alt-right pl-6"></i></a> </div>
        {/* <!-- about text end --> */}
      </div>
      <div className="col-lg-6 mb-30">
        {/* <!-- about video --> */}
        <div className="about-video-img-box position-relative rounded"> <img src="img/about-us/about-video-img-1.jpg" alt="" className="img-fluid rounded" />
          <div className="hoverlay d-flex flex-row align-items-center justify-content-center"> <a className="venobox d-inline" data-gall="gall-video" data-autoplay="true" data-vbtype="video" href="https://www.youtube.com/watch?v=668nUCeBHyY&t=28s"><PlayCircleFilledOutlinedIcon className="icon" /></a> </div>
        </div>
        {/* <!-- about video end --> */}
      </div>
    </div>
  </div>
</div>
{/* <!-- ================ About area end ================ --> */}


    </>;
}

export default About;