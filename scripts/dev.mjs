import http from "node:http";
import worker from "../worker/index.js";

const port = Number(process.env.PORT || 4174);

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error("PORT must be an integer between 1 and 65535");
}

http.createServer(async (incoming, outgoing) => {
  try {
    const request = new Request(`http://127.0.0.1:${port}${incoming.url}`, {
      method: incoming.method,
      headers: incoming.headers,
    });
    const response = await worker.fetch(request, {}, {});
    outgoing.writeHead(response.status, Object.fromEntries(response.headers));
    outgoing.end(Buffer.from(await response.arrayBuffer()));
  } catch (error) {
    outgoing.writeHead(500).end(String(error));
  }
}).listen(port, "127.0.0.1", () => console.log(`Local preview: http://127.0.0.1:${port}`));
