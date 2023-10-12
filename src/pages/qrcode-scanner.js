import { useState, useEffect } from 'react';
import { Html5QrcodeScanner } from "html5-qrcode";

const QRCodeScannerTest = () => {
  const [text, setText] = useState('')

  useEffect(() => {
    let html5QrcodeScanner = new Html5QrcodeScanner(
      "QRCode-Scanner",
      { fps: 10, qrbox: { width: 400, height: 400 } },
      false
    );
    html5QrcodeScanner.render(
      (decodedText, decodedResult) => {
        setText(decodedText);
      },
      (error) => {
        // console.log(error);
      }
    );
  }, [])

  return (
    <>
      <div id="QRCode-Scanner" width="400px"></div>
      <p>
        {text}
      </p>
    </>
  )
}


export default QRCodeScannerTest;