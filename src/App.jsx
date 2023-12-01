import { Route, Routes } from "react-router-dom"
import Login from "./Components/Login"
import Register from "./Components/Register"
import Home from "./Utilities/Home"
import ForgotPassword from "./Components/ForgotPassword"
import Verification from "./Components/Verification"
import ResetPassword from "./Components/ResetPassword"
import MainPage from "./Pages/MainPage"
import AddDonor from "./Pages/AddDonor"
import DonorLists from "./Pages/DonorLists"
import DonorInfo from "./Pages/DonorInfo"

function App() {

  return (
    <>
    <Routes>
      <Route element = {<Home/>} path="/"/>
      <Route element = {<Register/>} path="/register"/>
      <Route element = {<Login/>} path="/login"/>
      <Route element = {<ForgotPassword/>} path="/forgot-password"/>
      <Route element = {<Verification/>} path="/verification"/>
      <Route element = {<ResetPassword/>} path="/reset-password"/>
      <Route element = {<MainPage/>} path="/mainPage"/>
      <Route element = {<AddDonor/>} path="/Add-donor"/>
      <Route element={<DonorLists/>} path="/Donor-lists"/>
      <Route element={<DonorInfo/>} path="/Donor-Info/:id"/>
    </Routes>
    </>
  )
}

export default App
