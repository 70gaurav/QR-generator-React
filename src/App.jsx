import { useState } from 'react'
import QRCode from 'react-qr-code'

function App() {
  const [input, setInput] = useState("")
  const [qr, setQr] = useState(false)


  return (
    <div className='app'>
      <h1>QR Code Generator</h1>
      {qr ? (<QRCode value={input}/>) : ("")

      }

      <form className="input" onSubmit={(e) => e.preventDefault()}>
        <p>Enter your text here</p>
        <input type="text" value={input} onChange={(e) => { setInput(e.target.value) }} />

        <button onClick={() => setQr(true)}>Generate</button>

      </form>

    </div>
  )
}

export default App
