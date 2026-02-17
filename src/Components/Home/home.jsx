import React from 'react'
import "./home.css"
import Man from "../../assets/image/sonuv.jpg";
import TypingEffect from 'react-typing-effect';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";


function home() {
  useGSAP(() => {
    let tl1 = gsap.timeline();
    tl1.from(".line1", {
      y: 80,
      direction: 1,
      opacity: 0
    })
    tl1.from(".line2", {
      y: 80,
      direction: 1,
      opacity: 0
    })
    tl1.from(".line3", {
      y: 80,
      direction: 1,
      opacity: 0
    })
    gsap.from(".Righthome img", {
      x: 200,
      direction: 1,
      opacity: 0
    })
  })
  return (
    <div id="home">
      <div className="Lefthome">
        <div className="homedetails">
          <div className="line1">I'M</div>
          <div className="line2"> SONU K. GUPTA</div>
          <div className="line3">WEB DEVELOPER</div>
          <div className="home-buttons">
            
            <a href="/sonu3.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
              <button className="hirebtn resume-btn">Hire Me</button>
            </a>
          </div>
        </div>
      </div>
      <div className="Righthome">
        <img src={Man} alt="Man" className="" />
      </div>
    </div>

  )
}

export default home
