import React from 'react';
import PrivacyPolicy from './PrivacyPolicy';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start" style={{ background: 'linear-gradient(to right, orange, purple)' }}>
      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* Left */}
        <div className="me-5 d-none d-lg-block">
          <span className="text-white"></span>
        </div>
        {/* Left */}
  
        {/* Right */}
        <div>
          <a href="" className="me-4 text-reset text-white">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="" className="me-4 text-reset text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="me-4 text-reset text-white">
            <i className="fab fa-google"></i>
          </a>
          <a href="" className="me-4 text-reset text-white">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="" className="me-4 text-reset text-white">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="" className="me-4 text-reset text-white">
            <i className="fab fa-github"></i>
          </a>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}
  
      {/* Section: Links  */}
      <section className="">
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h2 className="text-uppercase fw-bold mb-4 text-white">
                <i className="fas fa-gem me-9 "></i><b>Finsimple</b>
              </h2>
              <h6 className="text-white">Turning Dreams into Rupees</h6>
            </div>
            {/* Grid column */}
  
            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4 text-white">
                Products
              </h6>
              <p>
                <a href="https://Finsimple.netlify.app/" className="text-reset text-white ">Home</a>
              </p>
              <p>
                <a href="https://Finsimple.netlify.app/" className="text-reset text-white">Live Market</a>
              </p>
              <p>
                <a href="https://Finsimple.netlify.app/" className="text-reset text-white">Business News</a>
              </p>
              <p>
                <a href="https://www.youtube.com/@finsimple1256" className="text-reset text-white">Finance Videos</a>
              </p>
            </div>
            {/* Grid column */}
  
            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4 text-white">
                Useful links
              </h6>
              <p>
                <a href="/PrivacyPolicy" className="text-reset text-white">Privacy Policy</a>
              </p>
              <p>
                <a href="#!" className="text-reset text-white">About Us</a>
              </p>
              <p>
                <a href="#!" className="text-reset text-white">Disclaimer</a>
              </p>
              <p>
                <a href="#!" className="text-reset text-white">Contact Us</a>
              </p>
            </div>
            {/* Grid column */}
  
            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4 text-white">Contact</h6>
              <p><i className="fas fa-home me-3"></i>S35 Skit Jaipur, 324002, Jaipur Rajasthan, India</p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                contact@finsimple.com
              </p>
              <p><i className="fas fa-phone me-3"></i> +91 984 567 88</p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links  */}
  
      {/* Copyright */}
      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        Finsimple© 2023 Copyright:
        <a className="text-reset fw-bold text-white" href="https://Finsimple.netlify.app/">Finsimple.com</a>
      </div>
      {/* Copyright */}
    </footer>
  );
}

export default Footer;
