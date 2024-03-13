import React, { useState } from 'react'
import "../App.css"
import "./array"
function Dot({num}) {
  return (
    <div className='dot'>
      <p>{num}</p>
    </div>

  )
}

export default Dot