import React from "react";
import image1 from "../images/ex-1.jpg";
import iamge2 from "../images/ex-2.jpg";
import image3 from "../images/ex-3.jpg";
import "../stlyes/About.scss";
import "../stlyes/Workout.scss";
import run from "../images/run.jpg";
import cycle from "../images/cycle.jpg";
import hike from "../images/hike.jpg";
import swim from "../images/swim.jpg";
import { Link } from "react-router-dom";
import video from "../videos/mp4.mp4";
import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
// import { Button } from "@mui/material";'

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import DrawerPaper from "../images/ex-1.jpg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  Item: {
    backgroundImage: `url(${DrawerPaper})`,
  },
}));

const Aboutus = () => {
  return (
    <div className="container-fluid">
      <div className="description text-center ">
        <h1>VISUALS GALLERY</h1>
        <p></p>
        <h5>Jion our community now to get the desire reuslts</h5>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item className="img3">
              <div className="d-flex align-items-center justify-content-center h400">
                <Link className=" " to="/contactus">
                  <h4 className="text">START NOW</h4>
                </Link>
              </div>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item className="img1">
              <div className="d-flex align-items-center justify-content-center h400">
                <Link className=" " to="/contactus">
                  <h4 className="text">START NOW</h4>
                </Link>
              </div>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item className="img2">
              <div className="d-flex align-items-center justify-content-center h400">
                <Link className=" " to="/contactus">
                  <h4 className="text">START NOW</h4>
                </Link>
              </div>
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item className="img3">
              <div className="d-flex align-items-center justify-content-center h400">
                <Link className=" " to="/contactus">
                  <h4 className="text">START NOW</h4>
                </Link>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <div className="description text-center ">
        <h1>GALLERY</h1>
        <p></p>
        <h5>Jion our community now to get the desire reuslts</h5>
      </div>

      <marquee width="100%" direction="down" height="100px">
        {" "}
        <Button variant="contained" color="success">
          JION NOW
        </Button>
      </marquee>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
        // data-mdb-interval="false"
        // style={{ border: "2px solid red" }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={iamge2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <marquee
        width="100%%"
        direction="right"
        height="200px"
        className="text-center center text-white"
      >
        <h1>Jion our community now to get the desire reuslts</h1>

        <Button variant="contained" color="success">
          JION NOW
        </Button>
      </marquee>
      {/* <Link className=" " to="/contactus"></Link> */}
    </div>

    // <div className=" ">
    //   <div
    //     id="carouselExampleIndicators"
    //     className="carousel slide"
    //     data-bs-ride="carousel"
    //     // data-mdb-interval="false"
    //     // style={{ border: "2px solid red" }}
    //   >
    //     <div className="carousel-indicators">
    //       <button
    //         type="button"
    //         data-bs-target="#carouselExampleIndicators"
    //         data-bs-slide-to={0}
    //         className="active"
    //         aria-current="true"
    //         aria-label="Slide 1"
    //       />
    //       <button
    //         type="button"
    //         data-bs-target="#carouselExampleIndicators"
    //         data-bs-slide-to={1}
    //         aria-label="Slide 2"
    //       />
    //       <button
    //         type="button"
    //         data-bs-target="#carouselExampleIndicators"
    //         data-bs-slide-to={2}
    //         aria-label="Slide 3"
    //       />
    //     </div>
    //     <div className="carousel-inner">
    //       <div className="carousel-item active">
    //         <img src={image1} className="d-block w-100" alt="..." />
    //       </div>
    //       <div className="carousel-item">
    //         <img src={iamge2} className="d-block w-100" alt="..." />
    //       </div>
    //       <div className="carousel-item">
    //         <img src={image3} className="d-block w-100" alt="..." />
    //       </div>
    //     </div>
    //     <button
    //       className="carousel-control-prev"
    //       type="button"
    //       data-bs-target="#carouselExampleIndicators"
    //       data-bs-slide="prev"
    //     >
    //       <span className="carousel-control-prev-icon" aria-hidden="true" />
    //       <span className="visually-hidden">Previous</span>
    //     </button>
    //     <button
    //       className="carousel-control-next"
    //       type="button"
    //       data-bs-target="#carouselExampleIndicators"
    //       data-bs-slide="next"
    //     >
    //       <span className="carousel-control-next-icon" aria-hidden="true" />
    //       <span className="visually-hidden">Next</span>
    //     </button>
    //   </div>
    //   <div className="description text-center ">
    //     <h1>VISUALS GALLERY</h1>
    //     <p></p>
    //     <h5>Jion our community now to get the desire reuslts</h5>
    //   </div>
    //   <div className="gallery">
    //     <div className="col-12">
    //       <div className="row ">
    //         <div className="col-6 img1 ">
    //           {/* <div
    //             className="col-12 "
    //             style={{ border: "2px solid red" }}
    //           ></div> */}
    //         </div>
    //         <div className="col-3 ">
    //           <div className="col-12 img2"></div>
    //         </div>
    //         <div className="col-3 img3">
    //           <div className="col-12 "></div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="col-12" style={{ width: "100%", height: "2vh" }}></div>
    //   <div className="gallery">
    //     <div className="col-12">
    //       <div className="row ">
    //         <div className="col-3 work-1 ">
    //           {/* <div
    //             className="col-12 "
    //             style={{ border: "2px solid red" }}
    //           ></div> */}
    //         </div>
    //         <div className="col-3 workhover ">
    //           <div className="col-12 work-2 .rgba-purple-strong"></div>
    //         </div>
    //         <div className="col-6 work-3">
    //           <div className="col-12 "></div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="description text-center ">
    //     <h1>VISUALS GALLERY</h1>
    //     <p className="line"></p>
    //     <h5>Jion our community now to get the desire reuslts</h5>
    //   </div>
    //   <div className="container cards-1 mb-4">
    //     <div className="col-12">
    //       <div
    //         className="row p-0 bg-dark text-white cards-1 "
    //         height={"300px"}
    //         width={"100%"}
    //       >
    //         <div className="col-3 m-0 p-0 ">
    //           <img src={run} height={"300px"} width={"100%"} alt="" />
    //         </div>
    //         <div
    //           className="col-3 cards-1  ms-0 p-0 text-align-center text-center p-3"
    //           height={"300px"}
    //           width={"100%"}
    //           // style={{ backgroundColor: "gray" }}
    //         >
    //           <h2>Runing</h2>
    //           <p>
    //             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
    //             vero sit ipsa maiores, perspiciatis itaque, odio veritatis animi
    //             fuga modi nam voluptatum voluptate totam distinctio ad cumque
    //           </p>
    //           <Link className=" " to="/contactus">
    //             <h3>start now</h3>
    //           </Link>
    //         </div>
    //         <div className="col-3 p-0">
    //           <img src={swim} height={"300px"} width={"100%"} alt="" />
    //         </div>
    //         <div className="col-3 cards-1 text-align-center text-center p-3">
    //           <h2>Swiming</h2>
    //           <p>
    //             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
    //             vero sit ipsa maiores, perspiciatis itaque, odio veritatis animi
    //             fuga modi nam voluptatum voluptate totam distinctio ad cumque
    //           </p>
    //           <Link className=" " to="/contactus">
    //             start now
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col-12">
    //       <div
    //         className="row p-0 bg-dark text-white "
    //         height={"300px"}
    //         width={"100%"}
    //       >
    //         <div className="col-3 cards-1 m-0 p-0 text-align-center text-center p-3 ">
    //           <h2>Cycling</h2>
    //           <p>
    //             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
    //             vero sit ipsa maiores, perspiciatis itaque, odio veritatis animi
    //             fuga modi nam voluptatum voluptate totam distinctio ad cumque
    //           </p>
    //           <Link className=" " to="/contactus">
    //             <h3>start now</h3>
    //           </Link>
    //           {/* <Link></Link> */}
    //         </div>
    //         <div
    //           className="col-3 cards-1 ms-0 p-0"
    //           height={"300px"}
    //           width={"100%"}
    //           // style={{ backgroundColor: "gray" }}
    //         >
    //           <img src={cycle} height={"300px"} width={"100%"} alt="" />
    //         </div>
    //         <div className="col-3 cards-1  p-0 text-align-center text-center p-3">
    //           <h2>Hiking</h2>
    //           <p>
    //             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
    //             vero sit ipsa maiores, perspiciatis itaque, odio veritatis animi
    //             fuga modi nam voluptatum voluptate totam distinctio ad cumque
    //           </p>
    //           <Link to="/contactus">
    //             <h3>start now</h3>
    //           </Link>
    //         </div>
    //         <div className="col-3 p-0">
    //           <img src={hike} height={"300px"} width={"100%"} alt="" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="continer-fluid newvideo1 bg-dark text-center text-white">
    //     <h1>EXERCISE UNTIL THE BODY OBEYS.</h1>
    //     <h5>WHERE HEALTH, BEAUTY AND FITNESS MEET.</h5>
    //     <button
    //       type="button"
    //       class="btn btn-primary"
    //       data-bs-toggle="modal"
    //       data-bs-target="#staticBackdrop"
    //     >
    //       START NOW
    //     </button>

    //     <div
    //       class="modal fade"
    //       id="staticBackdrop"
    //       data-bs-backdrop="static"
    //       data-bs-keyboard="false"
    //       tabindex="-1"
    //       aria-labelledby="staticBackdropLabel"
    //       aria-hidden="true"
    //     >
    //       <div class="modal-dialog">
    //         <div class="modal-content">
    //           <div class="modal-header">
    //             <button
    //               type="button"
    //               class="btn-close"
    //               data-bs-dismiss="modal"
    //               aria-label="Close"
    //             ></button>
    //           </div>
    //           <div class="modal-body">
    //             {" "}
    //             <video
    //               width={"100%"}
    //               height={"400px"}
    //               src={video}
    //               controls
    //               autoPlay
    //             >
    //               {/* <source src="movie.ogg" type="video/ogg" /> */}
    //               Your browser does not support the video tag.
    //             </video>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Aboutus;
