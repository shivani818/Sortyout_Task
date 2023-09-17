import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

    faCodepen,
    faGg,
    faGithub,
    faSearchengin,


} from "@fortawesome/free-brands-svg-icons";

const Icons = () => {
    return (
        <div className='icon-contianer'>
            <div>
                <FontAwesomeIcon icon={faSearchengin} size="10x" className="searchengin" />
                <p className="p">Lorem ipsum dolor sit amet</p>
                <p className="p">Lorem ipsum dolor sit amet</p>
            </div>
            <div>
                <FontAwesomeIcon icon={faCodepen} size="10x" className="searchengin" />
                <p className="p">Lorem ipsum dolor sit amet</p>
                <p className="p">Lorem ipsum dolor sit amet</p>
            </div>
            <div>
                <FontAwesomeIcon icon={faGg} size="10x" className="searchengin" />
                <p className="p">Lorem ipsum dolor sit amet</p>
                <p className="p">Lorem ipsum dolor sit amet</p>
            </div>
            <div>
                <FontAwesomeIcon icon={faGithub} size="10x" className="searchengin" />
                <p className="p">Lorem ipsum dolor sit amet</p>
                <p className="p">Lorem ipsum dolor sit amet</p>

            </div>

        </div>

    )
}

export default Icons ;
