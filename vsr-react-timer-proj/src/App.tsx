import { useRef, useState } from "react";

const App = () => {
  const initialTime = useRef(0);
  const time = useRef(0);
  const offsetTime = useRef(0);
  const calculateTime = () => (Number((time.current - initialTime.current)/1000) + Number(offsetTime.current)).toFixed(3);
  const [timerTime, setTimerTime] = useState(calculateTime());
  const [isStart, setIsStart] = useState(true);
  const timerInterval = useRef(null);

  const startTimer = () => {
    console.log('enter startTimer');
    setIsStart(false);
    initialTime.current = Date.now();
    time.current = Date.now();
    if (!offsetTime.current) {
      offsetTime.current = calculateTime();
    }
    
    timerInterval.current = setInterval(() => {
      time.current = Date.now();
      setTimerTime(calculateTime());
    }, 10);
  }

  const stopTimer = () => {
    clearInterval(timerInterval.current);
    offsetTime.current = timerTime;
    setIsStart(true);
  }

  const resetTimer = () => {
    clearInterval(timerInterval.current);
    time.current = 0;
    initialTime.current = 0;
    offsetTime.current = 0;
    setTimerTime(calculateTime());
    setIsStart(true);
  }

  const getButtonName = () => {
    if (isStart && timerTime > 0) {
      return 'Resume Timer';
    } else if (isStart) {
      return 'Start Timer';
    }
    return 'Stop Timer'
  }

  return (
    <>
      <h1>Timer: <span style={{fontSize: "0.8em"}}>{timerTime}</span></h1>
      <button onClick={isStart ? startTimer : stopTimer}>{getButtonName()}</button>
      <button onClick={resetTimer}>Reset timer</button>
    </>
  )
}
export default App;