import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate=useNavigate()
  return (
    <div className='n'>
        <p>This is Contact page</p>
        <button onClick={()=>{navigate(-1)}}>Back</button>
        <button onClick={()=>{navigate(1)}}>after</button>
    </div>
  )
}

export default Contact