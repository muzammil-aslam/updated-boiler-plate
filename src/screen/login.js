import { Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  auth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "../config/route/firebaseconfig";
import {
  database,
  ref,
  onChildAdded,
  onValue,
  set,
} from "../config/route/firebaseconfig";

import { CircularProgress } from "@mui/material";
import { useDispatch } from "react-redux";
import { fristData } from "../redux/action";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmition = (e) => {
    e.preventDefault();

    let dataObj = {
      email,
      password,
    };
    if (!dataObj.email || !dataObj.password) {
      setError(true);
    } else {
      signInWithEmailAndPassword(auth, dataObj.email, dataObj.password)
        .then((userCredential) => {
          const userUid = userCredential.user.uid;

          onValue(ref(database, `users/${userUid}`), (snapshot) => {
            const data = snapshot.val();

            navigate("/", { state: data });
            dataObj.type = "loginData";
            dispatch(fristData(data));
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage, errorCode);
        });
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      } else {
        setLoading(false);
      }
    });
  }, []);

  return (
    <>
      {loading ? (
        <CircularProgress sx={{ margin: "50%" }} />
      ) : (
        <>
          {/* <form onSubmit={(e)=>handleSubmition(e)}> */}
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
                  height: "600px",
                  borderRadius: "30px",
                }}
                children={
                  <form onSubmit={(e) => handleSubmition(e)}>
                    <div className="change">
                      <h1 className="login">LOGIN</h1>

                      <div className="styling">
                        <p className="heading">username:</p>
                        <input
                          className="main"
                          onChange={(e) => setEmail(e.target.value)}
                          type="Email"
                          placeholder="UserEmail"
                        />
                      </div>
                      <div className="styling">
                        <p className="headins">userpassword:</p>
                        <input
                          className="main"
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          placeholder="UserPassword"
                        />
                      </div>
                      <div className="stylinge">
                        <button className="main-bat">login</button>
                        <p className="para">or Login with</p>
                      </div>

                      {error ? (
                        <div>
                          <p style={{ color: "red" }}>fill the text!</p>
                        </div>
                      ) : null}
                    </div>
                    <div className="parent-logo">
                      <div className="logo">
                        <p className="main-logo">A</p>
                      </div>
                      <div className="logo">
                        <p className="main-logo">B</p>{" "}
                      </div>
                      <div className="logo">
                        <p className="main-logo">C</p>{" "}
                      </div>
                    </div>

                    <Link to="/signin">
                      <div className="styling">
                        <button className="main-bat">or-sign Up with</button>
                      </div>
                    </Link>
                  </form>
                }
              />
            </div>
          </div>
          {/* </form> */}
        </>
      )}
    </>
  );
}
