import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Confirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { booking } = location.state || {};
  if (!booking) {
    return 
      <h2>No Booking Found</h2>;
    }
    const totalPrice = booking.seats.length * booking.bus.price;
    const handleSaveBooking = () => {
      const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
      existingBookings.push(booking);
      localStorage.setItem("bookings", JSON.stringify(existingBookings));
      alert("Booking saved successfully!");
      navigate("/my-bookings");
    };
  return (
    <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      minHeight:"100vh"
    }}>

      <div style={{
        width:"450px",
        padding:"20px",
        border:"1px solid #ccc",
        borderRadius:"10px",
        textAlign:"center"
      }}>

        <h2>Booking Confirmation</h2>

        <h3>Passenger Details</h3>
        <p>Name: {booking.name}</p>
        <p>Age: {booking.age}</p>
        <p>Gender: {booking.gender}</p>
        <p>Phone: {booking.phone}</p>

        <h3>Journey Details</h3>
        <p>Bus: {booking.bus.name}</p>
        <p>From: {booking.from}</p>
        <p>To: {booking.to}</p>
        <p>Date: {booking.date}</p>

        <p>Seats: {booking.seats.join(", ")}</p>

        <h3>Total Price: ₹{totalPrice}</h3>

        <button
          onClick={handleSaveBooking}
          style={{
            padding:"10px 20px",
            background:"orange",
            color:"white",
            border:"none",
            cursor:"pointer",
            marginTop:"15px"
          }}
        >
          Confirm Booking
        </button>

      </div>

    </div>
  );
}

export default Confirmation;