import React, { useEffect, useState } from 'react'
import Navbar from '../Utilities/Navbar'

function MainPage() {
  const[loginUser,setloginUser] = useState(false)

  useEffect(()=>{
    if(localStorage && JSON.parse(localStorage.getItem("userdetail")).JwtToken
    ){
      setloginUser(true)
    }
  },[])
  return (
    <>
    <Navbar/>
    {loginUser && <>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",fontSize:"30px"}}>
      <h3 style={{color:"blueviolet",fontFamily:"sans-serif"}}>Welcome to the Blood Donor Website</h3>
    </div>
    </>
    }
    </>
  )
}

export default MainPage