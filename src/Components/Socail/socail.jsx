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

      <a href="" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>

      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
    </div>
  )
}

export default Socail;
