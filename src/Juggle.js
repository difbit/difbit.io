import { useEffect, useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'


export default function Juggle() {
    const [balls, setBalls] = useState(['first', 'second', 'third'])
    const [isEnabled, setIsEnabled] = useState(true)
    const [parent, enable] = useAutoAnimate({ duration: 500 })
    function toggle () {
        enable(!isEnabled)
        setIsEnabled(!isEnabled)
    }
    useEffect(() => {
        setTimeout(() => {
            const juggled = [...balls]
            juggled.push(juggled.shift())
            setBalls(juggled)
        }, 600)
    }, [balls])
    return (
      <>
          <ul ref={parent} className="balls">
            { balls.map(color => <li key={color} className={color}>{ color }</li>) }
          </ul>
          <button onClick={toggle}>
            { isEnabled ? "🚫 Disable" : "✅ Enable" } animations
          </button>
      </>
    )
}
