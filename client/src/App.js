import React from "react";
import Button from "@material-ui/core/Button";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/NavBar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Register from "./components/Register";
function App() {
  return (
    <div className="App">
      {/* <Welcome></Welcome> */}
      {/* <Login></Login> */}
      <Register></Register>
    </div>
  );
}

export default App;
