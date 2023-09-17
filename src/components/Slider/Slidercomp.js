import React ,{useState ,useEffect} from "react";
import { Sliderdata } from "./Sliderdata";
import Arrows from "./Arrows";
import { sliderContent } from "./sliderContent";
import "./slider.css";

const len = sliderContent.length -1;
const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);
  
  return (
    // <div id="container">
    <div className="slider-container">
      
      <Sliderdata activeIndex={activeIndex} sliderContent={sliderContent} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />

      

      

      
   
    </div>

  );
};
export default Slider;