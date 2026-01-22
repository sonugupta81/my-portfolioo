'use client'
import React from 'react'
import './socail.css'
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Socail() {
  return (
    <div className="social">
      <a href="https://www.instagram.com/sonu.18v/?hl=en" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>

      <a href="https://github.com/sonugupta81" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>

      <a href="https://www.linkedin.com/in/sonu-gupta-b65910391?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>

      <a href="https://wa.me/qr/YRUERJ24JSL3F1" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
    </div>
  )
}

export default Socail;
