
import {useRef} from "react";
import "./nav.css";
import{ Link} from "react-scroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
function nav() {
  let menuRef = useRef();
  let mobRef = useRef();
  useGSAP(()=>{
    let t1 = gsap.timeline()
t1.from("nav h1",{
  y:100,
  direction:1,
  opacity:0
})
t1.from("nav ul li",{
  y:100,
  direction:1,
  opacity:0,
  stagger:1
})
  })
  
  return (
    <nav>
      <h1>I.TECH</h1>
      <ul className="desktopmenu">
        <Link to="home" activeClass="active" spy={true} smooth={true} duration={500}><li>Home</li></Link>
       <Link to="about" activeClass="active" spy={true} smooth={true} duration={500}><li>About</li></Link>
        <Link to="projects" activeClass="active" spy={true} smooth={true} duration={500}><li>Projects</li></Link>
        <Link to="contact" activeClass="active" spy={true} smooth={true} duration={500}><li>Contact</li></Link>
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
        <Link to="about" activeClass="active" spy={true} smooth={true} duration={500}><li>About</li></Link>
        <Link to="projects" activeClass="active" spy={true} smooth={true} duration={500}><li>Projects</li></Link>
        <Link to="contact" activeClass="active" spy={true} smooth={true} duration={500}><li>Contact</li></Link>
      </ul>
    </nav>
  );
}

export default nav;
