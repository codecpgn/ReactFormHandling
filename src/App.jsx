import React, { useState } from "react";


const App = () =>{

const  [name,setName] = useState("");

const inputEvent = (event) =>{
    console.log(event.target.value);
    setName(event.target.value);
};

    return(
  
<>
    <div>
        <h1>Hello  {name}</h1>
        <input type="text" placeholder="Enter your name"
              onChange={inputEvent}
        />

        <button>Click me✔  </button>
    </div>
</>
    );
};
export default App;