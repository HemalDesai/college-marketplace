import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <div className="footerParentDiv">
      <div className="content">
        <div>
          <div className="heading">
            <p>POPULAR LOCATIONS</p>
          </div>
          <div className="list">
            <ul>
              <li>Block-1</li>
              <li>Block-2</li>
              <li>Girls Hostel</li>
              <li>Block-3</li>
              <li>Block-4</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>ABOUT US</p>
          </div>
          <div className="list">
            <ul>
              <li>About Sellit</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>Members</li>
            </ul>
          </div>
        </div>
        <div>
        </div>
      </div>
      <div className="footer">
        <p>Other Campus - VIT - Amravati - Vellore - Chennai</p>
      </div>
    </div>
  );
}

export default Footer;
