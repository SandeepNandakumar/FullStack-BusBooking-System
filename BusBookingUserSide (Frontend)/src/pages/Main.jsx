import "./Main.css";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
function Main() {
    const navigate = useNavigate();
    const [from, setFrom] = useState("");
    const [to, setTo] = useState(""); 
    const [date, setDate] = useState("");
    useEffect(() => {
      const isloggedIn = localStorage.getItem("isLoggedIn");
      if (!isloggedIn) {
        navigate("/login");
      }
    }, []);

  const districts = [
    "Thiruvananthapuram",
    "Kollam",
    "Pathanamthitta",
    "Alappuzha",
    "Kottayam",
    "Idukki",
    "Ernakulam",
    "Thrissur",
    "Palakkad",
    "Malappuram",
    "Kozhikode",
    "Wayanad",
    "Kannur",
    "Kasaragod"
  ];
  const handleSearch = () => {
    if (!from || !to || !date) {
      alert("Please fill all fields");
      return;
    }
    const [year, month, day] = date.split("-");
    const formattedDate = `${day}-${month}-${year}`;
    navigate("/searchresults", { 
      state: { from, to, date:formattedDate } });
  };

  return (
    <div className="home">
      <div className="hero">
        <h1>Book Bus Tickets Easily</h1>
        <p>Travel across Kerala with Komban Holidays</p>

        <div className="search-box">

          {/* FROM */}
          <select value={from} onChange={(e)=> setFrom(e.target.value)}>
            <option value="">Select From</option>
            {districts.map((district, index) => (
              <option key={index} value={district}>{district}</option>
            ))}
          </select>

          {/* TO */}
          <select value={to} onChange={(e)=>setTo(e.target.value)}>
            <option value="">Select To</option>
            {districts.map((district, index) => (
              <option key={index} value={district}>{district}</option>
            ))}
          </select>

          {/* DATE */}
          <input type="date" onChange={(e)=>setDate(e.target.value)} />

          <button className="search-btn" onClick={handleSearch}>
            Search Bus
          </button>

        </div>
      </div>
    </div>
  );
}

export default Main;