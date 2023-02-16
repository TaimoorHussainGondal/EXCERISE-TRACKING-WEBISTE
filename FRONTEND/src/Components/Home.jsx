import React from "react";
import "../stlyes/Home.scss";
import img1 from "../images/IMG8.png";
import img2 from "../images/img2.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home text-warning text-center center m-4 ">
      <div className="row ">
        {/*  */}
        <div className="col-md-12 col-sm-12 text-align-right text-dark des-1 ">
          <h2 className="text-center display-4 p-0 lead h2-main ">
            Run your journey <br /> with us.
          </h2>
          <p className="p-main ">
            Whether you’re just starting out, or your shoes have already seen
            many miles, we’ll be by your side for every stride. All you have to
            do is get out the door, and we’ll take it from there
          </p>
          <div className="  text-center">
            <button className="btn13">
              <Link className=" " to="./contactus">
                LOGIN
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
