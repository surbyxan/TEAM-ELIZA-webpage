import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import { Expo } from "./pages/Expo";


function App() {

  return (
   <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/expo" element={<Expo/>} />
        </Routes>
      </BrowserRouter>
   </>
  )
}

export default App
