import React from "react";
import { useState, useMemo, useCallback } from "react";

function App()
{
  const [text, setText] = useState("");

  const a = useCallback(()=>{
    return alert(text)
  },[text])

  return(
    <div>
      <input type = "text" onChange={(e)=>setText(e.target.value)}></input><br></br>
      <button onClick = {a}>alert</button>
    </div>
  )
}

export default App;