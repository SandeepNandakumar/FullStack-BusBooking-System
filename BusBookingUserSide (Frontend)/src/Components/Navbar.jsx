import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ background: "#ff6b00", padding: "15px" }}>
      <h2 style={{ color: "white" }}>Komban Holidays</h2>

      <Link to="/">Home</Link> |
      <Link to="/search"> Search Bus</Link> |
      <Link to="/login"> Login</Link>
    </nav>
  );
}

export default Navbar;