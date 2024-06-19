import ForgotPassword from "./ForgotPassword"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import ResetPassword from "./ResetPassword"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Home"
function App() {

  return (
  <BrowserRouter>
  <Routes>
    <Route path='/signup' element={<SignUp/>}></Route>
    <Route path='/' element={<SignIn/>}></Route>
    <Route path='/signin' element={<SignIn/>}></Route>
    <Route path='/forgotPassword' element={<ForgotPassword/>}></Route>
    <Route path='/resetPassword' element={<ResetPassword/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
  </Routes>
  </BrowserRouter>
  )
}

export default App
