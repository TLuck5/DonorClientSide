import React, { useState } from 'react'
import Navbar from '../Utilities/Navbar'
import { useNavigate } from 'react-router-dom'

export default function ForgotPassword() {
  const[fpdata,setfpdata] = useState("")
  const navigate = useNavigate()
  const fbSubmithandler = async(e)=>{
    e.preventDefault()
    try {
      const response = await fetch("https://localhost:7016/api/forgot-password", {
        method: "POST", 
        mode: "cors", 
        cache: "no-cache", 
        credentials: "same-origin", 
        headers: {
          "Content-Type": "application/json",
          
        },
        body: JSON.stringify(fpdata), 
      });
      const result = await response.json();
      const {email,passwordResetToken} = result.forgotPassData
      localStorage.setItem("userPassReset" , [email,passwordResetToken])
      alert(result.message?result.message:result)
        navigate("/reset-password")
          } catch (error) {
          alert(error.message?error.message:error);
          return
        }
  }

  return (
    <>
    <Navbar/>
    <div className="max-w-md mx-auto p-6 bg-white border border-black rounded-md shadow-md m-20">
    <h2 className="text-2xl font-semibold mb-4">Forgot Password</h2>
<form className="max-w-sm mx-auto" onSubmit={fbSubmithandler}>
  <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Email</label>
  <div className="relative">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
      </svg>
    </div>
    <input required type="text" id="email-address-icon" value={fpdata} onChange={e=>setfpdata(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com"/>
  </div>
  <button type="submit" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-5">Send</button>
  </form>
  </div>
    </>
  )
}
