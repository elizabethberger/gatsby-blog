import React from "react"

const Footer = () => (
  <div className="site-footer">
    <h4 className="text-center">Testuję z pasją</h4>
    <p className="text-center">Follow me</p>
    <div className="footer-social-links">
      <ul className="social-links-list">
        <li>
          <a
            href="https://www.facebook.com/elzbieta.20"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook"
          >
            <i className="fab fa-facebook-f fa-2x" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/szulc_elzbieta"
            target="_blank"
            rel="noopener noreferrer"
            className="twitter"
          >
            <i className="fab fa-twitter fa-2x" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/elzszulc"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram"
          >
            <i className="fab fa-instagram fa-2x" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/el%C5%BCbieta-szulc-a27075167/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
          >
            <i className="fab fa-linkedin fa-2x" />
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
