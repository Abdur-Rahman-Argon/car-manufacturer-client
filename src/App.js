import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
import MakeAdmin from "./components/Pages/Dashboard/MakeAdmin";
import ManageProducts from "./components/Pages/Dashboard/ManageProducts";
import ManageAllOrders from "./components/Pages/Dashboard/ManageAllOrders";
import AddProduct from "./components/Pages/Dashboard/AddProduct";
import RequreAdmin from "./components/Pages/Sheared/RequreAdmin";
import NotFound from "./components/Pages/Sheared/NotFound";
import Payment from "./components/Pages/Dashboard/Payment";

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
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="makeadmin" element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path="addproduct" element={<AddProduct></AddProduct>}></Route>
          <Route
            path="manageproduct"
            element={<ManageProducts></ManageProducts>}
          ></Route>
          <Route
            path="manageallorder"
            element={<ManageAllOrders></ManageAllOrders>}
          ></Route>
        </Route>
        <Route
          path="/purchase/:partsId"
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
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
