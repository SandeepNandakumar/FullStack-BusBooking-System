import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SeatSelection() {
  const navigate = useNavigate();
  const location = useLocation();
  const { bus, from, to, date } = location.state || {};
  const handlecontinue = () => {
    if(selectedSeats.length === 0){
      alert("Please select at least one seat");
      return;
    }
    navigate("/passenger-details",{
      state:{
        bus,
        from,
        to,
        date,
        selectedSeats
      }
    });
  };

  const seats = Array.from({ length: 20 }, (_, i) => i + 1);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh"
    }}>

      <div style={{
        width: "500px",
        textAlign: "center",
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "10px"
      }}>

        <h2>Please select your seat</h2>

        <p>Bus: {bus?.name}</p>
        <p>From: {from}</p>
        <p>To: {to}</p>
        <p>Date: {date}</p>

        <h3>Select Seat</h3>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,60px)",
          gap: "10px",
          marginTop: "20px",
          justifyContent: "center"
        }}>
          {seats.map(seat => (
            <div
              key={seat}
              onClick={() => handleSeatClick(seat)}
              style={{
                padding: "15px",
                border: "1px solid black",
                textAlign: "center",
                cursor: "pointer",
                backgroundColor: selectedSeats.includes(seat) ? "green" : "white"
              }}
            >
              {seat}
            </div>
          ))}
        </div>

        <h3 style={{ marginTop: "20px" }}>
          Selected Seats: {selectedSeats.length > 0 ? selectedSeats.join(", ") : "None"}
        </h3>

        <h3>Total Price: ₹{selectedSeats.length * (bus?.price || 0)}</h3>

         <button
      onClick={handlecontinue}
      style={{
        marginTop:"20px",
        padding:"10px 20px",
        backgroundColor:"orange",
        border:"none",
        cursor:"pointer"
      }}
      >Confirm Booking</button>

      </div>
     

    </div>
  );
}

export default SeatSelection;