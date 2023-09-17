
import React ,{useState}from 'react';
import navlogo from '../assets/navlogo.svg';
// import Slider from '../components/Slider/Slidercomp';
import {FiChevronDown} from "react-icons/fi";

const Navbar = () => {
    
    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }
    
    return (

        <>
            <div id="container">
                <nav id="nav">
                    <img src={navlogo} alt="logo" />
                    <div >
                    <ul id="navbar">
                        <li><a className="active" href="./">Pages</a></li>
                        <li><a href="./">Serivces</a></li>
                        <li onClick={toggleSubmenu} className="navbar sub__menus__arrows"><a href="./">Feautres
                        <FiChevronDown /></a>
                        <ul className={boxClassSubMenu.join(' ')}>
						  <li><a href="./"> Products </a> </li>
						  <li><a href="./"> IT Serivces</a> </li>
                          <li><a href="./"> Testing</a> </li>
						  <li><a href="./"> International</a> </li>
                          <li><a href="./"> Clients</a> </li>
						  
					    </ul>
                        </li>
                        <li><a href="./">Blogs</a></li>
                        <li><a href="./">Contact</a></li>
                    </ul>

                </div>
                
                </nav>
            <hr id='hr'/>
            
        
            </div>
            
            
            
            
        </>


    )
}
export default Navbar
