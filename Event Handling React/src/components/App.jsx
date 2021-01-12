import React, { useState } from "react";

function App() {

  const [headingText,setHeading]= useState("Hello");

  const [design, setDesign]=useState({});

  function buttonClick(){
    setHeading("Submitted");
  }
  function mouseOver(){
    setDesign({
      color:"#50a3a2",
      backgroundColor:"black"
    });
  }
  function mouseOut(){
    setDesign({
      color:"#50a3a2",
      backgroundColor:"white"
    })
  }


  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={design} onMouseOut={mouseOut} onMouseOver={mouseOver} onClick={buttonClick}>Submit</button>
    </div>
  );
}

export default App;
