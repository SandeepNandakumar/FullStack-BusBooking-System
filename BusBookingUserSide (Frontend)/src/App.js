import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './Components/Navbar'; 
import Main from './pages/Main'; 
import SearchResult from './pages/SearchResult';
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
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
