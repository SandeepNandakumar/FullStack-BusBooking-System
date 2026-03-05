import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SeatSelection() {

  const navigate = useNavigate();
  const location = useLocation();
  const { bus, from, to, date } = location.state || {};

  const seats = Array.from({ length: 20 }, (_, i) => i + 1);

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);

  useEffect(() => {

    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    const booked = bookings
      .filter(b => b.bus?.name === bus?.name)
      .flatMap(b => b.seats);

    setBookedSeats(booked);

  }, [bus]);

  const handleSeatClick = (seat) => {

    if (bookedSeats.includes(seat)) {
      return;
    }

    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }

  };

  const handleContinue = () => {

    if (selectedSeats.length === 0) {
      alert("Please select at least one seat");
      return;
    }

    navigate("/passenger-details", {
      state: {
        bus,
        from,
        to,
        date,
        selectedSeats
      }
    });

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

        {/* Seat Legend */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "10px"
        }}>

          <div style={{display:"flex",alignItems:"center",gap:"5px"}}>
            <div style={{
              width:"15px",
              height:"15px",
              background:"white",
              border:"1px solid black"
            }}></div>
            <span>Available</span>
          </div>

          <div style={{display:"flex",alignItems:"center",gap:"5px"}}>
            <div style={{
              width:"15px",
              height:"15px",
              background:"green"
            }}></div>
            <span>Selected</span>
          </div>

          <div style={{display:"flex",alignItems:"center",gap:"5px"}}>
            <div style={{
              width:"15px",
              height:"15px",
              background:"red"
            }}></div>
            <span>Booked</span>
          </div>

        </div>

        {/* Seat Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(5,60px)",
          gap: "10px",
          marginTop: "20px",
          justifyContent: "center"
        }}>

          {seats.map((seat, index) => {

            const isAisle = (index % 4 === 2);

            return (
              <>
                {isAisle && <div key={"aisle" + seat}></div>}

                <div
                  key={seat}
                  onClick={() => handleSeatClick(seat)}
                  style={{
                    padding: "15px",
                    border: "1px solid black",
                    textAlign: "center",
                    cursor: bookedSeats.includes(seat) ? "not-allowed" : "pointer",
                    backgroundColor:
                      bookedSeats.includes(seat)
                        ? "red"
                        : selectedSeats.includes(seat)
                        ? "green"
                        : "white"
                  }}
                >
                  {seat}
                </div>
              </>
            );
          })}

        </div>

        <h3 style={{ marginTop: "20px" }}>
          Selected Seats: {selectedSeats.length > 0 ? selectedSeats.join(", ") : "None"}
        </h3>

        <h3>Total Price: ₹{selectedSeats.length * (bus?.price || 0)}</h3>

        <button
          onClick={handleContinue}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "orange",
            border: "none",
            cursor: "pointer"
          }}
        >
          Continue Booking
        </button>

      </div>

    </div>
  );
}

export default SeatSelection;