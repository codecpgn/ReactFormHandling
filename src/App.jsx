import React, { useState } from "react";


const App = () =>{

const  [name,setName] = useState("");
const [Fullname, setFullName] = useState("");
const inputEvent = (event) =>{
    console.log(event.target.value);
    setName(event.target.value);
};

const onSubmit = () =>{
    
    setFullName(name);
}
    return(
  
<>
    <div>
        <h1>Hello  {Fullname}</h1>
        <input type="text" placeholder="Enter your name"
              onChange={inputEvent}
        />

        <button onClick={onSubmit}>Click me✔  </button>
    </div>
</>
    );
};
export default App;