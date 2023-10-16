import { useState } from 'react'
import './Counter.css'
import CounterButton from './counterButton'

export default function Counter (){
    const [count, setCount]=  useState(0);

    function IncrementCounterParentFunction(by){
        setCount(count+by)
    }
    
    function DecrementCounterParentFunction(by){
        setCount(count-by)
    }

    function ResetCounter(by){
        setCount(0)
    }

    return(
      <>
      <div className="totalcount">{count}</div>
      <CounterButton by={1} 
        incrementMethod={IncrementCounterParentFunction} DecrementMethod={DecrementCounterParentFunction}/>
      <CounterButton by={2} 
        incrementMethod={IncrementCounterParentFunction} DecrementMethod={DecrementCounterParentFunction}/>
      <CounterButton by={5}
        incrementMethod={IncrementCounterParentFunction} DecrementMethod={DecrementCounterParentFunction}/>
      
      <button className="resetButton" 
        onClick={ResetCounter}>Reset</button>
      </>
    )
}
