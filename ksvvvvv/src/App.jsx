import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="center">
        <h1>KSV Website</h1>
        <div className="hero" aria-hidden="true">
          <img className="base" src={heroImg} alt="" />
          <img className="framework" src={reactLogo} alt="" />
          <img className="vite" src={viteLogo} alt="" />
        </div>
        <button className="counter" onClick={() => setCount((v) => v + 1)}>
          Count is {count}
        </button>
        <p>Edit <code>ksvvvvv/src/App.jsx</code> and save to test HMR</p>
      </div>
      <div id="next-steps">
        <div id="docs">
          <h2>Deployment Ready</h2>
          <p>This project now builds correctly for Vercel deployment.</p>
        </div>
        <div id="social">
          <h2>Next Step</h2>
          <p>Push these changes and trigger a new Vercel deployment.</p>
        </div>
      </div>
      <div id="spacer" className="ticks" />
    </>
  )
}

export default App
