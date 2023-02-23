import { useState } from 'react';

export default () => {
  // create a variable and a method to modify that var
  // useState(0) initializes that variable with a value 0
  const [count, setCount] = useState(0)
  return (
    // <button className="outline" onClick={()=>setCount(count + 1)}>Supported {count}</button>

   /* 
    <button className="outline" onClick={()=>setCount(count + 1)}>
      {
        (()=>{
          if (count === 0){
            return "Click to support"
          }else{
            return `Supported ${count} times`
          }
        })()
      }
    </button>
    */
    <button className="outline" onClick={()=>setCount(count + 1)}>
      {
        count === 0 ? "Click to support" : `Supported ${count} times`
      }
    </button>
  )

}