import "./App.scss";
import Navbar from "./common/navbar/Navbar";
import { Outlet, Router } from "react-router-dom";

function App() {
  return (
    <div className="layout">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
