import React, { useState } from "react";


const App = () =>{

const  [name,setName] = useState("");

const  [lastName,setLastName] = useState("");

const [fullName, setFullName] = useState("");

const [lastNamenew, setLastNameNew] = useState("");


const onSubmits = (event) =>{
    event.preventDefault();
    setFullName(name);
    setLastNameNew(lastName);
};
   
const inputEvent = (event) =>{
    console.log(event.target.value);
    setName(event.target.value);
};
const inputEventTwo =(event) =>{
    setLastName(event.target.value);
}
 return(
<>
    <div className="main_div">
    <form onSubmit={onSubmits}>
    <div>
        <h1>
        Hello  {fullName} {lastNamenew}
        </h1>
        <input type="text" 
           placeholder="Enter your First Name"
             onChange={inputEvent} value={name} />

        <br/>

        <input type="text" 
          placeholder="Enter your Last Name"
          onChange = {inputEventTwo}
          value = {lastName} />

        <button type="submit">Click me✔</button>
        </div>
        </form>
    </div>
</>
    );
};
export default App;