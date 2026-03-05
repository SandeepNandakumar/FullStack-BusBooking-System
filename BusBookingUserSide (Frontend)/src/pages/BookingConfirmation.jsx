import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import jsPDF from "jspdf";
function Confirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { booking } = location.state || {};
  if (!booking) {
    return 
      <h2>Booking not found</h2>
    }
    const totalPrice = booking.seats.length * booking.bus.price;
    const handleSaveBooking = () => {
      const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
      existingBookings.push(booking);
      localStorage.setItem("bookings", JSON.stringify(existingBookings));
      alert("Booking saved successfully!");
      navigate("/my-bookings");
    };
    const downloadTicket = () => {
      const doc = new jsPDF();
      doc.setFontSize(18);
      doc.text("Komban Holidays", 20, 20);
      doc.setFontSize(12);
      doc.text(`Booking ID: ${booking.bookingId}`, 20, 40);
      doc.text(`Name: ${booking.name}`, 20, 50);
      doc.text(`Phone: ${booking.phone}`, 20, 60);
      doc.text(`Bus: ${booking.bus.name}`, 20, 80);
      doc.text(`From: ${booking.from}`, 20, 90);
      doc.text(`To: ${booking.to}`, 20, 100);
      doc.text(`Date: ${booking.date}`, 20, 110);
      doc.text(`Seats: ${booking.seats.join(", ")}`, 20, 120);
      doc.text(`Total Price: ₹${totalPrice}`, 20, 140);
      doc.save(`ticket-${booking.bookingId}.pdf`);
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
        <p>Booking ID: {booking.bookingId}</p>
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
        <br/><br/>
        <button
        onClick={downloadTicket}
        style={{
          padding:"10px 20px",
          background:"green",
          color:"white",
          border:"none",
          cursor:"pointer"
        }}
        >
          Download Ticket
        </button> 

      </div>

    </div>
  );
}

export default Confirmation;