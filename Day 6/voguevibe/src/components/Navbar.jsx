import { Link } from "react-router-dom";

function Navbar({ cartCount, isLoggedIn, handleLogout }) {
  return (
    <nav className="navbar">
      <h2>VogueVibe</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cartCount})</Link>

        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;