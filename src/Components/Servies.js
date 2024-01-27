import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
const countries=[
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor"
]
const Servies = () => {
  const navigate=useNavigate()
  
  const [cities, setcities]=useState()
  const [Search, setSearch]=useState("")
  
 
  useEffect(()=>{Search &&
     setcities(countries.filter(city=>city.toLowerCase().includes(Search.toLowerCase())))
  },[Search])
  
  return (
    <div className='n'>
          
        <button onClick={()=>{navigate(-1)}}>Back</button>
        <button onClick={()=>{navigate(1)}}>after</button>
        <p>This is Servies page</p>
        <input type="text" placeholder="search city..." 
        onChange={(e)=>setSearch(e.target.value)}
        value={Search}
         />
        
       {cities &&
        cities.map((city,index)=>
          <li key={index}
          onClick={()=>setSearch(city)}
          >{city}</li>
        )
       }
    </div>
  )
}

export default Servies