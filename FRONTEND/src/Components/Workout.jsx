import React from "react";
import profile1 from "../images/profile-1.png";
import "../stlyes/Workout.scss";
import run from "../images/run.jpg";
import cycle from "../images/cycle.jpg";
import hike from "../images/hike.jpg";
import swim from "../images/swim.jpg";
import { Link } from "react-router-dom";

const Workout = (props) => {
  return (
    <div>
      <div className="container main1 mb-5">
        <div className="row">
          <div className="col-md-3 m-0 p-0 ">
            <img src={run} height={"300vh"} width={"100%"} alt="" />
          </div>
          <div className="cards-1 text-center col-md-3 p-0 m-0">
            <h2>Runing</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
              vero sit ipsa maiores, perspiciatis itaque, odio veritatis animi
              fuga modi nam voluptatum voluptate totam distinctio ad cumque
            </p>
            <Link className=" " to="/contactus">
              <h3>start now</h3>
            </Link>
          </div>
          <div className="col-md-3 p-0 m-0">
            <img src={swim} height={"300vh"} width={"100%"} alt="" />
          </div>
          <div className="cards-1 text-center col-md-3 p-0 m-0">
            <h2>Runing</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
              vero sit ipsa maiores, perspiciatis itaque, odio veritatis animi
              fuga modi nam voluptatum voluptate totam distinctio ad cumque
            </p>
            <Link className=" " to="/contactus">
              <h3>start now</h3>
            </Link>
          </div>
        </div>

        <div className="row">
          <div className=" cards-1 text-center col-md-3 p-0 m-0">
            <h2>Cycling</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
              vero sit ipsa maiores, perspiciatis itaque, odio veritatis animi
              fuga modi nam voluptatum voluptate totam distinctio ad cumque
            </p>
            <Link className=" " to="/contactus">
              <h3>start now</h3>
            </Link>
          </div>
          <div className="col-md-3 p-0 m-0">
            <img src={hike} height={"300px"} width={"100%"} alt="" />
          </div>

          <div className=" cards-1 text-center col-md-3 p-0 m-0">
            <h2>Cycling</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
              vero sit ipsa maiores, perspiciatis itaque, odio veritatis animi
              fuga modi nam voluptatum voluptate totam distinctio ad cumque
            </p>
            <Link className=" " to="/contactus">
              <h3>start now</h3>
            </Link>
          </div>
          <div className="col-md-3 p-0 m-0">
            <img src={cycle} height={"300vh"} width={"100%"} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workout;
