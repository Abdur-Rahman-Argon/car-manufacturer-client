import logo from "./logo.svg";
import "./App.css";
import Navber from "./components/Pages/Sheared/Navber";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import SignUp from "./components/Pages/LogIn/SignUp";
import LogIn from "./components/Pages/LogIn/LogIn";
import Profile from "./components/Pages/LogIn/Profile";

function App() {
  return (
    <div className="App">
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
      </Routes>
    </div>
  );
}

export default App;
