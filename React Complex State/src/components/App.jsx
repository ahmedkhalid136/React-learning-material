import React, { useState } from "react";

function App() {

  const [fullName, setFullName] = useState({
    fname:"",
    lname:""
  })

  function handleChange(event){
    // const [name,value] = event.target;
    const {name,value}=event.target;

      setFullName( (preValue)=>{
        if(name==="fName"){
          return( {
            fname:value,
            lname:preValue.lname
          });
        }
        else if(name==="lName"){
          return( {
            fname:preValue.fname,
            lname:value
          });
        }
      } );
    
  }

  return (
    <div className="container">
      <h1>Hello {fullName.fname} {fullName.lname}</h1>
      <form>
        <input onChange={handleChange}  name="fName" placeholder="First Name" />
        <input onChange={handleChange}  name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
