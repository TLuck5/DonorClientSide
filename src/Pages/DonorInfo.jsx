import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import EditInfo from './EditInfo';

function DonorInfo() {
  const [editModel, seteditModel] = useState(false)
  const location = useLocation();
  const donorData = location.state?.data
  const navigate = useNavigate()
  // useEffect(()=>{
  //   setdData(donorData)
  // },[])

  const DOB = donorData.DateOfBirth.includes("T")?donorData.DateOfBirth.slice(0,donorData.DateOfBirth.indexOf("T")):donorData.DateOfBirth
  return (
    <>
      {!editModel ?
        <div className="max-w-md mt-10 mx-auto p-6 bg-white border border-gray-300 rounded-md shadow-md">
          <div className="flex items-center justify-center">
            <img
              src={donorData.ImageName}
              alt="Profile"
              className="rounded-full h-20 w-20 object-cover"
            />
          </div>

          <h2 className="text-2xl font-semibold my-4">{donorData.Name}</h2>

          <ul className="list-disc list-inside py-2">
            <li className="py-2">
              <strong>Address:</strong> <i>{donorData.Address}</i>
            </li>
            <li className="py-2">
              <strong>Blood Group:</strong> <i>{donorData.BloodGroup}</i>
            </li>
            <li className="py-2">
              <strong>Date of Birth:</strong> <i>{DOB}</i>
            </li>
            <li className="py-2">
              <strong>Mobile Number:</strong> <i>{donorData.MobNo}</i>
            </li>
            <li className="py-2">
              <strong>Last Donation Date:</strong> <i>{!donorData.lastDonationDate && "First time Donor"
              }</i>
            </li>
            <li className="py-2">
              <strong>Added By:</strong> <i>{donorData.AddedBy
              }</i>
            </li>
            <li className="py-2">
              <strong>Last Updated By:</strong> <i>{donorData.UpdatedBy
              }</i>
            </li>
          </ul>

          <div className="flex justify-between mt-4">
            <button type="button" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900" onClick={() => seteditModel(true)}>Edit</button>
            <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={() => navigate("/Donor-lists")}>Back</button>
          </div>
        </div>
        : <EditInfo dData={donorData} />
      }
    </>
  )
}

export default DonorInfo