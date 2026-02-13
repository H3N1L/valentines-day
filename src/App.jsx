import { useState } from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Yes from "./pages/Yes.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="main-content">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Yes" element={<Yes/>}/>
        </Routes>
    </main>
  )
}
export default App
