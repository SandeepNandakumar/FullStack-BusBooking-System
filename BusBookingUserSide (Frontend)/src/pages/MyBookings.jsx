import { useEffect,useState } from "react";
function MyBookings() {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
        setBookings(storedBookings);
    }, []);
    return(
         <div style={{
      display:"flex",
      justifyContent:"center",
      minHeight:"100vh",
      paddingTop:"40px"
    }}>

      <div style={{width:"600px"}}>

        <h2 style={{textAlign:"center"}}>My Bookings</h2>

        {bookings.length === 0 ? (
          <p style={{textAlign:"center"}}>No bookings found</p>
        ) : (

          bookings.map((booking, index) => (

            <div
              key={index}
              style={{
                border:"1px solid #ccc",
                padding:"15px",
                margin:"15px 0",
                borderRadius:"8px"
              }}
            >

              <h3>{booking.bus.name}</h3>

              <p><b>Booking ID:</b> {booking.bookingId}</p>

              <p><b>Passenger:</b> {booking.name}</p>

              <p>
                <b>Route:</b> {booking.from} → {booking.to}
              </p>

              <p><b>Date:</b> {booking.date}</p>

              <p><b>Seats:</b> {booking.seats.join(", ")}</p>

              <p><b>Phone:</b> {booking.phone}</p>

              <p>
                <b>Total Price:</b> ₹{booking.seats.length * booking.bus.price}
              </p>

            </div>

          ))

        )}

      </div>

    </div>
  );
}

export default MyBookings;
    