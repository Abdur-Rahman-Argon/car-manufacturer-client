import logo from "./logo.svg";
import "./App.css";
import Navber from "./components/Pages/Sheared/Navber";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import SignUp from "./components/Pages/LogIn/SignUp";
import LogIn from "./components/Pages/LogIn/LogIn";
import Profile from "./components/Pages/LogIn/Profile";
import RequreAuth from "./components/Pages/Sheared/RequreAuth";
import Purchase from "./components/Pages/Purchase/Purchase";
import Dashbord from "./components/Pages/Dashboard/Dashbord";
import MyOrder from "./components/Pages/Dashboard/MyOrder";
import AddReview from "./components/Pages/Dashboard/AddReview";
import Update from "./components/Pages/LogIn/Update";
import AllParts from "./components/Pages/AllParts/AllParts";

function App() {
  return (
    <div className="p-1 max-w-7xl mx-auto">
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/allparts" element={<AllParts></AllParts>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route
          path="/purchase"
          element={
            <RequreAuth>
              <Purchase></Purchase>
            </RequreAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequreAuth>
              <Dashbord></Dashbord>
            </RequreAuth>
          }
        >
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
        </Route>
        <Route
          path="/purchase"
          element={
            <RequreAuth>
              <Purchase></Purchase>
            </RequreAuth>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <RequreAuth>
              <Profile></Profile>
            </RequreAuth>
          }
        ></Route>
        <Route
          path="/update"
          element={
            <RequreAuth>
              <Update></Update>
            </RequreAuth>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
