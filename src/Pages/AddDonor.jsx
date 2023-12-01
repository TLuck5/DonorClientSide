import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AddDonor() {
  const[donorData,setdonorData] = useState({
    name:"",mobNo:"",Address:"",DateOfBirth:"",BloodGroup:"",ImageName:"",AddedBy:"",
    lastDonationDate:""
  })

  const userdetail = JSON.parse(localStorage.getItem("userdetail"))
  const token = userdetail.JwtToken
  const navigate = useNavigate()
  const submitHandler = async(e)=>{
    e.preventDefault();
    try{
       const response = await axios.post("https://localhost:7016/api/Add-DonorInfo",donorData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((res)=>{
        alert(res.data.message) 
        setdonorData({
          name: "",
          mobNo: "",
          Address: "",
          DateOfBirth: "",
          BloodGroup: "",
          ImageName: "",
          AddedBy: "",
          lastDonationDate: ""
       })
        navigate("/Donor-lists")
      })
     
    }catch(e){
      console.log(e.message)
    }
  }

  return (
    <>
    <div className="max-w-md mx-auto p-6 bg-white border border-black rounded-md shadow-md m-20">
    <h2 className="text-2xl font-semibold mb-4">Add Donor Info</h2>
<form className="max-w-md mx-auto" onSubmit={submitHandler}>
  <div className="relative z-0 w-full mb-5 group">
      <input type="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={donorData.name} onChange={e=>setdonorData({...donorData,name:e.target.value})} placeholder=" " required />
      <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="number" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={donorData.mobNo} onChange={e=>setdonorData({...donorData,mobNo:e.target.value})} placeholder=" " required />
      <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mobile Number</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={donorData.Address} onChange={e=>setdonorData({...donorData,Address:e.target.value})} placeholder=" " required />
      <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="date"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  value={donorData.DateOfBirth} onChange={e=>setdonorData({...donorData,DateOfBirth:e.target.value})} placeholder=" " required />
      <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Date of Birth</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="text"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={donorData.BloodGroup} onChange={e=>setdonorData({...donorData,BloodGroup:e.target.value})} placeholder=" " required />
      <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Blood Group</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
  <input
    type="date"
    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    value={donorData.lastDonationDate}
    onChange={(e) => setdonorData({ ...donorData, lastDonationDate: e.target.value })}
    placeholder=" "
  />
  <label
    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
  >
    Last Donation Date
  </label>
  <span className="absolute text-red-300 top-30 left-0  text-gray-500 hidden group-hover:inline" style={{fontSize:"10px"}}>
  If you're first Time donor then leave this field blank
  </span>
</div>

  <div className="relative z-0 w-full mb-5  group">
      <input type="text"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={donorData.ImageName} onChange={e=>setdonorData({...donorData,ImageName:e.target.value})} placeholder=" " required />
      <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image url</label>
  </div>
  <div className="relative z-0 w-full mb-5  group" hidden>
      <input type="text"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={userdetail.Email}  placeholder=" " hidden />
      <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" hidden>Image url</label>
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
</div>
    </>
  )
}
