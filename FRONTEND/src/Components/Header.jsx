import React from "react";
import { Link } from "react-router-dom";
import "../stlyes/Header.scss";
import logo from "../images/logo1.png";
import { Button } from "@mui/material";
const Header = () => {
  return (
    <div className="mainbody m-3">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid ">
          <div className="row navlog1 d-flex">
            <div className="col-2  justify-content-evenly ">
              <Link to="/" className="d-flex">
                {" "}
                {/* <img src={logo} alt="logo" height={"50px"} className=" " /> */}
                <a className="navbar-brand" href="#">
                  {" "}
                  Fitness Freak
                </a>
              </Link>
            </div>
          </div>

          <div className="col-4  display-6  ">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="./workout">
                    Workouts
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="./instructor">
                    Instructors
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="./aboutus">
                    Aboutus
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link " to="./contact">
                    Contact
                  </Link>
                </li>
                {/* <li>
                  <button className="btn2">
                    <Link className=" " to="./contactus">
                      LOGIN
                    </Link>
                  </button>
                </li> */}
              </ul>
            </div>
          </div>

          <div className="col-2">
            <button className="btn12">
              <Link className=" " to="./contactus">
                LOGIN
              </Link>
            </button>
          </div>
        </div>
      </nav>
      {/* <nav>

        <div className="row">
          <div className="col-6">
            <img src={logo} alt="logo" />
          </div>
          <div className="col-6">
          

          </div>
        </div> */}
      {/* <h1>TechStar.</h1>
          <Link to={"/"}>Home</Link>
          <Link to={"/Aboutus"}>About Us</Link>
          <Link to={"/services"}>Services</Link>
          <Link to={"/contact"}>CONTACT</Link> */}
      {/* </nav> */}
    </div>
  );
};

export default Header;
