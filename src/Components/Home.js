import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import context from '../Context/Createcontext'

const Home = () => {
  const navigate=useNavigate()
  const {count , setCount}=useContext(context);
      
  return (
    <div className='n'>
        <p>{count}</p>
        <button onClick={()=>setCount(count+1)}>Increase</button>
        <button onClick={()=>setCount(count-1)}>Decrease</button>
        <br/>
        <br/>
        <h>Hi my name is Neeraj </h>
        <p>This is Home page</p>
        <button onClick={()=>{navigate(-1)}}>Back</button>
        <button onClick={()=>{navigate(1)}}>after</button>
    </div>
  )
}

export default Home