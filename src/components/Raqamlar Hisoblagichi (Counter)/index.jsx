import React, {useState} from 'react';
import './index.css'
function Counter() {
  const [counterState, setCounterState] = useState(0);

  let counter = 0;

  function handleIncrement() {
    setCounterState(counterState + 1)
  }
  function handleDecrement() {
    setCounterState(counterState - 1)
  }
  return (
    <div className='Counter'>
    <h2>Raqamlar Hisoblagichi (Counter)</h2>
      <h2>{counterState}</h2>
      <button onClick={handleIncrement}><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7"/>
</svg>
</button>
      <button onClick={handleDecrement}><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
</svg>
</button>
    </div>
  )
}

export default Counter