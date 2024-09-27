import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <div className="hero">
   
        <div className="content">
          <h1>
            Let us find your
            <strong>Forever Food.</strong>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
          </p>
          <div className="button-group">
            <a href="/hotel" className="button primary">
              Search Now
            </a>
            <a href="#" className="button secondary">
              Know more
            </a>
          </div>
        </div>
    </div>
  );
};

export default Hero;
