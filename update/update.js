document.getElementById('generateBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const qrCanvas = document.getElementById('qrCanvas');
  
    // Cek apakah input tidak kosong
    if (inputText.trim() !== "") {
        // Buat kode QR
        const qr = new QRious({
            element: qrCanvas,
            value: inputText,
            size: 200
        });
        // Tampilkan canvas
        qrCanvas.classList.remove('hidden');
    } else {
        // Jika input kosong, sembunyikan canvas
        qrCanvas.classList.add('hidden');
    }
  });
  
  // Tambahkan event listener untuk mengosongkan input
  document.getElementById('inputText').addEventListener('input', function() {
    const qrCanvas = document.getElementById('qrCanvas');
    if (this.value.trim() === "") {
        // Jika input kosong, sembunyikan canvas
        qrCanvas.classList.add('hidden');
    }
  });