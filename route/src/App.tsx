import { Route, Routes } from "react-router-dom"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Protective from "./components/Protective"


const App = () => {
  return (
    <div>
      <Routes>
          <Route path="/register" element={<Register/>}/> 
          <Route path="/login" element={<Login/>}/> 
          <Route path="/" element={<Protective>
            <Dashboard/>
          </Protective>}/> 
      </Routes>
    </div>
  )
}

export default App
