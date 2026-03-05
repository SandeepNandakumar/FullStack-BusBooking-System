import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const handleLogout = () => {

    localStorage.removeItem("isLoggedIn");

    navigate("/login");

    window.location.reload();

  };

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px",
      background: "#ff6600",
      color: "white"
    }}>

      <h2>Komban Holidays</h2>

      <div style={{ display: "flex", gap: "20px" }}>

        {/* Home */}
        {isLoggedIn && (
          <Link to="/main" style={{ color: "white" }}>
            Home
          </Link>
        )}

        {!isLoggedIn && (
          <Link to="/" style={{ color: "white" }}>
            Home
          </Link>
        )}

        {/* When NOT logged in */}
        {!isLoggedIn && (
          <>
            <Link to="/login" style={{ color: "white" }}>Login</Link>
            <Link to="/register" style={{ color: "white" }}>Register</Link>
          </>
        )}

        {/* When logged in */}
        {isLoggedIn && (
          <>
            <Link to="/my-bookings" style={{ color: "white" }}>
              My Bookings
            </Link>

            <button
              onClick={handleLogout}
              style={{
                background: "#ff6600",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer"
              }}
            >
              Logout
            </button>
          </>
        )}

      </div>

    </nav>
  );
}

export default Navbar;