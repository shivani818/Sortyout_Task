import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
 
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div>
          <h2 className="hr-lines">About Us</h2>
          <p className="p">Lorem ipsum dolor sit amet</p>
          <p className="p">Lorem ipsum dolor sit amet</p>
          <p className="p">Lorem ipsum dolor sit amet</p>
          {/* <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing
                                elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </div>
        <div>
          <h2 className="hr-lines">Get in Touch</h2>
          <p className="p">Address : Calfornia ,USA</p>
          <p className="p">Contact : +91 8586759898</p>
          
        </div>
        <div>
          <h2 className="hr-lines">Social Media</h2>
          <div >
          <FontAwesomeIcon icon={faYoutube}  size="2x" className="youtube"/>
          <FontAwesomeIcon icon={faFacebook} size="2x" className="facebook"/>
          <FontAwesomeIcon icon={faTwitter} size="2x" className="twitter"/>
          <FontAwesomeIcon icon={faInstagram} size="2x" className="instagram" />
          </div>
        </div>
        <div className="footer-copywrite">CopyWrite</div>
      </div>
      
    </>
  );
};

export default Footer;