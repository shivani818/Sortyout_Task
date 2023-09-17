import React from "react";
import {sliderContent} from "../Slider/sliderContent";

export const Sliderdata = ({ activeIndex }) => {
  
  return (
    <section>
    {sliderContent.map((slide, index) => (
      <div
        key={index}
        className={index === activeIndex ? "slides active" : "inactive"}
      >
        
        <img className="slide-image" src={slide.icon} alt={""}/>
        {/* <div className="slide-text">{slide.name}</div> */}
        <div className="slide-text">{slide.description}</div>

        
        
      </div>
    ))}
  </section>
    
 
  );
};
