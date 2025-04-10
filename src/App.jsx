import { Routes, Route } from "react-router"
import WelcomeScreen from "./components/Welcome"
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
    <div className="bg-blue-500 text-white p-4 rounded">
  This should have Tailwind styling
</div></>


  )
}

export default App
