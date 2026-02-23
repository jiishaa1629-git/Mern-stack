import { useState } from "react";
import "./Projects.css";

function Projects() {

  const [show, setShow] = useState(false);

  return (
    <section id="projects">
      <h2>My <span className="orange">Services</span></h2>

      <div className="service-grid">

        {["UI/UX Design","Web Design","Web Development"].map((service,i)=>(
          <div className="service-card" key={i}>
            <h3>{service}</h3>

            {show && <p>Professional and modern design solutions tailored for clients.</p>}

            <button onClick={()=>setShow(!show)}>
              {show ? "Show Less" : "Show More"}
            </button>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Projects;