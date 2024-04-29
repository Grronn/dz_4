import React, { useEffect, useState } from 'react'

export default function WindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const windowResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', windowResize)

    return () => {
      window.removeEventListener('resize', windowResize)
    }
  }, [windowSize])

  return (
    <div>
      <h1>Текущий размер окна браузера</h1>
      <span>Ширина: {windowSize.width}px, Высота: {windowSize.height}px</span>
    </div>
  )
}
