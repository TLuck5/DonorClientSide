import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [islogin,setislogin] = useState(false)
  const navigate = useNavigate()

  const logoutHandler= ()=>{
    localStorage.clear()
    navigate("/login")
  }
const token = JSON.parse(localStorage.getItem("userdetail"))
useEffect(()=>{
  if(token && token.JwtToken){
    setislogin(true)
  }
},[])
  return (

      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white font-bold text-xl">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="60" height="60">
  <circle cx="30" cy="30" r="30" fill="#3498db" />

  <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="20" fill="#fff" fontFamily="Arial, sans-serif">
    TJ
  </text>
</svg>
          </div>
          <div className="space-x-4">
            {
              islogin?<>
              <button type="button" className="text-white bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><Link to="/Add-donor">Add Donor</Link></button>
              <button type="button" className="text-white bg-gradient-to-r from-blue-700 via-pink-800 to-pink-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><Link to="/Donor-lists">Donors List</Link></button>
              <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={logoutHandler}>Logout</button>
              </>
            :<>
          <button type="button" className="text-white bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><Link to="/register">Register</Link></button>
          <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><Link to="/login">Login</Link></button>
            </>
            }
          </div>
        </div>
      </nav>

  );
};

export default Navbar;
