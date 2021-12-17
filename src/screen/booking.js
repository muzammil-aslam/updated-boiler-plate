import React, { useEffect } from "react";
import { Paper } from "@mui/material";
import { useState } from "react";
import {
  auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  database,
  onChildAdded,
  child,
  ref,
  push,
  update,
  set,
} from "../config/route/firebaseconfig";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { secondData } from "../redux/action";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Booking() {
  const [name, setName] = useState();
  const [lastname, setLastName] = useState();
  const [cnic, setCnic] = useState();
  const [phonenumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [password, setpassword] = useState();
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    const obj = {
      name,
      lastname,
      phonenumber,
      email,
      password,
    };
  }

    //   createUserWithEmailAndPassword(auth, obj.email, obj.password)
    //     .then((success) => {
    //       console.log(success);
        //   let uid = success.user.uid;

  //         set(ref(database, `users/${uid}`), obj).then((res) => {
  //           obj.type = "bookingData";
  //           dispatch(bookingdata(obj));
  //           navigate("/");
  //           console.log(res);
  //         });
  //         // ...
  //       })
  //       .catch((error) => {
  //         // const errorCode = error.code;
  //         // const errorMessage = error.message;
  //         // alert('Error',error.message)
  //         // ..
  //       });
  //     console.log(obj);
  //   }
  // }
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       navigate("/");
  //     }
  //   });
  // }, []);

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="khan">
        <div className="body">
          <Paper
            elevation={5}
            sx={{
              textAlign: "center",
              maxWidth: "350px",
              marginLeft: "10px",
              padding: "40px",
              background: "white",
              height: "880px",
              borderRadius: "30px",
            }}
          >
            <div className="change">
              <h1 className="sign">Booking-Page</h1>
              <div className="input">
                <input
                  onChange={(e) => setName(e.target.value)}
                  className="mains"
                  type="text"
                  placeholder="Enter Name"
                />
              </div>

              <div className="input">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="mains"
                  type="email"
                  placeholder="Enter email"
                />
              </div>

              <div className="input">
                <input
                  onChange={(e) => setpassword(e.target.value)}
                  className="mains"
                  type="password"
                  placeholder="Enter password"
                />
              </div>

              <div className="input">
                <input
                  onChange={(e) => setLastName(e.target.value)}
                  className="mains"
                  type="text"
                  placeholder="Enter LastName"
                />
              </div>
              <div className="input">
                <input
                  onChange={(e) => setCnic(e.target.value)}
                  className="mains"
                  type="text"
                  placeholder="Enter CnicNumber"
                />
              </div>
              <div className="input">
                <input
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="mains"
                  type="text"
                  placeholder="Enter PhoneNumber"
                />
              </div>
              {/* <div className="parent-logo">
                <div className="logo">
                  <p className="main-logo">A</p>
                </div>
                <div className="logo">
                  <p className="main-logo">B</p>{" "}
                </div>
                <div className="logo">
                  <p className="main-logo">C</p>{" "}
                </div>
              </div> */}
              <div className="inpute">
                <button className="component">Submit</button>
              </div>

              {error ? (
                <div>
                  <p style={{ color: "red" }}>Fill the Text!</p>
                </div>
              ) : null}
            </div>
          </Paper>
        </div>
      </div>
    </form>
  );
}
