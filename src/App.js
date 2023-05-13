import React, { useEffect, useState } from "react";
import "./App.css";

const App = ()=>{

  let[num1,setNum1] = useState("")
  let[num2,setNum2] = useState("")
  let[ans,setAnswer] = useState("")
  let [error,setError] = useState("")

  function add()
  {
   
    if(num1=="" || num2=="")
    {
      setError("Number cannot be empty")
      setAnswer("");
      // console.log(ans)
      
    }
    else{
      // console.log("error")
      setAnswer(Number(num1) + Number(num2));
      setError("");
    }
  }
  function sub() {
    if (num1 == "" || num2 == "") {
      setError("Number cannot be empty");
      setAnswer("")
       
    } 
    else if(num1==num2)
    {
      setAnswer("0")
    }
    else {
      setAnswer(Number(num1) - Number(num2));
      setError("");
    }
  }
  function mul() {
    if (num1 == "" || num2 == "") {
      setError("Number cannot be empty");
    setAnswer("");
    } else {
      setAnswer(num1 * num2);
      setError("");
    }
  }
  function divide() {
    if (num1 == "" || num2 == "") {
     setError("Number cannot be empty");
     setAnswer("");
    } else {
      setAnswer(Math.floor(num1 / num2));
      setError("")
    }
  }
  function reset()
  {
    setNum1("")
    setNum2("")
    setAnswer("")
    setError("")
  }

  return (
    <div className="Calculator">
      <h1>React Calculator</h1>
      <br></br>
      <input
        type="number"
        placeholder="Num1"
        onChange={(event) => {
          setNum1(event.target.value);
        }}
        value={num1}
      ></input>
      <br></br>
      <br></br>
      <input
        type="number"
        placeholder="Num2"
        onChange={(event) => {
          setNum2(event.target.value);
        }}
        value={num2}
      ></input>
      <br></br>
      <br></br>
      <button onClick={add}>+</button>
      <button onClick={sub}>-</button>
      <button onClick={mul}>*</button>
      <button onClick={divide}>/</button>
      <button onClick={reset}>C </button>

      {ans && (
        <div>
          <br></br>
          <p style={{ color: "white" }}>Result = {ans}</p>
          <br></br>
          <p style={{ color: "green" }}>Success : Your result Shown above!!</p>
        </div>
      )}
      {error && (
        <div>
          <br></br>
          <p style={{ color: "red" }}>{error}</p>
        </div>
      )}
    </div>
  );
}


export default App;


