function Dashboard() {
  return (
    <div>
      <h2>Welcome Back 👋</h2>

      <div style={{
        marginTop: "30px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
        gap: "20px"
      }}>
        <div style={{ background:"#1a1a1a", padding:"20px", borderRadius:"15px" }}>
          <h3>Total Orders</h3>
          <p>12</p>
        </div>

        <div style={{ background:"#1a1a1a", padding:"20px", borderRadius:"15px" }}>
          <h3>Wishlist</h3>
          <p>5 Items</p>
        </div>

        <div style={{ background:"#1a1a1a", padding:"20px", borderRadius:"15px" }}>
          <h3>Cart Items</h3>
          <p>3 Items</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;