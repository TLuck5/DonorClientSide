import React,{useState} from 'react'

export default function SearchBar({searchHandler,filterHandler}) {
    const[filterSelect,setfilterSelect] = useState("")
    const[searchVal,setsearchVal] = useState("")
    const bloodGroups = [ "All","A+", "A-","B+","B-","AB+","AB-","O+","O-"]
   
   const searchSubmitHandler = (e)=>{
    e.preventDefault();
    searchHandler(searchVal)
   }
   const filterVal = (e)=>{
    setfilterSelect(e.target.value)
    filterHandler(e.target.value)
   }

  return (
    <>
    <div className='flex justify-center m-5'>
    <form className="flex flex-col md:flex-row gap-3" onSubmit={searchSubmitHandler}>
    <div className="flex ">
        <input type="text" placeholder="Search for the name"
			className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-sky-500 focus:outline-none focus:border-sky-500"
			value={searchVal} onChange={e=>setsearchVal(e.target.value)}/>
        <button type="submit" className="bg-sky-500 text-white rounded-r px-2 md:px-3 py-0 md:py-1">Search</button>
    </div>
    </form>
        <div className='ml-5'>
        <select id="pricingType" name="pricingType" onChange={filterVal}
		className="w-full h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider">
            {bloodGroups.map((item,i)=>{
        return(
		<option key={i} value={item} >{item}</option>
        )
        })}
	</select>
    </div>

</div>
    </>
  )
}
