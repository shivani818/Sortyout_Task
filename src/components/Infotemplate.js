import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

    faAws,
    faCcAmazonPay,
    faCcApplePay,
    faCodepen, faGithub, faGoogle,



} from "@fortawesome/free-brands-svg-icons";


const Infotemplate = () => {
    return (
        <>
            <div className='infotemplate-container'>
                <div className='temp'>
                    <h2>
                        Beautiful Partners
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet,
                        consectetur
                        adipiscing elit.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet,
                        consectetur
                        adipiscing elit.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet,
                        consectetur
                        adipiscing elit.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet,
                        consectetur
                        adipiscing elit.
                    </p>
                </div>
                <div className='infopartner'>
                    <div className='info'>
                        <div>
                            <h3>Codepen</h3>
                            <FontAwesomeIcon icon={faCodepen} size="5px"  />
                        

                        
                            <h3>Github</h3>
                            <FontAwesomeIcon icon={faGithub} size="5px"  />
                        </div>
                    </div>
                    <div className='info'>
                        
                            <h3>Google</h3>
                            <FontAwesomeIcon icon={faGoogle} size="5px"  />
                        

                        
                            <h3>Apple</h3>
                            <FontAwesomeIcon icon={faCcApplePay} size="5px"  />
                        
                        
                    </div>
                    <div className='info'>
                        <div>
                            <h3>Amazon</h3>
                            <FontAwesomeIcon icon={faCcAmazonPay} size="5px"  />
                        </div>

                        <div>
                            <h3>AWS</h3>
                            <FontAwesomeIcon icon={faAws} size="5px"  />
                        </div>
                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Infotemplate
