import { useState } from 'react';
import axios from "axios"
// import QRCode from 'react-qr-code';

function App() {
  const [input, setInput] = useState("");
  const [qr, setQr] = useState(false);

  const handleGenerate = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:3000/qr?input=${encodeURIComponent(input)}`)
    .then((response) => {
      console.log(response)
      setQr(response.data)
    } )
    setQr(true);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setQr(false);
  };

  return (
    <div className="wrapper">
         <div className='app'>
      <h1>QR  Generator</h1>

      {
        qr && input.length > 0 ? (
         <>
          <a href={qr} download><img src={qr} alt="" /></a>
          <h3>Click on the QR to download</h3>
         </>
        ) : (null)
      }   

      <form className="input" onSubmit={handleGenerate}>
        <input type="text" autoFocus placeholder='Enter your text here' value={input} onChange={handleInputChange} />

        <button type="submit">Generate</button>
      </form>
    </div>
    </div>
  );
}

export default App;

