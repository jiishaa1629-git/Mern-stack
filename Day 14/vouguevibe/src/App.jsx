import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Products from "./Pages/Products";
import "./App.css";

function App() {
  const [serverStatus, setServerStatus] = useState("Checking...");

  useEffect(() => {
    fetch("http://localhost:5000") 
      .then((res) => res.json())
      .then((data) => {
        setServerStatus("🟢 Backend Connected");
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        setServerStatus("🔴 Backend Not Connected");
      });
  }, []);

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <h2 className="logo">VOGUEVIBE</h2>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/login">Login</Link>
            <Link to="/dashboard">Dashboard</Link>
          </div>

          {/* Backend Status */}
          <p className="server-status">{serverStatus}</p>
        </nav>

        <div className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;