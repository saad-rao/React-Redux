import React from 'react'

const Counter = () => {
  return (
    <>
   {/* <div>Counter</div> */}
    <div className="flex justify-center items-center h-screen bg-amber-200">
        <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4 text-center">Counter</h1>
          <p className="text-xl text-center">Count: 0</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
             Increment
          </button>
           <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-5">
             Decrement
          </button>
        </div>
        </div>
    </>
  )
}

export default Counter
