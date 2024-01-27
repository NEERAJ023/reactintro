import React,{useState} from 'react'
import context from './Createcontext'

const ContextData = (props) => {
    const [count,setCount]=useState(0);
  return (
    <context.Provider value={{count:count,setCount:setCount}}>
         {props.children}
    </context.Provider>
  )
}

export default ContextData