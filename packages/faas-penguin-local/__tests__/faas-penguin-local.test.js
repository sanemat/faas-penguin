import { strict as assert } from "assert";
import * as http from "http";
import { faasPenguinLocal } from "../lib/faas-penguin-local.js";

const server = faasPenguinLocal();
server.listen(4000, "localhost", (err) => {
  if (err) {
    assert.fail();
    throw err;
  }
  http.get("http://localhost:4000", (res) => {
    let body = "";
    res.on("data", (data) => {
      body += data;
    });
    res.on("end", () => {
      assert.equal(body, "Hello World\n");
      server.close();
    });
    res.on("error", () => {
      server.close();
    });
  });
});
