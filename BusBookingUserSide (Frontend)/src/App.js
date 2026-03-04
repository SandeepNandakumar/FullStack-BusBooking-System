import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './Components/Navbar'; 
import Main from './pages/Main'; 
import SearchResults from './pages/SearchResult';
import SeatSelection from './pages/SeatSelection';
import PassengerDetails from './pages/PassengerDetails';
import Confirmation from './pages/BookingConfirmation';
import MyBookings from './pages/MyBookings';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/searchresults" element={<SearchResults />} />
        <Route path="/seat-selection" element={<SeatSelection />} />
        <Route path="/passenger-details" element={<PassengerDetails />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
