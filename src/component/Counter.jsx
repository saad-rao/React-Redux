import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AnotherCounter from './AnotherCounter'

const Counter = () => {

  const dispatch = useDispatch()
  const data = useSelector((state)=>state)
  // console.log(data);
  
  return (
    <>
   {/* <div>Counter</div> */}
   
    <div className="flex justify-center items-center h-screen bg-amber-200">
        <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4 text-center">Counter 
           <AnotherCounter />  </h1>
          <p className="text-xl text-center">Count: {data.count}</p>
          <button onClick={()=>dispatch({type:"inc"})} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
             Increment
          </button>
          
           <button onClick={()=>dispatch({type:"dec"})} className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-5">
             Decrement
          </button>

        </div>
       
        </div>
        
    </>
  )
}

export default Counter
