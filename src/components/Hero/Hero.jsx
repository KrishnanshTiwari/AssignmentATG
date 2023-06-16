import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero-section ">
      <div className="here-text">
        <h2>Computer Engineering</h2>
        <p>142,765 Computer Engineers follow this</p>
      </div>
      
        <div className="joinBtn d-sm-none d-block" >
          Join Now
        </div>
      <div className="back-btn d-sm-none d-block">
        <AiOutlineArrowLeft />
      </div>
    </div>
  );
};

export default Hero;
