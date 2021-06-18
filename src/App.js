import React, { useRef, useState, useEffect, useCallback } from 'react'
// import { debounce } from 'lodash'
import './App.scss'

export default function App() {
  const bottomSliderHeightRef = useRef(0)
  const [visible, setVisible] = useState(false)

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const handleResize = useCallback(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])

  const handleClick = useCallback(() => {
    if (visible) {
      bottomSliderHeightRef.current = 10
    } else {
      bottomSliderHeightRef.current = 0
    }
    setVisible((prev) => !prev)
  }, [visible])

  return (
    <div style={{ height: windowSize.height }}>
      <Content
        onClick={handleClick}
        bottomSliderHeightRef={bottomSliderHeightRef}
      />
      <BottomSlider
        bottomSliderHeightRef={bottomSliderHeightRef}
        onClick={handleClick}
      />
    </div>
  )
}

const Content = React.memo((props) => {
  return (
    <div
      onClick={props.onClick}
      className="content"
      style={{
        height: `calc(100% - ${props.bottomSliderHeightRef.current}rem)`,
      }}
    >
      <p>{window.innerHeight}</p>
    </div>
  )
})

const BottomSlider = React.memo((props) => {
  return (
    <div
      onClick={props.onClick}
      className="bottomSlider"
      style={{
        height: `${props.bottomSliderHeightRef.current}rem`,
        opacity: props.bottomSliderHeightRef.current ? 1 : 0,
      }}
    ></div>
  )
})
