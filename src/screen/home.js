import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  auth,
  onAuthStateChanged,
  signOut,
} from "../config/route/firebaseconfig";
import { CircularProgress } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import PrimarySearchAppBar from "../component/navber";
import Contact from "../component/contact";
import Paper from "@mui/material/Paper";
// import Cardes from "../component/card";
import Store from "../component/slider";
import Slider from "../component/slider";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  database,
  ref,
  onChildAdded,
  onValue,
  set,
  update,
} from "../config/route/firebaseconfig";

export default function Home() {
  const [userAuth, setUserAuth] = useState();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  const location = useLocation();

  const navigate = useNavigate();
  const state = useSelector((state) => state);

  let signoutUser = () => {
    signOut(auth);
  };

  useEffect(() => {
    // updateData()
    // <button onClick={() => signOut(auth)}>LogOut</button>

    onAuthStateChanged(auth, (user) => {
      if (!user) {
        setUserAuth(false);
        setLoading(false);
      } else {
        setUserAuth(true);
        setLoading(false);
      }
    });
  }, []);

  return (
    <>
      {loading ? (
        <CircularProgress sx={{ margin: "50%" }} />
      ) : (
        <div>
          <div className="row parent-nav">
            <div className="col-md-6">
              <h1 className="branch">five start</h1>
            </div>
            {userAuth ? (
              <div className="col-md-6 child-nav">
                <Link className="link" to="/#">
                  HOME
                </Link>
                <Link className="link" to="/#">
                  ABOUT
                </Link>
                <Link className="link" to="/#">
                  CONTACT
                </Link>
                <button onClick={signoutUser}>Signout</button>
              </div>
            ) : (
              <div className="col-md-6 child-nav">
                <Link className="link" to="/#">
                  HOME
                </Link>
                <Link className="link" to="/#">
                  ABOUT
                </Link>
                <Link className="link" to="/#">
                  CONTACT
                </Link>
                <Link className="link" to="/Login">
                  LOGIN
                </Link>
                <Link className="link" to="/Sigin">
                  SIGIN
                </Link>
              </div>
            )}
          </div>
          <div className="villa">
            <div>
              <div className=" col-md-12">
                <img
                  className="resort"
                  src="https://wallpaperaccess.com/full/2690606.jpg"
                />
              </div>
              <div className=" col-md-12 myclass">
                <h1 className="hotel">Welcome to Villa resort </h1>
                <p className="hotels">
                  Discover our world-class hotel & restaurant resort.
                </p>
                <div className="cover">
                  <button className="beauty">EXPLORE THE BEAUTY</button>
                  <button className="down">DOWNLODE</button>
                </div>
              </div>
            </div>
          </div>
          <div className="container passing">
            <div className="row">
              <div className="col-md-3">
                <Paper
                  elevation={6}
                  style={{
                    marginTop: "10px",
                    marginLeft: "10px",
                    padding: "40px",
                  }}
                >
                  <img
                    src="http://www.bedbreakfast.ee/wp-content/uploads/2016/10/hotel-room.jpg"
                    width="100%"
                  />
                  <div className="club">
                    <h5 className="wines">Food & Wines</h5>
                    <Link className="link" to="/Booking">
                      Booking-Now
                    </Link>
                    <p>
                      <StarIcon className="icon" />
                      <StarIcon className="icon" />
                      <StarIcon className="icon" />
                      <StarIcon className="icon" />
                      <StarIcon className="icon" />
                    </p>
                  </div>
                </Paper>
              </div>
              <div className="col-md-3">
                <Paper
                  elevation={6}
                  style={{
                    marginTop: "10px",
                    marginLeft: "10px",
                    padding: "40px",
                  }}
                >
                  <img
                    src="https://preview.colorlib.com/theme/villa/img/ximg_2.jpg.pagespeed.ic.yBuLJVQ1j1.webp"
                    width="100%"
                  />
                  <div className="club">
                    <h5 className="wines">Resort & Spa</h5>
                    <p>
                      <StarIcon className="icon" />
                      <StarIcon className="icon" />
                      <StarIcon className="icon" />
                      <StarIcon className="icon" />
                      <StarIcon className="icon" />
                    </p>
                  </div>
                </Paper>
              </div>
              <div className="col-md-3">
                <Paper
                  elevation={6}
                  style={{
                    marginTop: "10px",
                    marginLeft: "10px",
                    padding: "40px",
                  }}
                >
                  {" "}
                  <img
                    src="https://preview.colorlib.com/theme/villa/img/ximg_4.jpg.pagespeed.ic.I0r8OjnSwF.webp"
                    width="100%"
                  />
                  <div className="club">
                    <h5 className="wines">Hotel Rooms</h5>
                    <p>
                      <StarIcon className="icon" />
                      <StarIcon className="icon" />
                      <StarIcon className="icon" />
                      <StarIcon className="icon" />
                      <StarIcon className="icon" />
                    </p>
                  </div>
                </Paper>
              </div>
              <div className="col-md-3">
                <Paper
                  elevation={6}
                  style={{
                    marginTop: "10px",
                    marginLeft: "10px",
                    padding: "40px",
                  }}
                >
                  <img
                    src="https://preview.colorlib.com/theme/villa/img/ximg_5.jpg.pagespeed.ic.Jt_ll7dhGs.webp"
                    width="100%"
                  />
                  <div className="club">
                    <h5 className="wines">Yacht Club</h5>
                    <p>
                      <StarIcon className="icon" />
                      <StarIcon className="icon" />
                      <StarIcon className="icon" />
                      <StarIcon className="icon" />
                      <StarIcon className="icon" />
                    </p>
                  </div>
                </Paper>
              </div>
            </div>
          </div>
          <div className="container life">
            <div className="row">
              <div className="col-md-12">
                <h1 className="enjoy">
                  A gorgeous place to <br /> enjoy your life.
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                  dolor, iusto doloremque quo
                </p>
                <p>
                  odio repudiandae sunt eveniet? Enim facilis laborum voluptate
                  id porro, culpa maiores{" "}
                </p>
                <p>quis, blanditiis laboriosam alias. Sed.</p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Slider />
              </div>
            </div>
          </div>
          <div className="container life">
            <div className="row">
              <div className="col-md-12">
                <h1 className="enjoy">Recent Blog Post.</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                  dolor, iusto doloremque quo
                </p>
                <p>
                  odio repudiandae sunt eveniet? Enim facilis laborum voluptate
                  id porro, culpa maiores
                </p>
                <p>quis, blanditiis laboriosam alias. Sed.</p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <img
                  src="https://preview.colorlib.com/theme/villa/img/ximg_1.jpg.pagespeed.ic.J6oGuZaBAT.webp"
                  width="70%"
                />
                <h5 className="wines">
                  Five Reasons to Stay at Villa <br /> Resort
                </h5>
              </div>
              <div className="col-md-4">
                <img
                  src="https://preview.colorlib.com/theme/villa/img/ximg_2.jpg.pagespeed.ic.yBuLJVQ1j1.webp"
                  width="70%"
                />
                <h5 className="wines">
                  Five Reasons to Stay at Villa <br /> Resort
                </h5>
              </div>
              <div className="col-md-4">
                <img
                  src="https://preview.colorlib.com/theme/villa/img/ximg_3.jpg.pagespeed.ic.BSclDQoYx2.webp"
                  width="70%"
                />
                <h5 className="wines">
                  Five Reasons to Stay at Villa <br /> Resort
                </h5>
              </div>
            </div>
          </div>
          <div className="container life">
            <div className="row">
              <div className="col-md-12">
                <h1 className="enjoy">Testimonial</h1>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="iste">
                  <img
                    className="solution"
                    src="https://preview.colorlib.com/theme/villa/img/xperson_1.jpg.pagespeed.ic._EwHWVA2he.webp"
                    width="30%"
                  />
                </div>
                <p className="tempore">
                  “Et quidem, impedit eum fugiat excepturi iste aliquid
                  suscipit, tempore, delectus rem soluta voluptatem distinctio
                  sed dolores, magni fugit nemo cum expedita. Totam a
                  accusantium sunt aut autem placeat officia.”— Jean Smith
                </p>
              </div>
              <div className="col-md-4">
                <div className="iste">
                  <img
                    className="solution"
                    src="https://preview.colorlib.com/theme/villa/img/xperson_2.jpg.pagespeed.ic.yBS2tsLP0a.webp"
                    width="30%"
                  />
                </div>
                <p className="tempore">
                  “Et quidem, impedit eum fugiat excepturi iste aliquid
                  suscipit, tempore, delectus rem soluta voluptatem distinctio
                  sed dolores, magni fugit nemo cum expedita. Totam a
                  accusantium sunt aut autem placeat officia.”— Jean Smith
                </p>
              </div>
              <div className="col-md-4">
                <div className="iste">
                  <img
                    className="solution"
                    src="https://preview.colorlib.com/theme/villa/img/xperson_3.jpg.pagespeed.ic.vkYYFTif7f.webp"
                    width="30%"
                  />
                </div>
                <p className="tempore">
                  “Et quidem, impedit eum fugiat excepturi iste aliquid
                  suscipit, tempore, delectus rem soluta voluptatem distinctio
                  sed dolores, magni fugit nemo cum expedita. Totam a
                  accusantium sunt aut autem placeat officia.”— Jean Smith
                </p>
              </div>
            </div>
          </div>
          <div className=" contact">
            <div className="row ">
              <div className="col-md-3">
                <p className="term">About Us</p>
                <p className="term">Terms & Conditions</p>
                <p className="term">Privacy Policy</p>
                <p className="term">Help</p>
                <p className="term">Rooms</p>
              </div>
              <div className="col-md-3">
                <p className="term">Our Location</p>
                <p className="term">The Hosts</p>
                <p className="term">About</p>
                <p className="term">Contact</p>
                <p className="term">Restaurant</p>
              </div>
              <div className="col-md-3">
                <p className="term">Address:</p>
                <p className="term">
                  98 West 21th Street, Suite 721 New <br /> York NY 10016
                </p>
                <p className="term">
                  Phone:
                  <br />
                  (+1) 435 3533
                </p>
                <p className="term">
                  Email:
                  <br />
                  info@yourdomain.com
                </p>
              </div>
              <div className="col-md-3">
                <p className="term">Sign up for our newsletter</p>
                <input
                  className="inp"
                  type="text"
                  placeholder="Enter your Email"
                />
              </div>
              <hr />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
