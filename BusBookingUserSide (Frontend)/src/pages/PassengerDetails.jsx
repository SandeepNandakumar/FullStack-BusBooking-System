import { useNavigate } from "react-router-dom";

function PassengerDetails() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px" }}>
      <h2>Passenger Details</h2>

      <input type="text" placeholder="Full Name" />
      <input type="number" placeholder="Age" />

      <br />

      <button onClick={() => navigate("/confirmation")}>
        Confirm Booking
      </button>
    </div>
  );
}

export default PassengerDetails;