import React, { useEffect, useState } from 'react'

export default function CountdownTimer() {
  const [timer, setTimer] = useState(10)

  useEffect(() => {
    if (timer === 0) return

    const timerID = setInterval(() => {
      setTimer(timer - 1);
    }, 1000)

    return () => {
      clearInterval(timerID)
    };
  }, [timer])

  return (
    <div>
      <h1>Таймер</h1>
      <h1>{timer}</h1>
    </div>
  )
}
