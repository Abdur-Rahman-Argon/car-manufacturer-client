import logo from "./logo.svg";
import "./App.css";
import Navber from "./components/Pages/Sheared/Navber";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
