import React from "react";
import "./about.css";
import Card1 from "../../Components/Card/card.jsx";  
import img1 from "../../assets/image/full.png";
import img2 from "../../assets/image/dsa.png";
import img3 from "../../assets/image/java.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/src/all";
gsap.registerPlugin(ScrollTrigger);


function About() {

  useGSAP(() => {
    gsap.from(".circle", {
  x:-100,
  duration: 1,
  opacity: 0, 
  stagger:1,    
  scrollTrigger: {
    trigger: ".circle",
    scroll:"body",
    scrub:2,
    start:"top 60%",
    end:"top 30%"
  }
  })
  gsap.from(".line", {
  x:-100,
  duration: 1,
  opacity: 0,  
  stagger:1,
  scrollTrigger: {
    trigger: ".line",
    scroll:"body",
    scrub:2,
    start:"top 60%",
    end:"top 30%"
  }
  })
    gsap.from(".aboutdetails h1", {
  x:-100,
  duration: 1,
  opacity: 0,  
  stagger:1,
  scrollTrigger: {
    trigger: ".aboutdetails h1",
    scroll:"body",
    scrub:2,
    start:"top 60%",
    end:"top 30%"
  }
  })
    gsap.from(".aboutdetails ul", {
  y: 100,
  duration: 1,
  opacity: 0,  
  stagger:1,
  scrollTrigger: {
    trigger: ".aboutdetails ul",
    scroll:"body",
    scrub:2,
    start:"top 60%",
    end:"top 30%"
  }
  })
    gsap.from(".rightabout", {
  x: 100,
  duration: 1,
  opacity: 0,  
  stagger:1,
  scrollTrigger: {
    trigger: ".rightabout",
    scroll:"body",
    scrub:2,
    start:"top 60%",
    end:"top 30%"
  }
  })
});


  return (
    <div id="about">
      <div className="leftabout">
        <div className="circle-container">
          <div className="circle-line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>

        <div className="aboutdetails">
          <div className="personalinfo">
            <h1>Personal Info</h1>
            <ul>
              <li><span>Name:</span> SONU KUMAR GUPTA</li>
              <li><span>Age:</span> 21</li>
              <li><span>Gender:</span> Male</li>
              <li><span>Language:</span> Hindi</li>
            </ul>
          </div>

          <div className="education">
            <h1>Education Info</h1>
            <ul>
              <li><span>Degree:</span> BCA</li>
              <li><span>Branch:</span> Computer Application</li>
              <li><span>Year:</span> 2023–2026</li>
            </ul>
          </div>

          <div className="skills">
            <h1>Skills</h1>
            <ul>
              <li>Full Stack Web Developer</li>
              <li>DSA</li>
              <li>Java</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="rightabout">
        <Card1 title="FULL STACK WEB DEVELOPER" image={img1} />
        <Card1 title="DSA" image={img2} />
        <Card1 title="JAVA" image={img3} />
      </div>
    </div>
  );
}

export default About;
