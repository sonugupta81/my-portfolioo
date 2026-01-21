import React from 'react'
import "./home.css"
import Man from "../../assets/image/man.png";  
import TypingEffect from 'react-typing-effect';

function home() {
  return (
    <div id="home">
      <div className="Lefthome">
        <div className="homedetails">
          <div className="line1">I'M</div>
          <div className="line2"> SONU K. GUPTA</div>
          <div className="line3">
            {/* <TypingEffect
            text={['A MERN Stack Developer', 'A Frontend Developer', 'A Backend Developer', 'Web Developer','Software Engineer']}
            speed={500}
            eraseSpeed={50}
            eraseDelay={1000}
            typingDelay={50}
            cursor='_'
            /> */}
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
