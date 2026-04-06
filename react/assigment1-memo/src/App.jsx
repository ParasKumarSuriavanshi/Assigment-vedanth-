import React, { useState } from "react";
import { useMemo } from "react";

function App()
{
  const [fact, setFact] = useState(1);

   function factorial(a)
      {
        if(a <= 1)
        {
          return 1;
        }
        return factorial(a-1)*a
      }


  let count = useMemo(()=>{return factorial(fact)},[fact])

  return (
    <div>
      <input type = "number" onChange={(e)=> setFact(Number(e.target.value))}></input>
      <p>Factorial is {count}</p>
    </div>
  )
}
export default App;