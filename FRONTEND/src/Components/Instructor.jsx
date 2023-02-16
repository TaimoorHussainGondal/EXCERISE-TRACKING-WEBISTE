import React from "react";
import "../stlyes/Instructor.scss";
import profile1 from "../images/profile-1.png";
import profile2 from "../images/profile-2.png";
import profile3 from "../images/profile-3.png";
import profile4 from "../images/profile-4.png";
import audio1 from "../audio/audio1.mp3";

const Instructor = () => {
  return (
    <div>
      <div className="container">
        <div className="des-1 text-center mb-3">
          <h3>MEET YOUR</h3>
          <h1 className="mt-3">ASICS Runkeeper Coaches</h1>
          <h4 className="mt-3 mb-3">
            Get encouragement and expertise from our coaches, right in your ear
            through our Guided Workouts. <br /> Designed to get you where you
            want to go.
          </h4>
        </div>

        <div className="row justify-content-around ">
          <div className="col-5 profile-1 d-flex">
            <div className="row ">
              <div className="col-6 ">
                <img
                  src={profile1}
                  alt="profile-1"
                  width={"100%"}
                  height={"300px"}
                  className="img-responsive "
                />
              </div>
              <div className="col-6 ">
                <h1 className="pt-3" color={"blue"}>
                  Coach Matt
                </h1>
                <p className=" pe-3">
                  Coach Matt’s fun-first philosophy keeps runners of all types
                  coming back for more. As an experienced marathoner, he wants
                  to give you the tools you need to tackle any distance.
                </p>
                <button
                  type="button"
                  class="btn btn-primary mb-3"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  View Profile
                </button>
                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                      <div class="modal-body p-0">
                        <div className="top-modal  text-white p-0">
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                          <div className="row ">
                            <div className="col-4">
                              <img
                                src={profile1}
                                alt=""
                                width={"100%"}
                                height={"400px"}
                                className=" img-responsive"
                              />
                            </div>
                            <div className="col-8 desprofile-1 text-center">
                              <h1 className="">Coach Matt Meyer</h1>
                              <p mt-5>
                                RRCA Certified Running Coach and ACE Certified
                                Personal Trainer
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6 profiledes2">
                          <div className="row">
                            <div className="col-2">
                              <p></p>
                            </div>
                            <div className="m-start-0 col-10">
                              <h2>
                                “Whatever progress may look like for you, I am
                                so on board and so behind you.”
                              </h2>
                            </div>
                          </div>

                          <h5 className="mt-3">
                            Coach Matt’s fun-first philosophy keeps runners of
                            all types coming back for more. As an experienced
                            marathoner, he wants to give you the tools you need
                            to tackle any distance.
                          </h5>
                          <h5 className="mt-3">
                            Running changed Matt’s life and he’s committed to
                            sharing that gift with others—no matter where they
                            are in their running journey.
                          </h5>
                        </div>
                        <div className="col-6 second-des1 second-portion">
                          <h6>WORKOUTS</h6>

                          <h5 className="">
                            {" "}
                            <span className="bg-dark guided1  text-white">
                              GUIDED WORKOUT
                            </span>
                          </h5>
                          <h6>Tiny wings</h6>
                          <div className="row">
                            <div className="col-2">
                              <p>29mins .</p>
                            </div>
                            {/* <div className="col-3"><p>.</p></div> */}
                            <div className="col-2">
                              {" "}
                              <p>ALL levels</p>
                            </div>
                            <div className="col-5"></div>
                          </div>

                          <audio controls>
                            <source src={audio1} />
                          </audio>
                          <h6 className="">
                            {" "}
                            <span className="bg-dark guided1 text-white ">
                              GUIDED WORKOUT
                            </span>{" "}
                          </h6>

                          <h6>Tiny wings</h6>
                          <div className="row">
                            <div className="col-2">
                              <p>29mins .</p>
                            </div>
                            <div className="col-3">
                              <p>.</p>
                            </div>
                            <div className="col-2">
                              {" "}
                              <p>ALL levels</p>{" "}
                            </div>
                            <div className="col-5"></div>
                          </div>
                          <audio controls>
                            <source src={audio1} />
                          </audio>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-5 profile-2 d-flex">
            <div className="row ">
              <div className="col-6 ">
                <img
                  src={profile2}
                  alt="profile-2"
                  width={"100%"}
                  height={"300px"}
                  className="img-responsive "
                />
              </div>
              <div className="col-6 ">
                <h1 className="pt-3" color={"blue"}>
                  Coach Julia
                </h1>
                <p className=" pe-3">
                  As a registered yoga teacher and psychotherapist, Coach
                  Julia’s passion helps runners move with a connection to their
                  mind, body and spirit.
                </p>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#juliamodal"
                >
                  View Profile
                </button>
                <div
                  class="modal fade"
                  id="juliamodal"
                  tabindex="-1"
                  aria-labelledby="juliamodalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                      <div class="modal-body p-0">
                        <div className="top-modal  text-white p-0">
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                          <div className="row ">
                            <div className="col-4">
                              <img
                                src={profile2}
                                alt=""
                                width={"100%"}
                                height={"400px"}
                                className=" img-responsive"
                              />
                            </div>
                            <div className="col-8 desprofile-1 text-center">
                              <h1 className="">Coach Julia</h1>
                              <p mt-5>
                                Registered Yoga Teacher and Psychotherapist |
                                500 E-RYT
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6 profiledes2">
                          <div className="row">
                            <div className="col-2">
                              <p></p>
                            </div>
                            <div className="m-start-0 col-10">
                              <h2>“Every minute, every run, a gift.”</h2>
                            </div>
                          </div>

                          <h5 className="mt-3">
                            As a registered yoga teacher and psychotherapist,
                            Coach Julia’s passion helps runners move with a
                            connection to their mind, body and spirit.
                          </h5>
                          <h5 className="mt-3">
                            Her enthusiasm for coaching comes from her belief in
                            running as one of the most incredible tools for
                            self-exploration. For Julia, it’s a privilege to
                            help people access their joy and strength.
                          </h5>
                        </div>
                        <div className="col-6 second-des1 second-portion">
                          <h6>WORKOUTS</h6>

                          <h5 className="">
                            {" "}
                            <span className="bg-dark guided1  text-white">
                              GUIDED WORKOUT
                            </span>
                          </h5>
                          <h6>Race Day Prep: Limitless</h6>
                          <div className="row">
                            <div className="col-2">
                              <p>29mins .</p>
                            </div>
                            {/* <div className="col-3"><p>.</p></div> */}
                            <div className="col-2">
                              {" "}
                              <p>ALL levels</p>
                            </div>
                            <div className="col-5"></div>
                          </div>

                          <audio controls autoPlay>
                            <source src={audio1} />
                          </audio>
                          <h6 className="">
                            {" "}
                            <span className="bg-dark guided1 text-white ">
                              GUIDED WORKOUT
                            </span>{" "}
                          </h6>

                          <h6>Sound Stretch: Hips & Hamstrings</h6>
                          <div className="row">
                            <div className="col-2">
                              <p>29mins .</p>
                            </div>
                            {/* <div className="col-3"><p>.</p></div> */}
                            <div className="col-2">
                              {" "}
                              <p>ALL levels</p>{" "}
                            </div>
                            <div className="col-5"></div>
                          </div>
                          <audio controls>
                            <source src={audio1} />
                          </audio>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row  mt-4 mb-4 justify-content-around ">
          <div className="col-5 profile-3 d-flex">
            <div className="row ">
              <div className="col-6 ">
                <img
                  src={profile3}
                  alt="profile-3"
                  width={"100%"}
                  height={"300px"}
                  className="img-responsive "
                />
              </div>
              <div className="col-6 ">
                <h1 className="pt-3" color={"blue"}>
                  Coach Corrine
                </h1>
                <p className=" pe-3">
                  An experienced distance runner and trainer, Corinne’s workouts
                  will leave you feeling accomplished with a renewed sense of
                  purpose and love for running.
                </p>
                <button
                  type="button"
                  class="btn btn-primary mb-3"
                  data-bs-toggle="modal"
                  data-bs-target="#profile3"
                >
                  View Profile
                </button>
                <div
                  class="modal fade"
                  id="profile3"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                      <div class="modal-body p-0">
                        <div className="top-modal  text-white p-0">
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                          <div className="row ">
                            <div className="col-4">
                              <img
                                src={profile3}
                                alt=""
                                width={"100%"}
                                height={"400px"}
                                className=" img-responsive"
                              />
                            </div>
                            <div className="col-8 desprofile-1 text-center">
                              <h1 className="">Coach Corinne Fitzgerald</h1>
                              <p mt-5>
                                RRCA Certified Running Coach and NSCA Certified
                                Professional Trainer
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6 profiledes2">
                          <div className="row">
                            <div className="col-2">
                              <p></p>
                            </div>
                            <div className="m-start-0 col-10">
                              <h2>
                                "Running isn’t always pretty, but its capability
                                to change your life is incredible!"
                              </h2>
                            </div>
                          </div>

                          <h5 className="mt-3">
                            An experienced distance runner and trainer,
                            Corinne’s workouts will leave you feeling
                            accomplished with a renewed sense of purpose and
                            love for running.
                          </h5>
                          <h5 className="mt-3">
                            Corinne instills her knowledge from racing into
                            everyday training, striving to make everyone a
                            better runner and thriving on helping others reach
                            their full potential.
                          </h5>
                        </div>
                        <div className="col-6 second-des1 second-portion">
                          <h6>WORKOUTS</h6>

                          <h5 className="">
                            {" "}
                            <span className="bg-dark guided1  text-white">
                              GUIDED WORKOUT
                            </span>
                          </h5>
                          <h6>I Am A Runner</h6>
                          <div className="row">
                            <div className="col-2">
                              <p>29mins .</p>
                            </div>
                            {/* <div className="col-3"><p>.</p></div> */}
                            <div className="col-2">
                              {" "}
                              <p>ALL levels</p>
                            </div>
                            <div className="col-5"></div>
                          </div>

                          <audio controls>
                            <source src={audio1} />
                          </audio>
                          <h6 className="">
                            {" "}
                            <span className="bg-dark guided1 text-white ">
                              GUIDED WORKOUT
                            </span>{" "}
                          </h6>

                          <h6>Return To Running</h6>
                          <div className="row">
                            <div className="col-2">
                              <p>29mins .</p>
                            </div>
                            <div className="col-3">
                              <p>.</p>
                            </div>
                            <div className="col-2">
                              {" "}
                              <p>ALL levels</p>{" "}
                            </div>
                            <div className="col-5"></div>
                          </div>
                          <audio controls>
                            <source src={audio1} />
                          </audio>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-5 profile-4 d-flex">
            <div className="row ">
              <div className="col-6 ">
                <img
                  src={profile4}
                  alt="profile-4"
                  width={"100%"}
                  height={"300px"}
                  className="img-responsive "
                />
              </div>
              <div className="col-6 ">
                <h1 className="pt-3" color={"blue"}>
                  Coach Matt
                </h1>
                <p className=" pe-3">
                  Coach Matt’s fun-first philosophy keeps runners of all types
                  coming back for more. As an experienced marathoner, he wants
                  to give you the tools you need to tackle any distance.
                </p>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#profile4"
                >
                  View Profile
                </button>
                <div
                  class="modal fade"
                  id="profile4"
                  tabindex="-1"
                  aria-labelledby="profile4lLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                      <div class="modal-body p-0">
                        <div className="top-modal  text-white p-0">
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                          <div className="row ">
                            <div className="col-4">
                              <img
                                src={profile4}
                                alt=""
                                width={"100%"}
                                height={"400px"}
                                className=" img-responsive"
                              />
                            </div>
                            <div className="col-8 desprofile-1 text-center">
                              <h1 className="">Coach Jess Movold</h1>
                              <p mt-5>
                                RRCA Certified Running Coach and NASM Certified
                                Strength Coach
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6 profiledes2">
                          <div className="row">
                            <div className="col-2">
                              <p></p>
                            </div>
                            <div className="m-start-0 col-10">
                              <h2>
                                "Race day is a showcase of your hard work in
                                training. If you practice this in your training,
                                you will be able to execute this on race day."
                              </h2>
                            </div>
                          </div>

                          <h5 className="mt-3">
                            A veteran runner of more than a decade, Coach Jess
                            is a licensed strength and running coach who is
                            passionate about helping runners perform their best
                            on race day.
                          </h5>
                          <h5 className="mt-3">
                            Jess’s passion for coaching comes from watching
                            runners of all levels go after their goals and
                            conquer them. She loves to coach every kind of race,
                            from the mile to the marathon.
                          </h5>
                        </div>
                        <div className="col-6 second-des1 second-portion">
                          <h6>WORKOUTS</h6>

                          <h5 className="">
                            {" "}
                            <span className="bg-dark guided1  text-white">
                              GUIDED WORKOUT
                            </span>
                          </h5>
                          <h6>Race Day Prep: Limitless</h6>
                          <div className="row">
                            <div className="col-2">
                              <p>29mins .</p>
                            </div>
                            {/* <div className="col-3"><p>.</p></div> */}
                            <div className="col-2">
                              {" "}
                              <p>ALL levels</p>
                            </div>
                            <div className="col-5"></div>
                          </div>

                          <audio controls autoPlay>
                            <source src={audio1} />
                          </audio>
                          <h6 className="">
                            {" "}
                            <span className="bg-dark guided1 text-white ">
                              GUIDED WORKOUT
                            </span>{" "}
                          </h6>

                          <h6>Sound Stretch: Hips & Hamstrings</h6>
                          <div className="row">
                            <div className="col-2">
                              <p>29mins .</p>
                            </div>
                            {/* <div className="col-3"><p>.</p></div> */}
                            <div className="col-2">
                              {" "}
                              <p>ALL levels</p>{" "}
                            </div>
                            <div className="col-5"></div>
                          </div>
                          <audio controls>
                            <source src={audio1} />
                          </audio>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
