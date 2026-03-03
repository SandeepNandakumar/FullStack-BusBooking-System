import { useLocation, useNavigate } from "react-router-dom";
function SearchResults() {
  const location = useLocation();
  const navigate = useNavigate();
  const { from, to, date } = location.state || {};
  const Buses=[
    {
      id:1,
      name:"ADHOLOKAM -CRIME BOSS OF DHARAVI",
      departure:"10:00 AM",
      arrival:"2:00 PM",
      price:500
    },
    {
      id:2,
      name:"KAALIYAN-THE CLASSIC CRIMINAL",
      departure:"11:00 AM",
      arrival:"3:00 PM",
      price:450},
      {
        id:3,
        name:"BOMBAY-DARK FUDEL LORD",
        departure:"12:00 PM",
        arrival:"4:00 PM",
        price:600
      },
      {
        id:4,
        name:"DAWOOD-THE RISE OF DON",
        departure:"1:00 PM",
        arrival:"5:00 PM",
        price:550
      },
      {
        id:5,
        name:"AGHORI-THE ANIMAL",
        departure:"2:00 PM",
        arrival:"6:00 PM",
        price:480
      }
  ]
  return (
    <div style={{padding:"30px"}}>
      <h2>Available Buses from {from} to {to} on {date}</h2>
      <div>
        {Buses.map(bus => (
          <div key={bus.id} style={{border:"1px solid black", padding:"10px", margin:"10px 0"}}>
            <h3>{bus.name}</h3>
            <p>Departure: {bus.departure}</p>
            <p>Arrival: {bus.arrival}</p>
            <p>Price: ₹{bus.price}</p>
            <button onClick={()=>navigate("/seat-selection")}>Please select your seat</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;