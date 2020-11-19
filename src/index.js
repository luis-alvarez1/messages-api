import { server } from "./server";

server.start({ port: 8080 }, ({ port }) => {
  console.log("server on port", port);
});
