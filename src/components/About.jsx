import React from 'react';
import AboutBackground from "../assets/aboutbg.png";
import AboutBackgroundSVG from "../assets/aboutsvg.png";
import { BsFillPlayCircleFill} from "react-icons/bs";



const About = () => {
  return (
    <div className="about-section-container">
        <div className="about-background-image-container">
            <img src={AboutBackground} alt=""/>
        </div>
        <div className="about-section-image-container">
            <img src={AboutBackgroundSVG} alt=""/>
        </div>
        <div className="about-section-text-container">
            <p className="primary-subheading">ABOUT US</p>
            <h1 className="primary-heading"> </h1>
        </div>
    </div>
  )
}

export default About