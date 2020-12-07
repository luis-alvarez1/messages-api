import { server } from "./server";

import "./db";

const port = process.env.PORT || 8080;

server.start({ port }, ({ port }) => {
  console.log("server on http://localhost:" + port);
});
