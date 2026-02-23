function Home() {

  const nameStyle = {
    fontSize: "55px",
    fontWeight: "bold"
  };

  return (
    <section id="home" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>

      <div>
        <span className="orange">About Me</span>
        <h1 style={nameStyle}> I am a passionate and dedicated B.Tech Computer Science Engineering student</h1>
        <p style={{ margin: "20px 0", color: "#aaa", maxWidth: "500px" }}>
          I build modern, professional and attractive websites with premium UI design.
        </p>

        <button style={{
          background: "#ff6b4a",
          padding: "12px 25px",
          border: "none",
          borderRadius: "25px",
          color: "white"
        }}>
          Contact Me
        </button>
      </div>

      <img 
        src="office woman.jpg"
        alt="profile"
        style={{
          width: "350px",
          borderRadius: "50%",
          border: "8px solid #ff6b4a"
        }}
      />

    </section>
  );
}

export default Home;