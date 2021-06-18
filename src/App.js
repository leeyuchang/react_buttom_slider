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
      <div
        onClick={handleClick}
        className="content"
        style={{
          height: `calc(100% - ${bottomSliderHeightRef.current}rem)`,
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt amet
        excepturi saepe harum corporis fuga inventore voluptatibus quia
        repudiandae repellendus. Laboriosam quos ex tenetur voluptates itaque
        aspernatur voluptatem ut, quaerat non provident aut eos consequuntur
        explicabo, soluta temporibus? Harum reprehenderit quisquam natus
        perferendis id temporibus explicabo autem saepe ex nam praesentium,
        itaque commodi, modi consectetur animi repellendus ad! Dolore unde
        aspernatur voluptatem ut, quaerat non provident aut eos consequuntur
        explicabo, soluta temporibus? Harum reprehenderit quisquam natus
        perferendis id temporibus explicabo autem saepe ex nam praesentium,
        itaque commodi, modi consectetur animi repellendus ad! Dolore unde
        aspernatur voluptatem ut, quaerat non provident aut eos consequuntur
        explicabo, soluta temporibus? Harum reprehenderit quisquam natus
        perferendis id temporibus explicabo autem saepe ex nam praesentium,
        itaque commodi, modi consectetur animi repellendus ad! Dolore unde
        aspernatur voluptatem ut, quaerat non provident aut eos consequuntur
        explicabo, soluta temporibus? Harum reprehenderit quisquam natus
        perferendis id temporibus explicabo autem saepe ex nam praesentium,
        itaque commodi, modi consectetur animi repellendus ad! Dolore unde
        officiis saepe magni eos, non recusandae alias dolores, minus earum
        neque, suscipit quam ut ipsa corrupti ipsam quas aut veniam ullam. Culpa
        debitis ullam totam aperiam rerum.
        <p>{window.innerHeight}</p>
      </div>
      <div
        onClick={handleClick}
        className="bottomSlider"
        style={{
          height: `${bottomSliderHeightRef.current}rem`,
          opacity: bottomSliderHeightRef.current ? 1 : 0,
        }}
      ></div>
    </div>
  )
}
