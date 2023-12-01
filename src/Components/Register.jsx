import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../Utilities/Navbar';

function Register() {
  const [registerdata,setregisterdata] = useState({
    email:"",
    password:"",
    confirmPassword:""
  })
  const navigate = useNavigate();

  async function submitHandler(e) {
    e.preventDefault();
    if(registerdata.password != registerdata.confirmPassword){
      alert("Password and confirm password must be same")
      return
    }
    try {
  const response = await fetch("https://localhost:7016/api/register", {
    method: "POST", 
    mode: "cors", 
    cache: "no-cache", 
    credentials: "same-origin", 
    headers: {
      "Content-Type": "application/json",
      
    },
    redirect: "follow", 
    referrerPolicy: "no-referrer", 
    body: JSON.stringify(registerdata), 
  });
  const result = await response.json();

  alert(result.message)
  let {Email,VerificationToken} = result.User;
  localStorage.setItem("User",[Email,VerificationToken])
  navigate("/login")
      } catch (error) {
      console.error("Error:", error);
      alert(error.message);
      return
    }
    
  }

  return (
    <>
    <Navbar/>
    <div className="max-w-md mx-auto p-6 bg-white border border-black rounded-md shadow-md m-20">
    <h2 className="text-2xl font-semibold mb-4">Registration</h2>
<form className="max-w-sm mx-auto" onSubmit={submitHandler}>
  <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
  <div className="relative">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
      </svg>
    </div>
    <input required type="text" id="email-address-icon" value={registerdata.email} onChange={(e)=>setregisterdata({...registerdata,email:e.target.value})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com"/>
  </div>
  <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5">Password</label>
  <div className="relative">
  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
        <path d="M10 0C4.5 0 0 5.4 0 8c0 2.7 4.5 8 10 8s10-5.3 10-8c0-2.6-4.5-8-10-8zm0 14c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm-.8-8c-.8 0-1.5.7-1.5 1.5S8.2 8 9.2 8s1.5-.7 1.5-1.5S10.1 6 9.2 6zm-.5 6h-1V9h1v3z"/>
      </svg>
    </div>
    <input required type="password" id="email-address-icon" value={registerdata.password} onChange={e=>setregisterdata({...registerdata,password:e.target.value})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="*******"/>
  </div>
  <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5">Confirm Password</label>
  <div className="relative mb-5">
  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
        <path d="M10 0C4.5 0 0 5.4 0 8c0 2.7 4.5 8 10 8s10-5.3 10-8c0-2.6-4.5-8-10-8zm0 14c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm-.8-8c-.8 0-1.5.7-1.5 1.5S8.2 8 9.2 8s1.5-.7 1.5-1.5S10.1 6 9.2 6zm-.5 6h-1V9h1v3z"/>
      </svg>
    </div>
    <input required type="password" id="email-address-icon" value={registerdata.confirmPassword} onChange={(e)=>setregisterdata({...registerdata,confirmPassword:e.target.value})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="*******"/>
  </div>
  <div>
  <button type="submit" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Register</button>
  </div>
  <h4 className="text-sm text-gray-600 dark:text-gray-400 ml-20">
  Already have an account ? 
  <Link to="/login" className="text-blue-500 dark:text-blue-400 hover:underline ">Login here</Link>
</h4>
</form>
</div>
    </>
  )
}

export default Register