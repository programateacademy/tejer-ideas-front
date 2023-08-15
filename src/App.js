import React from "react";
import Header from "./Components/header/header";
import NavBar from "./Components/nav/nav";
import Home from "./Components/home/home"

function WebContent() {
  return (
    <>
    <div className="circle1"></div>
    <div className="circle2"></div>
    <Header/>
    {
      <NavBar />
     

    }
    </>
  )
}
export default WebContent