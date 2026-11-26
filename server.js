
const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, "index.html");

  fs.readFile(filePath, (err, content) => {
    if (err) {
      console.error("Erro ao carregar index.html:", err);
      res.writeHead(500);
      res.end("Erro ao carregar a página.");
      return;
    }

    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
    });

    res.end(content);
  });
});

server.on("error", (err) => {
  console.error("Erro no servidor:", err);
  process.exit(1);
});

server.listen(3000, "0.0.0.0", () => {
  console.log("Servidor iniciado na porta 3000!");
});
