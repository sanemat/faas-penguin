import { faasPenguinLocal } from "./lib/faas-penguin-local.js";

const myArgs = process.argv.slice(2);
const port = Number(myArgs[0]) || 4000;
faasPenguinLocal().listen(port, "localhost");
