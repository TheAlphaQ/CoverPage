import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <svg
        id="footerSVG"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#222121"
          fillOpacity="1"
          d="M0,192L20,192C40,192,80,192,120,160C160,128,200,64,240,80C280,96,320,192,360,224C400,256,440,224,480,181.3C520,139,560,85,600,80C640,75,680,117,720,138.7C760,160,800,160,840,133.3C880,107,920,53,960,26.7C1000,0,1040,0,1080,32C1120,64,1160,128,1200,181.3C1240,235,1280,277,1320,293.3C1360,309,1400,299,1420,293.3L1440,288L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"
        ></path>
      </svg>
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
    </>
  );
};

export default Footer;
