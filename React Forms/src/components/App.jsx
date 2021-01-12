import React, { useState } from "react";

function App() {

  // const array=["Ahmed","Jibran","Zain"];

  
  // const [msg,setMsg]=useState("");

  var value="";

  const [name,setName]=useState("")
  function showText(event){
    // setMsg("");
    // array.forEach(function(element){
    //   if(event.target.value === element){
    //     setMsg("User Name Already Taken");
    //   }

    //   setName(event.target.value);
    // });
    value=event.target.value;
  }
  function buttonClick(event){
    setName(value);
    event.preventDefault(); 
  }

  return (
    <form action="">
    <div className="container">
      <h1>Hello {name}</h1>
      <input name="Name" onChange={showText} type="text" placeholder="What's your name?" />
      <button onClick={buttonClick}>Submit</button>
      {/* <span>{msg}</span> */}
    </div>
    </form>
  );
}

export default App;
