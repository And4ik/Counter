import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Button} from "./Components/Button";

function App() {
    const [count, setCount] = useState(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [error, setError] = useState("")

    
    const incrementCount = () => {
        setCount(count+1)
    }
    const resetCount = () => {
      setCount(startValue)
    }


    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(e.currentTarget.value))
    }
    const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (Number(e.currentTarget.value) < 0){
            setError("не валидное число")
        }else {
            setError("")
        }
        setStartValue(Number(e.currentTarget.value))
    }

    const onSetHandler = () => {
      setCount(startValue)

    }
  return (
      <div className="App">
          <div>
              <span>max value</span>
              <input
                  type="number"
                  value={maxValue}
                  onChange={onChangeMaxHandler}
              />
          </div>
          <div>
              <span>start value</span>
              <input type="number"
                     value={startValue}
                     onChange={onChangeStartHandler}
              />
              <div><Button disabled={Boolean(error)} name="set" onClick={onSetHandler}/></div>
          </div>
          <div>
              <div className={count >= maxValue  ? "maxCount" : ""}>{startValue < 0  ? error : count}</div>
              <Button disabled={count >= maxValue} name={"inc"} onClick={incrementCount}/>
              <Button disabled={false} name={"reset"} onClick={resetCount}/>
          </div>

      </div>
  );
}

export default App;
