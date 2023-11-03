import React from 'react'

const ToList = ({list}) => {
  return (
    <div>
      {list.map((item)=>(
        <div>
          <p>{item.task}</p>
          <p>{item.time}</p>
          </div>
      ))}
    </div>
  )
}

export default ToList