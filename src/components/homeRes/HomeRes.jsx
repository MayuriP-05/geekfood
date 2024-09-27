import React from 'react'
import './HomeRes.css';

    const HomeRes = () => {
      return (
        <div className="home-res">
        
            <div className="home-res-cont">
              <div className="home-image-container">
                <img
                  alt="House"
                  src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                />
              </div>
    
              <div className="home-content">
               <div className="another-sec">
                  <h2>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
                    debitis.
                  </h2>
    
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
                    molestiae! Quidem est esse numquam odio deleniti, beatae, magni
                    dolores provident quaerat totam eos, aperiam architecto eius quis
                    quibusdam fugiat dicta.
                  </p>
    
                  <a
                    href="#"
                    className="button-touch"
                  >
                    Get in Touch
                  </a>
                
              </div>
            </div>
            </div>
          
        </div>
      );
    }
    
    export default HomeRes;
 