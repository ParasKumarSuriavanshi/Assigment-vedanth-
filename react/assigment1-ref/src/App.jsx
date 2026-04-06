import React from "react";
import { useState,useMemo,useCallback,useRef,  useEffect } from "react";

function App()
{
  const a = useRef();
  useEffect(()=>{
    a.current.focus()
  })

  const b = () =>{
    a.current.focus();
  }

  return (
    <div>
      <input type = "text" ref = {a}></input><br/>
      <button onClick = {b}>Focus</button>
    </div>
  )
}

export default App;