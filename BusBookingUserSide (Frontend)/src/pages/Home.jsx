import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <div className="card">

        <h1>🚌 Bus Booking</h1>

        <p>Book bus tickets easily across cities</p>

        <Link to="/login">
          <button>Login</button>
        </Link>

        <br /><br />

        <Link to="/register">
          <button>Register</button>
        </Link>

      </div>
    </div>
  );
}

export default Home;