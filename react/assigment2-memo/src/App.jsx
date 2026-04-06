import React, { use } from "react";
import { useMemo } from "react";
import { useState } from "react";



function App()
{
  const [filter,setFilter] = useState("");  
  const[list, setList] = useState([
  "React is amazing",
  "I love JavaScript",
  "useMemo improves performance"
])

const filtered = useMemo(()=>{
    return list.filter((item)=>
    item.includes(filter)
    )
},[filter])



return(
    <div>
        <input type = "text" onChange={(e)=> setFilter(e.target.value) } />
        {
            filtered.map((a,index)=> (<p key={index}>{a}</p>))
        } 
    </div>
    )
}

export default App;