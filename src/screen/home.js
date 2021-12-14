import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, onAuthStateChanged } from "../config/route/firebaseconfig";
import { CircularProgress } from "@mui/material";
import { signOut } from "@firebase/auth";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import PrimarySearchAppBar from "../component/navber";
import Cardes from "../component/card";
import Store from "../component/slider";
import {
  database,
  ref,
  onChildAdded,
  onValue,
  set,
  update,
} from "../config/route/firebaseconfig";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  const location = useLocation();

  const navigate = useNavigate();
  const state = useSelector((state) => state);

  useEffect(() => {
    // updateData()

    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
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
          <div>
            <PrimarySearchAppBar />

            <div style={{ marginTop: "20px", marginLeft: "20px" }}>
              <Cardes />
            </div>

            <button onClick={() => signOut(auth)}>LogOut</button>
          </div>
        </>
      )}
    </>
  );
}
