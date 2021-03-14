import * as http from "http";

export function faasPenguinLocal() {
  return http.createServer((req, res) => {
    res.writeHead(200);
    res.end("Hello World\n");
  });
}
