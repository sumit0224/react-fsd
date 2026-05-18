

import { useEffect } from "react"
import WeatherSearch from "./components/WeatherSearch"


const App = () => {

  
  return (
    <div className="w-screen h-screen bg-blue-200 flex justify-center items-center flex-col gap-5">
      <h1 className="text-5xl text-blue-700 font-bold">Weather APP</h1>
      <WeatherSearch />
      
    </div>
  )
}

export default App
