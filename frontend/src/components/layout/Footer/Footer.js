import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter ms-3">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Availabe both for Android and iOS devices</p>

        <div>
          <div>
            <img
              src={"https://cdn-icons-png.flaticon.com/512/300/300218.png"}
              alt="playstore"
            />
          </div>
          <div>
            <img
              src={"https://cdn-icons-png.flaticon.com/512/831/831276.png"}
              alt="Appstore"
            />
          </div>
        </div>
      </div>

      <div className="midFooter">
        <h1>CoverPage</h1>

        <p>Copyrights 2022 &copy; junkEmpire & Co.</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/">Instagram</a>
        <a href="http://youtube.com/">YouTube</a>
        <a href="http://github.com/">GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;
