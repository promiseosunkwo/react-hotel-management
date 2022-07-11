import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import SearchBanner from "../../components/searchbanner/SearchBanner";
import Listings from "../../components/searchlistings/Listings";
import "./hotellist.css";

const HotelList = () => {
    return <>
        <Navbar />
        <Header />
        

        <SearchBanner />

   
        <Listings />
       
        

        <Footer />
    </>;
}

export default HotelList;