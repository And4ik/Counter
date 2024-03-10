import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Button} from "./Components/Button";

function App() {
    const [count, setCount] = useState<number | string>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [startValue, setStartValue] = useState<number>(0)
    const [error, setError] = useState("")
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [incResetButtonDisabled, setIncResetButtonDisabled] = useState(false)
    const [valueForUser, setValueForUser] = useState<string>("")
    const incrementCount = () => {
        setCount(Number(count)+1)
    }
    const resetCount = () => {
      setCount(startValue)
    }
    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (Number(e.currentTarget.value) <= startValue || startValue<0){
            setError("Incorrect value!")
        }else {
            setError("")
        }
        setMaxValue(Number(e.currentTarget.value))
        setIsButtonDisabled(false)
        setIncResetButtonDisabled(true)
        setCount("press `set`")
    }
    const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (Number(e.currentTarget.value) < 0 || Number(e.currentTarget.value) >= maxValue){
            setError("Incorrect value!")
        }else {
            setError("")
        }
        // setValueForUser("enter values and press `set`")
        setStartValue(Number(e.currentTarget.value))
        setIsButtonDisabled(false)
        setIncResetButtonDisabled(true)
        setCount("press `set`")
    }

    const onSetHandler = () => {
         setCount(startValue)
        setIsButtonDisabled(true)
        setIncResetButtonDisabled(false)

    }

  return (
      <div className="App">
          <div>
              <span>max value</span>
              <input
                  className={startValue>=maxValue ? "ErrorColorInput":""}
                  type="number"
                  value={maxValue}
                  onChange={onChangeMaxHandler}
              />
          </div>
          <div>
              <span>start value</span>
              <input
                  className={startValue< 0 || startValue>=maxValue ? "ErrorColorInput":"" }
                    type="number"
                     value={startValue}
                     onChange={onChangeStartHandler}
              />
              <div><Button disabled={Boolean(error)|| startValue>=maxValue || isButtonDisabled } name="set" onClick={onSetHandler}/></div>
          </div>
          <div>
              <div className={count >= maxValue  ? "maxCount" : ""}>{Boolean(error) ? error : count}</div>
              <Button disabled={count >= maxValue ||incResetButtonDisabled } name={"inc"} onClick={incrementCount}/>
              <Button disabled={startValue<0 || incResetButtonDisabled} name={"reset"} onClick={resetCount}/>
          </div>


      </div>
  );
}

export default App;
