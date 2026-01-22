import React from "react";
import "./about.css";
import Card1 from "../../Components/Card/card.jsx";  
import img1 from "../../assets/image/full.png";
import img2 from "../../assets/image/dsa.png";
import img3 from "../../assets/image/java.png";
function about() {
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
            <h1> Personal Info</h1>
            <ul>
              <li>
                <span> Name: </span>: SONU KUMAR GUPTA
              </li>
              <li>
                <span> AGE </span>: 21
              </li>
              <li>
                <span> GENDER </span>: MALE
              </li>
              <li>
                <span> LANGWAGE </span>: HINDI
              </li>
            </ul>
          </div>
          <div className="education">
            <h1> Education Info</h1>
            <ul>
              <li>
                <span>DEGREE </span>: BACHELOR OF COMPUTER APPLICATION
              </li>
              <li>
                <span>BRANCH </span>: COMPUTER APPLICATION
              </li>
              <li>
                <span>YEAR </span>: 2023-2026
              </li>
            </ul>
          </div>
          <div className="skills">
            <h1> Skills</h1>
            <ul>
              <li>FULL STACK WEB DEVELOPER</li>
              <li>DSA</li>
              <li>JAVA</li>
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

export default about;
