import React, { useState } from 'react'
import Navbar from '../Utilities/Navbar'
import { useNavigate } from 'react-router-dom'

function ResetPassword() {

    const [ResetPassData,setResetPassData] = useState({
        token:"",
        password:"",
        confirmPassword:""
    })
    const navigate  = useNavigate()

    const generateResetPassToken = (e)=>{
        e.preventDefault()
        const t = localStorage.getItem("userPassReset")
        const token = t.split(",")
        navigator.clipboard.writeText(token[1])
        alert("Password Reset token has been copied to your clipboard, paste it there to create new password")
    }

    const ResetPassHandler = async(e)=>{
        e.preventDefault()
        if(ResetPassData.password !=ResetPassData.confirmPassword){
            alert("Password and confirm password must be same")
            return
          }
        try {
            const response = await fetch("https://localhost:7016/api/reset-password", {
              method: "POST", 
              mode: "cors", 
              cache: "no-cache", 
              credentials: "same-origin", 
              headers: {
                "Content-Type": "application/json",
                
              },
              body: JSON.stringify(ResetPassData), 
            });
            const result = await response.json();
            alert(result.message?result.message:result)
              navigate("/login")
                } catch (error) {
                console.error("Error:", error.message);
                alert(error.message);
              }
    }

  return (
    <>
    <Navbar/>   
    <div className="max-w-md mx-auto p-6 bg-white border border-black rounded-md shadow-md m-20">
    <h2 className="text-2xl font-semibold mb-4">Reset Password</h2>
<form className="max-w-sm mx-auto" onSubmit={ResetPassHandler}>
  <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Token</label>
  <div className="relative">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
        <path d="M10 0C4.5 0 0 5.4 0 8c0 2.7 4.5 8 10 8s10-5.3 10-8c0-2.6-4.5-8-10-8zm0 14c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm-.8-8c-.8 0-1.5.7-1.5 1.5S8.2 8 9.2 8s1.5-.7 1.5-1.5S10.1 6 9.2 6zm-.5 6h-1V9h1v3z"/>
      </svg>
    </div>
    <input required type="text" id="email-address-icon" value={ResetPassData.token} onChange={(e)=>setResetPassData({...ResetPassData,token:e.target.value})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="********"/>
  </div>
  <div className="flex items-center mt-1">
  <button className="bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800 transition duration-150 ease-in-out relative group" onClick={generateResetPassToken}>
    Click here
    <span className="hidden group-hover:inline-block absolute ml-5 text-gray-500 text-xs">
      for reset token
    </span>
  </button>
</div>
  <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark mt-5">Password</label>
  <div className="relative">
  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
        <path d="M10 0C4.5 0 0 5.4 0 8c0 2.7 4.5 8 10 8s10-5.3 10-8c0-2.6-4.5-8-10-8zm0 14c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm-.8-8c-.8 0-1.5.7-1.5 1.5S8.2 8 9.2 8s1.5-.7 1.5-1.5S10.1 6 9.2 6zm-.5 6h-1V9h1v3z"/>
      </svg>
    </div>
    <input required type="password" id="email-address-icon" value={ResetPassData.password} onChange={e=>setResetPassData({...ResetPassData,password:e.target.value})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="*******"/>
  </div>
  <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark mt-5">Confirm Password</label>
  <div className="relative mb-5">
  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
        <path d="M10 0C4.5 0 0 5.4 0 8c0 2.7 4.5 8 10 8s10-5.3 10-8c0-2.6-4.5-8-10-8zm0 14c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm-.8-8c-.8 0-1.5.7-1.5 1.5S8.2 8 9.2 8s1.5-.7 1.5-1.5S10.1 6 9.2 6zm-.5 6h-1V9h1v3z"/>
      </svg>
    </div>
    <input required type="password" id="email-address-icon" value={ResetPassData.confirmPassword} onChange={(e)=>setResetPassData({...ResetPassData,confirmPassword:e.target.value})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="*******"/>
  </div>
  <div>
  <button type="submit" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Reset Password</button>
  </div>
  </form>
  </div>
    </>
  )
}

export default ResetPassword