import React, { useState } from "react";


const App = () =>{

const  [fullName, setFullName] = useState({

    fname: "",
    lname: "",
    email: "",
    Phone: ""
});

   
const inputEvent = (event) =>{
    console.log(event.target.value);
    console.log(event.target.name);
    
    //const value =event.target.value;
    //const name =event.target.name;

    const [value,name] = event.target;
    setFullName((prevValue) => {
        //console.log(prevValue);
        if(name === "fName"){
            return{
              fname: value,
               lname: prevValue.lname,
               email:prevValue.email,
               phone:prevValue.phone,
};
        }else if(name === "lName")
        {
                return{
                fname: prevValue.fname,
                lname: value,
                email:prevValue.email,
                phone:prevValue.phone,
    };

       }else if(name === "email")
       {
                return{
                fname: prevValue.fname,
                lname: prevValue.lname,
                email: value,
                phone: prevValue.phone,
    };

        }else if(name === "phone")
        {
                return{
                fname: prevValue.fname,
                lname: prevValue.lname,
                email:prevValue.email,
                phone:value,
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
        <p>{fullName.email}</p>
        <p>{fullName.phone}</p>
        
        <input 
          type="text" 
           placeholder="Enter your First Name"
           name="fName"
             onChange={inputEvent} 
             value={fullName.fname} 

             />

        <br/>

        <input type="text" 
          placeholder="Enter your Last Name"
          name="lName"
          onChange = {inputEvent}
          value = {fullName.lname} 
         />

        <input type="email" 
          placeholder="Enter your Email"
          name="email"
          onChange = {inputEvent}
          value = {fullName.email} 
          autoCapitalize="off"
         />

        <input type="number" 
          placeholder="Enter your Number"
          name="phone"
          onChange  = {inputEvent}
          value = {fullName.phone} 
         />

        <button type="submit">Click me✔</button>
        </div>
        </form>
    </div>
</>
    );
};
export default App;