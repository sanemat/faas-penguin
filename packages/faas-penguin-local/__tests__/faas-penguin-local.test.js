import { strict as assert } from "assert";
import * as http from "http";
import { faasPenguinLocal } from "../lib/faas-penguin-local.js";
import fs from "fs";
const expected = fs.readFileSync(
  new URL("./png-transparent.png", import.meta.url)
);

const server = faasPenguinLocal();
server.listen(4000, "localhost", (err) => {
  if (err) {
    assert.fail();
    throw err;
  }
  http.get("http://localhost:4000", (res) => {
    let data = [];
    res.on("data", (chunk) => {
      data.push(chunk);
    });
    res.on("end", () => {
      assert.ok(expected.equals(Buffer.concat(data)));
      server.close();
    });
    res.on("error", () => {
      server.close();
    });
  });
});
