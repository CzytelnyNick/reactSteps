import React, { useState } from 'react'
import "../App.css"
import "./array"
function Dot({ num }) {
  let kolor = ""
  
  const [click, clickFunc] = useState(0)
  const [color, zmColor] = useState(kolor)
  // console.log(tekst2)

  function zmPunkt() {
    if(click==1) { zmColor("bg-dark"); clickFunc(0); return}
    if (click == 0) { zmColor("bg-success"); clickFunc(1); return }


  }
  return (
    
    div className={`dot ${color}`} onClick={zmPunkt} data-toggle={"popover"} title={"Popover title"} data-content={"And here's some amazing content. It's very engaging. Right?"}>
      <p>{num}</p>
    </div>
    <button type={"button"} class={"btn btn-lg btn-danger"} data-toggle={"popover"} title={"Popover title"} data-content={"And here's some amazing content. It's very engaging. Right?"}>1</button>
  )
}

export default Dot