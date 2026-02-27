function Home() {
  return (
    <div>
      <div style={{
        height: "70vh",
        background: "linear-gradient(to right,#000000,#1a1a1a)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
      }}>
        <h1 style={{
          fontSize: "60px",
          background: "linear-gradient(45deg,#ff4da6,#ff66cc)",
          WebkitBackgroundClip: "text",
          color: "transparent"
        }}>
          VOGUEVIBE
        </h1>
        <p style={{ fontSize: "20px", marginTop: "10px" }}>
          Discover Premium Fashion Trends
        </p>
      </div>

      <div style={{ marginTop: "50px", textAlign: "center" }}>
        <h2>🔥 Trending Collections</h2>
        <p style={{ marginTop: "10px", color: "#ccc" }}>
          Explore curated outfits for every mood and season.
        </p>
      </div>
    </div>
  );
}

export default Home;