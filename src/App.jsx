import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Layout/navbar";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
}

export default App;
