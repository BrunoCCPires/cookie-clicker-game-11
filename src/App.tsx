import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [cookies, setCookies] = useState(0)
  const [multiplier, setMultiplier] = useState(1)
  const [autoClickerCount, setAutoClickerCount] = useState(0)

  const cookieClick = () => {
    setCookies(prev => prev + multiplier)
  }

  const buyMultiplier = () => {
    const cost = Math.floor(10 * Math.pow(1.5, multiplier - 1))
    if (cookies >= cost) {
      setCookies(prev => prev - cost)
      setMultiplier(prev => prev + 1)
    }
  }

  const buyAutoClicker = () => {
    const cost = Math.floor(15 * Math.pow(1.8, autoClickerCount))
    if (cookies >= cost) {
      setCookies(prev => prev - cost)
      setAutoClickerCount(prev => prev + 1)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoClickerCount > 0) {
        setCookies(prev => prev + (autoClickerCount * multiplier))
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [autoClickerCount, multiplier])

  return (
    <div className="container">
      <h1>Cookie Clicker</h1>
      
      <div className="cookie-section">
        <div className="cookie-count">Cookies: {Math.floor(cookies)}</div>
        <button className="cookie-button" onClick={cookieClick}>
          🍪
        </button>
      </div>

      <div className="upgrades">
        <div className="upgrade-item">
          <button 
            onClick={buyMultiplier}
            disabled={cookies < Math.floor(10 * Math.pow(1.5, multiplier - 1))}
          >
            Buy Multiplier (x{multiplier + 1})
          </button>
          <div>Cost: {Math.floor(10 * Math.pow(1.5, multiplier - 1))} cookies</div>
          <div>Current multiplier: x{multiplier}</div>
        </div>

        <div className="upgrade-item">
          <button 
            onClick={buyAutoClicker}
            disabled={cookies < Math.floor(15 * Math.pow(1.8, autoClickerCount))}
          >
            Buy Auto Clicker
          </button>
          <div>Cost: {Math.floor(15 * Math.pow(1.8, autoClickerCount))} cookies</div>
          <div>Auto Clickers: {autoClickerCount}</div>
        </div>
      </div>
    </div>
  )
}

export default App