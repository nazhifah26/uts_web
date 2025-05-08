const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  console.log('Client connected');

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    // Kirim balasan ke klien
    ws.send(`Server menerima: ${message}`);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });

  // Kirim pesan sambutan saat klien terhubung
  ws.send('Selamat datang di server WebSocket!');
});

console.log('WebSocket server berjalan di ws://localhost:8080');
