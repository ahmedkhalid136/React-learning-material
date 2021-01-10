import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString().substring(0,7);
  // console.log(time);
  let [latest,setTime]=useState(time);
  console.log(latest);
  

  function getTime(){
    let now = new Date().toLocaleTimeString().substring(0,7);
    setTime(now); 
  }
  setInterval(getTime,1000);

  return (
    <div className="container">
      <h1>{latest}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
