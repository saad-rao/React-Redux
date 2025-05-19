import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const AnotherCounter = () => {
    // const dispatch = useDispatch()
    const data = useSelector((state)=>state)
  return (
    <div>
      <p>{data.count}</p>

      
    </div>
  )
}

export default AnotherCounter
