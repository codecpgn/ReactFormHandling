import React, { useState } from "react";


const App = () =>{

const  [fullName, setFullName] = useState({

    fname: "",
    lname: "",
});

   
const inputEvent = (event) =>{
    console.log(event.target.value);
    console.log(event.target.name);
    
    const value =event.target.value;
    const name =event.target.name;

    setFullName((prevValue) => {
        //console.log(prevValue);
        if(name === "fName"){
            return{
            fname: value,
            lname: prevValue.lname,
};
        }else if(name === "lName")
        {
                return{
                fname: prevValue.fname,
                lname: value,
    };

        }

    });

};

const onSubmits = (event) =>{
    event.preventDefault();
   alert("form submitted")
};

 return(
<>
    <div className="main_div">
    <form onSubmit={onSubmits}>
    <div>
        <h1>
        Hello  {fullName.fname} {fullName.lname}
        </h1>
        <input type="text" 
           placeholder="Enter your First Name"
           name="fName"
             onChange={inputEvent} 
             //value={fullName.fname} 

             />

        <br/>

        <input type="text" 
          placeholder="Enter your Last Name"
          name="lName"
          onChange = {inputEvent}
         // value = {fullName.lname} 
         />

        <button type="submit">Click me✔</button>
        </div>
        </form>
    </div>
</>
    );
};
export default App;