import { Routes, Route } from "react-router"
import WelcomeScreen from "./components/Welcome"
import ProfileSelection from "./components/ProfileSelection"

function App() {


  return (

    <Routes>
      <Route index element={<WelcomeScreen/>} />
      <Route path="/profile" element={<ProfileSelection/>}/>
    </Routes>

  )
}

export default App
