import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <div className="footer__content">
          <div className="footer__logo">
          <h1>Logium</h1>
          </div>

          <p className="footer__description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            consequuntur amet culpa cum itaque neque.
          </p>

          <ul className="footer__nav">
            <li>
              <a className="footer__link" href="/">About</a>
            </li>
            <li>
              <a className="footer__link" href="/">Careers</a>
            </li>
            <li>
              <a className="footer__link" href="/">History</a>
            </li>
            <li>
              <a className="footer__link" href="/">Services</a>
            </li>
            <li>
              <a className="footer__link" href="/">Projects</a>
            </li>
            <li>
              <a className="footer__link" href="/">Blog</a>
            </li>
          </ul>

          <ul className="footer__social">
            <li>
                <a className="footer__icon" href="/"><img src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Facebook_icon_2013.svg" alt="" /></a>
            </li>
            <li>
                <a className="footer__icon" href="/"><img src="https://seeklogo.com/images/I/instagram-logo-A807AD378B-seeklogo.com.png" alt="" /></a>
            </li>
            <li>
                <a className="footer__icon" href="/"><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" /></a>
            </li>
            <li>
                <a className="footer__icon" href="/"><img src="https://i.pinimg.com/originals/8e/72/f7/8e72f7331b652b842b0c271ab144d332.png" alt=""  /></a>
            </li>
           </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
