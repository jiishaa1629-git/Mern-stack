import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Jisha.</div>

      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <button className="nav-btn">Let's Talk</button>
    </nav>
  );
}

export default Navbar;