const express = require('express');
const path = require('path');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

// Servir arquivos estáticos (CSS, JS, imagens, etc.)
app.use(express.static('public'));

// Rota principal servindo o index.html manualmente
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`Servidor rodando em http://${HOST}:${PORT}`);
});
