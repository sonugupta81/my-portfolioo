
import {useRef} from "react";
import "./nav.css";
import{ Link} from "react-scroll";

function nav() {
  let menuRef = useRef();
  let mobRef = useRef();
  
  
  return (
    <nav>
      <h1>I.TECH</h1>
      <ul className="desktopmenu">
        <Link to="home" activeClass="active" spy={true} smooth={true} duration={500}><li>Home</li></Link>
        <Link to="projects" activeClass="active" spy={true} smooth={true} duration={500}><li>Projects</li></Link>
        <Link to="contact" activeClass="active" spy={true} smooth={true} duration={500}><li>Contact</li></Link>
        <Link to="about" activeClass="active" spy={true} smooth={true} duration={500}><li>About</li></Link>
      </ul>
      <div className="hemburger" ref={menuRef} onClick={()=>{
        mobRef.current.classList.toggle("activemob")
        menuRef.current.classList.toggle("activehem")
      }}>
        <div className="hem"></div>
        <div className="hem"></div>
        <div className="hem"></div>
      </div>
      <ul className="mobilemenu" ref={mobRef}>
         <Link to="home" activeClass="active" spy={true} smooth={true} duration={500}><li>Home</li></Link>
        <Link to="projects" activeClass="active" spy={true} smooth={true} duration={500}><li>Projects</li></Link>
        <Link to="contact" activeClass="active" spy={true} smooth={true} duration={500}><li>Contact</li></Link>
        <Link to="about" activeClass="active" spy={true} smooth={true} duration={500}><li>About</li></Link>
      </ul>
    </nav>
  );
}

export default nav;
