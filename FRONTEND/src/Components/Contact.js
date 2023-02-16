import React from "react";
import contact from "../images/contactus.png";
import "../stlyes/Contact.scss";
import { useEffect, useState } from "react";
const Contact = () => {
  const [send, setsend] = useState([]);
  ///form data sending
  const senddata = (e) => {
    // const {value,name}=e.target;
    const value = e.target.value;
    const name = e.target.name;
    setsend({ ...send, [name]: value });
    console.log(name, value);
  };
  const createapi = async (e) => {
    e.preventDefault();
    console.log("clicked");
    await fetch("http://localhost:4000/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(send),
      // action: "https://formspree.io/f/xpzepnkw",
      // method: "POST",
    });
    console.log(send, "Send Contact");
    // action = "https://formspree.io/f/xpzepnkw";
    // method = "POST";}
  };
  // const [showNewPage, setShowNewPage] = useState(false);

  // const handleOpenPageButtonClick = () => {
  //   setShowNewPage(true);
  // };

  return (
    <div>
      {" "}
      <div className=".container">
        <div className="des-1 text-center p-0 ">
          <h1 className="mt-3">Contact us</h1>
          <h4 className="mt-3 mb-3">
            Get encouragement and expertise from our coaches, right in your ear
            through our Guided Workouts. <br /> Designed to get you where you
            want to go.
          </h4>
        </div>
        <div className="row">
          <div className="col-6">
            <img src={contact} height={"700px"} width={"100%"} alt="" />
          </div>
          <div className="col-4">
            <div className="contact-form1 bg-light border-radius-3 text-dark p-3 rounded">
              <h5>SEND US A MESSAGE</h5>
              <form
                onSubmit={createapi}
                action="https://formspree.io/f/xpzepnkw"
                method="POST"
              >
                <div class="row">
                  <div class="col">
                    <label htmlFor="">
                      {" "}
                      <h4>First Name</h4>
                    </label>
                    <input
                      onChange={senddata}
                      value={send.first}
                      name="first"
                      type="text"
                      class="form-control"
                      placeholder="First name"
                      // autoComplete="off"
                      // required
                    />
                  </div>
                </div>
                <div className="row">
                  <div class="col">
                    <label>
                      <h4>Last Name </h4>
                    </label>
                    <input
                      onChange={senddata}
                      value={send.sir}
                      name="sir"
                      type="text"
                      class="form-control"
                      placeholder="Last name"
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div class="col ">
                    <label>
                      {" "}
                      <h4>Email</h4>
                    </label>
                    <input
                      onChange={senddata}
                      value={send.email}
                      name="email"
                      type="email"
                      class="form-control"
                      placeholder="Last name"
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col pb-3">
                    <label for="message" class="form-label">
                      <h4>Message</h4>
                    </label>
                    <textarea
                      onChange={senddata}
                      value={send.des}
                      name="des"
                      class="form-control"
                      id="message"
                      rows="3"
                      autoComplete="off"
                      required
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  value="send"
                  className="btn btn-warning  form-control p-3"
                >
                  {/* onClick={createapi} */}
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <button onClick={handleOpenPageButtonClick}>Open Page</button>
        {showNewPage && (
          <div className="new-page">
            <nav className="glassmorphic-nav">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
            </nav>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Contact;
