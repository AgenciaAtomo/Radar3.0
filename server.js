const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

http.createServer((req, res) => {
  let file = req.url === '/' ? '/atomo-finance-app.html' : req.url;
  const fp = path.join(__dirname, file);
  if (!fs.existsSync(fp)) { res.writeHead(404); res.end('Not found'); return; }
  const ext = path.extname(fp);
  const mime = { '.html':'text/html', '.js':'application/javascript', '.css':'text/css' };
  res.writeHead(200, { 'Content-Type': mime[ext] || 'text/plain' });
  fs.createReadStream(fp).pipe(res);
}).listen(PORT, () => console.log(`✅ Átomo Finance rodando em http://localhost:${PORT}`));
