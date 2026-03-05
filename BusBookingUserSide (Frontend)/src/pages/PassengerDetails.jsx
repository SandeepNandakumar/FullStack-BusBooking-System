import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function PassengerDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const { bus, from, to, date, selectedSeats } = location.state || {};
  const [name, setName] = useState("");
  const [age, setAge] = useState(""); 
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const bookingId = "KH" + Date.now();
  const handlesubmit = () => {
    if(!name || !age || !gender || !phone){
      alert("Please fill all the fields");
      return;
    }
    const booking = {
      bookingId,
      bus,
      from,
      to,
      date,
      seats: selectedSeats,
      name,
      age,
      gender,
      phone
    };
    navigate("/confirmation", { state: { booking } });
  };


  return (
   <div style={{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    minHeight:"100vh"
   }}>
    <div style={{
      width:"400px",
      padding:"20px",
      border:"1px soild #ccc",
      borderRadius:"10px",
      textAlign:"center"
    }}>
      <h2>Passenger Details</h2>
      <input
      type="text"
      placeholder="Name"
      value={name}
      onChange={(e)=>setName(e.target.value)}
      style ={{width:"100%", padding:"10px", margin:"10px 0"}}
      />
      <input
      type="number"
      placeholder="Age"
      value={age}
      onChange={(e)=>setAge(e.target.value)}
      style ={{width:"100%", padding:"10px", margin:"10px 0"}}
      />
      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        style ={{width:"100%", padding:"10px", margin:"10px 0"}}
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <input
      type="tel"
      placeholder="Phone Number"
      value={phone}
      onChange={(e)=>setPhone(e.target.value)}
      style ={{width:"100%", padding:"10px", margin:"10px 0"}}
      />
      <button onClick={handlesubmit} style={{width:"100%", padding:"10px", backgroundColor:"orange", color:"white", border:"none", borderRadius:"5px"}}>Confirm Booking</button>
    </div>
   </div>
  );
}

export default PassengerDetails;