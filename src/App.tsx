import { useEffect, useRef } from 'react'
import './App.css'

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = 800
    canvas.height = 600

    // Draw the Abyss Watcher
    ctx.fillStyle = '#2c2c2c' // Dark background
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw the figure
    ctx.strokeStyle = '#8b0000' // Dark red for the armor
    ctx.lineWidth = 3

    // Hood/Cape
    ctx.beginPath()
    ctx.moveTo(350, 200)
    ctx.quadraticCurveTo(400, 180, 450, 200)
    ctx.quadraticCurveTo(400, 150, 350, 200)
    ctx.stroke()

    // Body armor
    ctx.beginPath()
    ctx.moveTo(350, 200)
    ctx.lineTo(350, 400)
    ctx.lineTo(450, 400)
    ctx.lineTo(450, 200)
    ctx.stroke()

    // Sword
    ctx.strokeStyle = '#696969'
    ctx.beginPath()
    ctx.moveTo(450, 250)
    ctx.lineTo(550, 350)
    ctx.stroke()

    // Add glowing effect
    const gradient = ctx.createRadialGradient(400, 300, 10, 400, 300, 200)
    gradient.addColorStop(0, 'rgba(139, 0, 0, 0.3)')
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
    ctx.fillStyle = gradient
    ctx.fillRect(200, 100, 400, 400)
  }, [])

  return (
    <div className="App">
      <h1>Abyss Watcher</h1>
      <canvas 
        ref={canvasRef}
        style={{
          border: '2px solid #8b0000',
          boxShadow: '0 0 10px rgba(139, 0, 0, 0.5)'
        }}
      />
    </div>
  )
}

export default App