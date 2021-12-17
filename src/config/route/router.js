import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../../screen/home";
import Login from "../../screen/login";
import Signin from "../../screen/sigin";
import Booking from "../../screen/booking";
export default function Approuters() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </div>
    </Router>
  );
}

//  Register Login Logout
//  SignUp SignIn SignOut
