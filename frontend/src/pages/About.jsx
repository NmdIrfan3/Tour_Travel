import React, { useEffect, useRef } from "react";
import "../styles/about.css";

const About = () => {
  const paragraphRef = useRef(null);

  useEffect(() => {
    const paragraph = paragraphRef.current;
    if (paragraph) {
      paragraph.classList.add("active");
    }
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="container">
        <img src="" alt="" />
        <h2>About Our Travel World</h2>
        <p ref={paragraphRef}>
          Welcome to <span>TravelWorld,</span> where we turn travel dreams into
          unforgettable experiences.
        </p>
        {/* Rest of your content */}
      </div>
    </section>
  );
};

export default About;
