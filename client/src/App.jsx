/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
import antiqueMachineLogo from '/antique-sewing-machine.png'
import blackCatLogo from '/black-cat-logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={blackCatLogo} className="logo" alt="Black Cat Logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={antiqueMachineLogo} className="logo react" alt="Antique Machine Logo" />
        </a>
      </div>
      <h1>Tive's Thread and Thimble</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
