'use client'
import React from 'react'
import "./projects.css"
import Card from '../../Components/Card/card.jsx';

function Projects() {

  const handleClick = (url) => {
    window.open(url, "_blank");
  };

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
          onClick={() => handleClick("#")} 
        />

        <Card 
          title="E-Commerce App" 
          onClick={() => handleClick("#")} 
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
