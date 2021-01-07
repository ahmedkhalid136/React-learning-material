import React from "react";
import Heading from "./Heading"
import Login from "./Login";

var isLoggedIn = false;

function conditionInput(){
  if(isLoggedIn === true){
    return  <Heading name="Ahmed"/>;
  }
  else{
    return  <Login />;
}
}

function App() {
  return (
    <div className="container">
     {conditionInput()}
    </div>
  );
}

export default App
