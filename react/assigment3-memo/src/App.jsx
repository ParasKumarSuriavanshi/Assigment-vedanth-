import React from "react";
import { useState, useMemo } from "react";

function App()
{
  const [list,setList] = useState(
 [ {
    item: "apple",
    price: 100
  },
  {
    item: "mango",
    price: 120
  },
  {
    item: "colgate",
    price: 200
  }
  ]
)


const sum = useMemo(()=>{
  let t = 0;
  for(let i = 0 ; i < list.length ; i++)
  {
    t = t + list[i].price;
  }
  return t;
},[list])

return(
  <div>
    {list.map((a,index)=> (<p key = {index}>{a.item} - {a.price}</p>))}
   <h4>Total amount is: {sum}</h4>
  </div>
)

}

export default App;