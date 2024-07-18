import React, { useState } from 'react'
import './index.css'
function Tab() {
    const [Chandge , setChange] = useState(true)
    function handleChangeHello() {
        setChange(true)
    }
    function handleChangeBye() {
        setChange(false)
    }
    return (
    <div className='Tab-Selector'> 
    <h2>Yorliqlarni Tanlash (Tab Selector)</h2>
    <button onClick={handleChangeHello}>Hello</button>
    <button onClick={handleChangeBye}>Bye</button>
    {Chandge ? <p>Hello</p> : <p>Bye</p>
    }
    </div>
  )
}
export default Tab;