document.getElementById('generateBtn').addEventListener('click', function() {
  const inputText = document.getElementById('inputText').value;
  const qrCanvas = document.getElementById('qrCanvas');
  const qr = new QRious({
      element: qrCanvas,
      value: inputText,
      size: 200
  });
});