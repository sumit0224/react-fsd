import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Layout from "./component/Layout"


const App = () => {
  return (
    <div>

      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
        <Route path="/about" element={<><h1>hello react about</h1></>} />
        <Route path="/service" element={<><h1>hello react service</h1></>} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/contact" element={<><h1>hello react contact</h1></>} />

      </Routes>
    </div>
  )
}

export default App
