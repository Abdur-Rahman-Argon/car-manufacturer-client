import logo from "./logo.svg";
import "./App.css";
import Navber from "./components/Pages/Sheared/Navber";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import SignUp from "./components/Pages/LogIn/SignUp";
import LogIn from "./components/Pages/LogIn/LogIn";
import Profile from "./components/Pages/LogIn/Profile";
import RequreAuth from "./components/Pages/Sheared/RequreAuth";

function App() {
  return (
    <div className="p-1 max-w-7xl mx-auto">
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route
          path="/profile"
          element={
            <RequreAuth>
              <Profile></Profile>
            </RequreAuth>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
