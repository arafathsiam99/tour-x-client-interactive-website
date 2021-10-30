import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="custom-bg text-white mt-5">
      <section>
        <div className="row">
          <div className="col-md-3">
            <img src="https://i.ibb.co/GV9WNKH/download-6.png" alt="" />
            <p>
              We’ve convinced you that you need a blog on your site, so you’re
              ready to start one. Where do you start? What should you blog
              about? Your blog should complement your website(opens in a new
              tab), but also be valuable in its own right.
            </p>
            <h3>Follow Us:</h3>
            <div className="d-flex align-items-center justify-content-center">
              <div className="m-2 p-2">
                <i class="fab fa-facebook"></i>
              </div>
              <div className="m-2 p-2">
                <i class="fab fa-linkedin-in"></i>
              </div>
              <div className="m-2 p-2">
                <i class="fab fa-twitter"></i>
              </div>
              <div className="m-2 p-2">
                <i class="fab fa-instagram"></i>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <h2>Contact Us</h2>
            <div>
              <div className="mt-2">
                <i class="fas fa-phone"></i>
                :+01852-1265122
              </div>
              <div className="mt-2">
                <i class="fas fa-envelope"></i>
                :support@example.com
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <h2>Support</h2>
            <h5>Contact us</h5>
            <h5>About Us</h5>
            <h5>Destination</h5>
            <h5>Our Blogs</h5>
            <h5>Packages</h5>
          </div>
          <div className="col-md-3">
            <h2>We Accepts:</h2>
            <div className="mt-5">
              <div>
                <img src="https://i.ibb.co/f05zKSz/download-1.png" alt="" />
                <img src="https://i.ibb.co/hg5L9yp/download-2.png" alt="" />
                <img src="https://i.ibb.co/dbYqrdt/download-3.png" alt="" />
              </div>
              <br />
              <div>
                <img src="https://i.ibb.co/Xsf7Jr2/download-4.png" alt="" />
                <img src="https://i.ibb.co/8jbm9kM/download-5.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="w-75 m-auto" />
      <section>
        <p>
          Copyright 2021 <span className="custom-font">TourX</span> | Design By{" "}
          <span className="custom-font">Md.Arafath Islam Siam</span>
        </p>
      </section>
    </div>
  );
};

export default Footer;
