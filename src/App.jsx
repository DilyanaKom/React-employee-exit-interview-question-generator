import { Routes, Route } from "react-router"
import WelcomeScreen from "./components/welcome/Welcome"
import ProfileSelection from "./components/ProfileSelection"
import Questions from "./components/Questions"

function App() {


  return (
<>
<Routes>
      <Route index element={<WelcomeScreen/>} />
      <Route path="/profile" element={<ProfileSelection/>}/>
      <Route path="/questions" element={<Questions/>}/>
    </Routes>
</>


  )
}

export default App
