import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import context from '../Context/Createcontext'

const About = () => {
  const navigate=useNavigate()
  const {count , setCount}=useContext(context);
  return (
    <div className='n'>
         <p>{count}</p>
        <p>This is About page</p>
        <button onClick={()=>{navigate(-1)}}>Back</button>
        <button onClick={()=>{navigate(1)}}>after</button>
    </div>
  )
}

export default About