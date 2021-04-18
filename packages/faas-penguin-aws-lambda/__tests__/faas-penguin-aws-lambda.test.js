const { faasPenguinAwsLambda } = require("../lib/faas-penguin-aws-lambda");
const assert = require("assert/strict");

(async () => {
  let event = null;
  let context = null;
  const result = await faasPenguinAwsLambda(event, context);
  assert.equal(typeof result, "object");
  assert.equal(result.statusCode, 200);
  assert.equal(typeof result.body, "string");

  let response = JSON.parse(result.body);

  assert.equal(typeof response, "object");
  assert.equal(response.message, "hello world from lib");
})();
