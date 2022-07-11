import DetailOverview from "../../components/detailoverview/DetailOverview";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import SearchBanner from "../../components/searchbanner/SearchBanner";
import "./hoteldetail.css";

const HotelDetail = () => {
    return <>

        <Navbar />
        <Header />
        <SearchBanner />
        <DetailOverview />
        <Footer />

    </>;
}

export default HotelDetail;