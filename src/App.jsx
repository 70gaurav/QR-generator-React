import { useState } from 'react';
import QRCode from 'react-qr-code';

function App() {
  const [input, setInput] = useState("");
  const [qr, setQr] = useState(false);

  const handleGenerate = (e) => {
    e.preventDefault();
    setQr(true);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setQr(false);
  };

  return (
    <div className='app'>
      <h1>QR Code Generator</h1>
      {qr && input.length>0 ? (<QRCode value={input} />) : ("")}

      <form className="input" onSubmit={handleGenerate}>
        <p>Enter your text here</p>
        <input type="text" value={input} onChange={handleInputChange} />

        <button type="submit">Generate</button>
      </form>
    </div>
  );
}

export default App;
