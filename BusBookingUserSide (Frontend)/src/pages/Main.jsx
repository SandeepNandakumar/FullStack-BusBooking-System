import "./Main.css";
import { useNavigate } from "react-router-dom";

function Main() {
    const navigate = useNavigate();

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

  return (
    <div className="home">
      <div className="hero">
        <h1>Book Bus Tickets Easily</h1>
        <p>Travel across Kerala with Komban Holidays</p>

        <div className="search-box">

          {/* FROM */}
          <select>
            <option>Select From</option>
            {districts.map((district, index) => (
              <option key={index}>{district}</option>
            ))}
          </select>

          {/* TO */}
          <select>
            <option>Select To</option>
            {districts.map((district, index) => (
              <option key={index}>{district}</option>
            ))}
          </select>

          {/* DATE */}
          <input type="date" />

          <button className="search-btn" onClick={()=>navigate("/searchresults")}>
            Search Bus
          </button>

        </div>
      </div>
    </div>
  );
}

export default Main;