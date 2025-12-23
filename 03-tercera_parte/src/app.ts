import * as http from 'http';

const palabra = 'mundo';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Empezamos el mensaje\n');
  res.end('Terminamos la respuesta\n');
});

const port = 3000;

server.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});