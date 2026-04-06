import React, { useRef, useState } from "react";

function App() {
  const renderCount = useRef(0); 
  const [count, setCount] = useState(0);


  renderCount.current += 1;

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment State</button>
      <h3>Rendered: {renderCount.current} </h3>
    </div>
  );
}

export default App;