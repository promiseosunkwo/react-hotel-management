import About from "../../components/about/About";
import Blog from "../../components/blog/Blog";
import DownloadApp from "../../components/downloadapp/DownloadApp";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import HowItWorks from "../../components/howitworks/HowItWorks";
import Navbar from "../../components/navbar/Navbar";
import Patners from "../../components/patners/Patners";
import PopularDestination from "../../components/populardestinations/PopularDestination";
import PopularHotels from "../../components/popularhotels/PopularHotels";
import Slider from "../../components/slider/Slider";
import Testimony from "../../components/testimony/Testimony";

import "./index.css";

const Index = () => {
    return <div className="index">
        <Navbar />
        <Header />

        <Slider />

        <About />

        <PopularHotels /> <br />

        <PopularDestination />

        <Testimony />

        <Blog />

        <DownloadApp />

        <HowItWorks />

        <Patners />

        <Footer />

  
    </div>;
}

export default Index;