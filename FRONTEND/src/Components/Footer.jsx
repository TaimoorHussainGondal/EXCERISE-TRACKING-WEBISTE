import React from "react";
import { Link } from "react-router-dom";
import "../stlyes/Footer.scss";

const Footer = () => {
  return (
    <div className="mainbody1">
      <footer className="text-center text-lg-start  text-muted">
        <section className=" row d-flex justify-content-center justify-content-lg-between d-flex justify-content-evenly p-4 border-bottom">
          <div className="col-4 text-white">
            <h4>Get connected with us on social networks:</h4>
          </div>
          <div className="col-8 justify-evenly d-flex justify-content-evenly">
            <Link to="" className=" nav-link me-4  text-dark ">
              <i class="bi bi-facebook"></i>
            </Link>
            <Link to="" className=" nav-link me-4 text-reset">
              <i class="bi bi-twitter"></i>
            </Link>
            <Link to="" className="nav-link me-4 text-reset">
              <i class="bi bi-instagram"></i>
            </Link>
          </div>
        </section>

        <div
          className="text-center p-4 text-white"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          <Link to="/" className="">
            {" "}
            {/* <img src={logo} alt="logo" height={"50px"} className=" " /> */}
            <a className="navbar-brand" href="#">
              {" "}
              Fitness Freak
            </a>
          </Link>
          <h5> © 2021 Copyright:TAIMOORHUSSAIN@GONDAL</h5>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
