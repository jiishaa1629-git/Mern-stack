import { useState } from "react";

function Contact() {

  const [sent,setSent]=useState(false);

  return (
    <section id="contact" style={{textAlign:"center"}}>
      <h2>About my <span className="orange">Works</span></h2>

      <div style={{display:"flex",justifyContent:"center",gap:"30px",marginBottom:"40px"}}>
        <div style={{background:"#0b132b",padding:"25px",borderRadius:"15px",width:"300px"}}>
          <p>"Amazing work and professional delivery!"</p>
        </div>
        <div style={{background:"#0b132b",padding:"25px",borderRadius:"15px",width:"300px"}}>
          <p>"Highly recommend for modern websites."</p>
        </div>
      </div>

      <h3>Contact Me</h3>
      <p>Email: jishajayaprakash336@email.com</p>
      <p>Phone: +91 9876543210</p>

      <button 
        onClick={()=>setSent(true)}
        style={{
          marginTop:"20px",
          padding:"10px 25px",
          background:"#ff6b4a",
          border:"none",
          borderRadius:"20px",
          color:"white"
        }}>
        Send Message
      </button>

      {sent && <p style={{marginTop:"15px",color:"#ff6b4a"}}>Message Sent Successfully!</p>}
    </section>
  );
}

export default Contact;