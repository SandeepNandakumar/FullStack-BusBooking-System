import { useNavigate } from "react-router-dom";

function SeatSelection() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px" }}>
      <h2>Select Your Seat</h2>

      <div style={{ display: "flex", gap: "10px" }}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </div>

      <br />

      <button onClick={() => navigate("/passenger-details")}>
        Continue
      </button>
    </div>
  );
}

export default SeatSelection;