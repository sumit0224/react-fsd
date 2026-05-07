import { useState } from "react"
function App() {
  const [count, setCount] = useState(5)
  function plus() {
    if(count<20){
      setCount(count + 5)
    }
  }
  function minus (){

    if(count >0){
      setCount(count-1)
    }

  }

  return (
    <div >
      <h1>counter : {count}</h1>
      <button onClick={plus}>plus</button>
      <button onClick={minus}>minus</button>
    </div>
  )

}

export default App

