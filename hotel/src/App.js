import './App.css';
import Index from './pages/index/Index';
import "bootstrap/dist/css/bootstrap.min.css";
import "./generalcss/general.css";
import "./generalcss/helper.css"; 
import "./generalcss/responsive.css";
import HotelList from './pages/hotel_listing/HotelList';
import HotelDetail from './pages/detailpage/HotelDetail';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import PaymentPage from './pages/paymentpage/PaymentPage';
import TravelerInfo from './pages/travelerinfo/TravelerInfo';
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,

} from "react-router-dom";

function App() {
  return (

    <BrowserRouter>
    {/* <ToastContainer /> */}
      <Routes>

      <Route exact path="/" element={<Index/>} />
      <Route exact path="/login" element={<LoginPage/>} />
      <Route exact path="/register" element={<RegisterPage />} />
      <Route exact path="/detail" element={<HotelDetail />} />
      <Route exact path="/list" element={<HotelList />} />
      <Route exact path="/travelerinfo" element={<PaymentPage />} />
      <Route exact path="/pay" element={<TravelerInfo />} />
      {/* {user ? <Route path="*" element= { <Navigate to="/"  replace />} />  : <Route  path="/login" element={<Login />} />  } */}

  

      </Routes>
    </BrowserRouter>
    
  
  );
}

export default App;
