import React from "react";
import contact from "../images/contactus.png";
import "../stlyes/Contact.scss";
import { useEffect, useState } from "react";
import Workout from "./Workout";
import imgcard from "../images/ex-1.jpg";
const Contactus = () => {
  //usestae for edit anc upadet
  const [name, setname] = useState("");
  const [activity, setactivity] = useState("");
  const [time, settime] = useState("");
  const [date, setdate] = useState("");
  const [carlories, setcarlories] = useState("");
  const [Id, setId] = useState(null);

  //end

  const [handle, sethandle] = useState([]);

  const [data, setdata] = useState([]);
  const getapi = async () => {
    const show = await fetch("http://localhost:5000/get");
    setdata(await show.json());

    // setname(data[0].name);
    // setactivity(data[0].activity);
    // settime(data[0].time);
    // setId(data[0]._id);
    getapi();
  };
  const handleinput = (e) => {
    // const {value,name}=e.target;
    const value = e.target.value;
    const name = e.target.name;
    sethandle({ ...handle, [name]: value });
    console.log(name, value);
  };

  const myapi = async (e) => {
    e.preventDefault();

    console.log("clicked");
    await fetch("http://localhost:5000/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(handle),
    });
  };
  useEffect(() => {
    getapi();
  }, []);

  ////new data inputs wala

  const deletedata = async (id) => {
    await fetch(`http://localhost:5000/delete/${id}`, {
      method: "Delete",
    });
    getapi();
  };
  const updatedata = async (id) => {
    console.log(id._id);
    setId(id._id);
    setname(id.name);
    setactivity(id.activity);
    settime(id.time);
    setdate(id.date);
    setcarlories(id.carlories);

    // getapi();
    // console.log(data);

    // setGetId(id);
    // setIsUpdating(!isUpdating);
    // handle.name = data.name;
    // handle.eamail = data.email;
    // handle.phone = data.phone;
    // console.log(handle);
  };
  const updateuserdata = async () => {
    let item = { name, activity, time, date, carlories };
    console.warn(name, activity, time, date, carlories);
    await fetch(`http://localhost:5000/update/${Id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    // .then((result) => {
    //   result.json().then((data) => {
    //     console.warn(data);
    //     getapi();
    //   });
    // });
    console.warn(item);

    getapi();
  };
  return (
    <div className="">
      <div className="container-fluid mb-3  ">
        <div className="row">
          <div className="col-12">
          {/* dashboard buttons */}
            <div className="d-flex align-items-start">
              <div
                className="nav flex-column nav-pills me-3 navtab1"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className="nav-link "
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  Home
                </button>
                <button
                  className="nav-link"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                  Add workouts
                </button>
                <button
                  className="nav-link"
                  id="v-pills-messages-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-messages"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false"
                >
                  Cards{" "}
                </button>
                <button
                  className="nav-link"
                  id="v-pills-settings-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-settings"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false"
                >
                  ALL DATA
                </button>
              </div>
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                {/* home page of Dashborad */}
                  <div className="container home1 center">
                    <div className="row">
                      <div className="col-12">
                        <h1>welcome to our Dashborad</h1>
                        <h4>Add your activity log now</h4>
                      </div>
                    </div>
                  </div>
                </div>

                {/* input your data to show in cards */}
                <div
                  className="tab-pane fade center col-8"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  <div className=" inputcard1 center ">
                    <form className="form-group center m-3" onSubmit={myapi}>
                      <tr>
                        <td>
                          <label htmlFor="">Enter Name</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            value={handle.name}
                            onChange={handleinput}
                            name="name"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label htmlFor="">ACTIVITY</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="name"
                            className="form-control"
                            value={handle.activity}
                            name="activity"
                            onChange={handleinput}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label htmlFor="">miles</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            value={handle.time}
                            name="time"
                            onChange={handleinput}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label htmlFor="">Date</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            value={handle.date}
                            name="date"
                            onChange={handleinput}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label htmlFor="">calories</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="number"
                            className="form-control"
                            value={handle.carlories}
                            name="carlories"
                            onChange={handleinput}
                          />
                        </td>
                      </tr>
                      <button
                        className="btn btn-danger mt-3 form-control "
                        type="submit"
                      >
                        submit
                      </button>
                    </form>
                  </div>
                </div>


                {/* //cards to display code */}

                <div
                  className="tab-pane fade"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                  <div className="container d-flex flex-wrap">
                    {data.map((data, i) => {
                      return (
                        <div class="card-group d-flex">
                          <div class="card" width={"230px"}>
                            <img
                              src={imgcard}
                              class="card-img-top "
                              height={"400px"}
                              width={"400px"}
                              alt="Hollywood Sign on The Hill"
                            />
                            <div class="card-body">
                              <h5 class="card-title1 text-center ">
                                {data.activity}
                              </h5>
                              <p class="card-text ">
                                <span className="cardtext">
                                  Acticvity:&nbsp;
                                </span>
                                {data.activity} <br />
                                <span className="cardtext">
                                  Duration:&nbsp;
                                </span>
                                {data.time} <br />
                                <span className="cardtext">date: &nbsp; </span>
                                {data.date} <br />
                                <span className="cardtext">
                                  calories:&nbsp;{" "}
                                </span>
                                {data.carlories} <br />
                              </p>
                            </div>
                            <div class="card-footer justify-evenly">
                              <small class="text-muted d-flex justify-content-around ">
                                <i
                                  class="bi bi-trash3 text-white "
                                  onClick={() => {
                                    deletedata(data._id);
                                  }}
                                ></i>

                                <i
                                  class="bi bi-pencil-square text-white  text-end "
                                  data-bs-toggle="modal"
                                  data-bs-target="#updateModal"
                                  onClick={() => {
                                    updatedata(data);
                                  }}
                                ></i>
                              </small>
                            </div>
                          </div>
                        </div>
                      );
                    })}

                    {/* <div className="row card-title m-0">
                      {data.map((data, i) => {
                        return (
                          <div className="col-4" key={i}>
                            <div className=" cardsshow">
                              Name: {data.name}
                              <br />
                              Acticvity:{data.activity} <br />
                              Duration:{data.time} <br />
                              date:{data.date} <br />
                              calories:{data.carlories} <br />
                              <button
                                className="btn btn-primary"
                                onClick={() => {
                                  deletedata(data._id);
                                }}
                              >
                                Delete
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#updateModal"
                                onClick={() => {
                                  updatedata(data);
                                }}
                              >
                                Update Btn
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div> */}
                  </div>
                </div>
                {/* all data of cards in table form */}
                <div
                  className="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                {/* table pf cards data */}
                  <div className="container table1">
                    <div className="row">
                      <div className="col-9 ">
                        <h1 className="text-center  ms-3 text-white">
                          All Your Data
                        </h1>
                        <div className="table-responsive">
                          <table className=" table tab1122 table-sm m-5 center table-hover ">
                            <tr className="table-heading">
                              <th>Name</th>
                              <th>Activity</th>
                              <th>Time</th>
                              <th>Date</th>
                              <th>Caloires</th>
                            </tr>

                            {data.map((data) => {
                              return (
                                <tr className="table-text">
                                  <td>{data.name}</td>
                                  <td>{data.activity}</td>
                                  <td>{data.time}</td>
                                  <td>{data.date}</td>
                                  <td>{data.carlories}</td>
                                  <td>
                                    <i
                                      class="bi bi-trash3 text-white "
                                      onClick={() => {
                                        deletedata(data._id);
                                      }}
                                    ></i>
                                  </td>
                                </tr>
                              );
                            })}
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-3"></div>
        </div>
      </div>
{/* modal to udpadte data on click the update button on cards */}
{/* modal body */}
      <div
        className="modal fade"
        id="updateModal"
        tabIndex="-1"
        aria-labelledby="updateModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header center">
              <h5
                className="modal-title text-center text-white"
                id="updateModalLabel"
              >
                Update
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-white">
              <div className="row">
                <div className="col-12 p-3">
                  <label className="form-label" htmlFor="">
                    Edit Name
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                  />
                  <label className="form-label" htmlFor="">
                    Edit Activity
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    value={activity}
                    onChange={(e) => setactivity(e.target.value)}
                  />
                  <label className="form-label" htmlFor="">
                    Edit Time
                  </label>
                  <input
                    className="form-control"
                    type="Time"
                    value={time}
                    onChange={(e) => settime(e.target.value)}
                  />
                  <label className="form-label" htmlFor="">
                    Edit Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    value={date}
                    onChange={(e) => setdate(e.target.value)}
                  />
                  <label htmlFor=""> Edit Carlories</label>
                  <input
                    type="text"
                    className="form-control"
                    value={carlories}
                    name="carlories"
                    onChange={(e) => setcarlories(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer center">
              <button
                type="button"
                className="btn btn-primary center"
                data-bs-dismiss="modal"
                onClick={() => {
                  updateuserdata();
                }}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
