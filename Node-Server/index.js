import { log } from "console";
import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Server han send you msg");
});

server.listen(8000,()=>{
    console.log("Server is running on 8000 port")
})
