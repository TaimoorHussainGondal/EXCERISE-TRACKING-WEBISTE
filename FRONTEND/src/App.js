import "./App.css";
import React from "react";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Workout from "./Components/Workout";
import Instructor from "./Components/Instructor";
import Aboutus from "./Components/Aboutus";
import Footer from "./Components/Footer";
import Contactus from "./Components/Contactus";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/workout" element={<Workout />} />
          <Route path="/instructor" element={<Instructor />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
