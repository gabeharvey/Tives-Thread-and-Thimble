/* eslint-disable react/no-unescaped-entities */
import antiqueMachineLogo from '/antique-sewing-machine.png'
import blackCatLogo from '/black-cat-logo.png'
import './App.css'

function App() {

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
      <h1 fontFamily="Shadows Into Light Two, cursive">Tive's Thread and Thimble</h1>
    </>
  )
}

export default App
