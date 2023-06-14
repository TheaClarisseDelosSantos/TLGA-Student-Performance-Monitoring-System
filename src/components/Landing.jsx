import React from 'react';
import Navbar from "./Navbar";
import BannerBackground from "../assets/background.jpg";
import {FiArrowRight} from "react-icons/fi";

const Landing = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <div className="banner-overlay"></div>
          <img src={BannerBackground} alt=""/>
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            THE LIPA GRACE ACADEMY
          </h1>
          <p className="primary-text">
          “Meaningful Education Fortified With Christian Values”
          </p>
        </div>
      </div>
    </div> 
  );
};

export default Landing;