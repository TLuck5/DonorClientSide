import React, { useState, useEffect } from 'react';
import Navbar from '../Utilities/Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function DonorLists() {
  const [responseData, setresponseData] = useState([]);
  const [selectedData, setselectedData] = useState("All");
  const [searchData, setSearchData] = useState('');
  const [filterValue, setFilterValue] = useState([]);
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem('userdetail')).JwtToken;

  const fetchedData = async () => {
    try {
      const response = await axios.get('https://localhost:7016/api/GetDonorsList', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setresponseData(response.data.Result);
    } catch (error) {
      console.error('Error:', error.message);
      console.error('Error Response:', error.response);
    }
  };

  const infoHandler = (clickedId) => {       
    const dData = responseData.find((item) => item.Id === clickedId);
    navigate(`/Donor-Info/${clickedId}`, { state: { data: dData } });
  };

  useEffect(() => {
    fetchedData();
  }, []);


  const deleteHandler = async (clickedId) => {
    const ans = confirm("you sure you want to delete this user")
    if(ans==false){
      return
    }else{
    try {   
      await axios.delete(`https://localhost:7016/api/Delete-Donor/${clickedId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert('Donor deleted successfully!');
      fetchedData();
    } catch (error) {
      console.log(error);
    }
  }
  };

  // const filterVal = (val) => {
  //   setselectedData(val);
  // };

  // const searchSubmitHandler = (val) => {
  //   setSearchData(val);
  // };
  const bloodGroups = ["All"]

  responseData.map((item)=>{
    if(!bloodGroups.includes(item.BloodGroup)){
      bloodGroups.push((item.BloodGroup).toString())
    }
  })

 const FilterData = ()=>{
  const filtered = responseData.filter((item)=>{
    return(
      (selectedData==="All"|| item.BloodGroup.toLowerCase()==selectedData.toLowerCase())&&(item.Name.toLowerCase().includes(searchData.toLocaleLowerCase())||item.BloodGroup.toLowerCase().includes(searchData.toLocaleLowerCase()))
    )
  })
  setFilterValue(filtered)
 }
 useEffect(()=>{
  FilterData()
 },[searchData,selectedData])

  return (
    <>
      <Navbar />
      {/* <SearchBar searchHandler={searchSubmitHandler} filterHandler={filterVal} /> */}
        <div className="flex mt-5 justify-center">
          <input type="text" placeholder="Search for the name"
        className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-sky-500 focus:outline-none focus:border-sky-500"
        value={searchData} onChange={e=>setSearchData(e.target.value)}/>
          <button type="submit" className="bg-sky-500 mr-5 text-white rounded-r px-2 md:px-3 py-0 md:py-1">Search</button>
      
          <select id="pricingType" name="pricingType" onChange={(e)=>setselectedData(e.target.value)}
      className="w-20 h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider">
              {bloodGroups.map((item,i)=>{
          return(
      <option key={i} value={item} >{item}</option>
          )
          })}
    </select>
      </div>
      {responseData.length==0? (
        <div className="flex justify-center mt-20">
          <h2 style={{ fontFamily: 'fantasy', color: 'GrayText' }}>
            Currently there's no donor present here, you need to add a donor
          </h2>
        </div>
      ) : (
        <div className="max-w-full overflow-x-auto shadow-md sm:rounded-lg">
          <div className="px-3 py-4 flex justify-center">
            <table className="w-full text-md bg-white shadow-md rounded mb-4 text-center">
              <tbody>
                <tr className="border-b">
                  <th className="text-center"></th>
                  <th className="text-center p-3 px-5">Name</th>
                  <th className="text-center p-2 px-4">Blood Group</th>
                  <th className="text-center p-3 px-5">Actions</th>
                </tr>

                {searchData==="" && selectedData=="All" ?(
                    responseData.map((item, index) => (
                      <tr key={index} className="border-b hover:bg-orange-100">
                        <td className="p-3 px-5"><svg className="h-6 w-6 text-gray-700"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="7" r="4" />  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg></td>
                        <td className="p-3 px-5" style={{ fontFamily: '-moz-initial', fontWeight: 'bold' }}>
                          {item.Name}
                        </td>
                        <td className="p-3 px-5" style={{ fontStyle: 'italic' }}>
                          {item.BloodGroup}
                        </td>
                        <td className="p-3 px-5 flex justify-evenly">
                          <button
                            type="button"
                            className=" text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => infoHandler(item.Id)}
                          >
                            Info
                          </button>
                          <button
                            type="button"
                            className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => deleteHandler(item.Id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ):(
                    filterValue.map((item, index) => (
                      <tr key={index} className="border-b hover:bg-orange-100">
                        <td className="p-3 px-5">#</td>
                        <td className="p-3 px-5" style={{ fontFamily: '-moz-initial', fontWeight: 'bold' }}>
                          {item.Name}
                        </td>
                        <td className="p-3 px-5" style={{ fontStyle: 'italic' }}>
                          {item.BloodGroup}
                        </td>
                        <td className="p-3 px-5 flex justify-evenly">
                          <button
                            type="button"
                            className=" text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => infoHandler(item.Id)}
                          >
                            Info
                          </button>
                          <button
                            type="button"
                            className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => deleteHandler(item.Id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  )
                  }
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default DonorLists;
