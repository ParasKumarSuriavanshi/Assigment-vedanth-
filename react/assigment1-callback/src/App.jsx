import React, { useMemo } from "react";
import { useState , useCallback } from "react";

function App()
{
  console.log("parent")
  const [count , setCount] = useState(0);

  const increment = useCallback(()=>{
    setCount((p)=> p+1)
  },[])

  const decrement = useCallback(()=>{
    setCount((p)=> p-1)
  },[])

  return(
    <div>
      <h1>Count {count}</h1>
      <M increment = {increment} decrement = {decrement}></M>
    </div>
  )
}

const M = React.memo(function Buttonss(props)
{
  console.log("child")
  return(
    <div>
      <button onClick={props.increment}>Increment</button>
      <button onClick = {props.decrement}>Decrement</button>
    </div>
  )
}
)

export default App;