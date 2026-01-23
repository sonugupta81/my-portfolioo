'use client'
import React from 'react'
import "./projects.css"
import Card from '../../Components/Card/card.jsx';
import img5 from '../../assets/image/hello.png'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/src/all";
gsap.registerPlugin(ScrollTrigger);

function Projects() {

  const handleClick = (url) => {
    window.open(url, "_blank");
  };
  useGSAP(() => {
    gsap.from("#projects", {
  y:100,
  duration: 1,
  opacity: 0, 
  stagger:1,    
  scrollTrigger: {
    trigger: "#projects",
    scroll:"body",
    scrub:2,
    start:"top 80%",
    end:"top 30%"
  }
})
 gsap.from(".slider", {
  y:100,
  duration: 1,
  opacity: 0, 
  stagger:1,    
  scrollTrigger: {
    trigger: ".slider",
    scroll:"body",
    scrub:2,
    start:"top 80%",
    end:"top 30%"
  }
})
  })
  

  return (
    <div id="projects">
      <h6 id="sonu">6 MONTH EXPERIENCE IN PROJECTS</h6>

      <div className="slider">
        <Card 
          title="MovieHub" 
          
          onClick={() => handleClick("https://moviehub-rose.vercel.app/")} 
        />

        <Card 
          title="Portfolio Website" 
          onClick={() => handleClick("https://my-portfolioo-mu-nine.vercel.app/")} 
        />

        <Card 
          title="resume Builder" 
          img src={img5}
          onClick={() => handleClick("https://resumebuild-alpha.vercel.app/")} 
        />

        <Card 
          title="Blog App" 
          onClick={() => handleClick("#")} 
        />

        <Card 
          title="Chat App" 
          onClick={() => handleClick("#")} 
        />
      </div>
    </div>
  )
}

export default Projects;
