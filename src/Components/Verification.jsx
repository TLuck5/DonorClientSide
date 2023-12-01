import React, { useState } from 'react'
import Navbar from '../Utilities/Navbar';
import { useNavigate } from 'react-router-dom';

export default function Verification() {

  const [tokenData,settokenData] = useState("")
  const navigate = useNavigate()
  const handleVerificationToken = async(e)=>{
    e.preventDefault();
    try {
      const response = await fetch("https://localhost:7016/api/verify", {
        method: "POST", 
        mode: "cors", 
        cache: "no-cache", 
        credentials: "same-origin", 
        headers: {
          "Content-Type": "application/json",
          
        },
        body: JSON.stringify(tokenData), 
      });
      const result = await response.json();
      if(result=="Invalid Token"){
        alert(result.message?result.message:result)
        return
      }
      alert(result.message?result.message:result)
        navigate("/login")
          } catch (error) {
          console.error("Error:", error.message);
          alert(error.message);
          return
        }
  }

  const getverificationCode = (e)=>{
    e.preventDefault();
    const t = localStorage.getItem("userdetail")
    const token = t.JwtToken
    navigator.clipboard.writeText(token) 
    alert("Verification code has been copied, paste the code here")    
  }

  return (
     <>
     <Navbar/>
    <div className="max-w-md mx-auto p-6 bg-white border border-black rounded-md shadow-md m-20">
    <h2 className="text-2xl font-semibold mb-4">Verification Window</h2>
<form className="max-w-sm mx-auto" onSubmit={handleVerificationToken}>
  <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Verification Token</label>
  <div className="relative">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
        <path d="M10 0C4.5 0 0 5.4 0 8c0 2.7 4.5 8 10 8s10-5.3 10-8c0-2.6-4.5-8-10-8zm0 14c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm-.8-8c-.8 0-1.5.7-1.5 1.5S8.2 8 9.2 8s1.5-.7 1.5-1.5S10.1 6 9.2 6zm-.5 6h-1V9h1v3z"/>
      </svg>
    </div>
    <input required type="text" id="email-address-icon" value={tokenData} onChange={e=>settokenData(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="***********"/>
  </div>
  <div className='flex justify-between'>
  <button type="submit" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-5">Send</button>
  <button className="text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-5" onClick={getverificationCode}>Click here to get your verification code</button>
</div>
  </form>
  </div>
    </>
  )
}
