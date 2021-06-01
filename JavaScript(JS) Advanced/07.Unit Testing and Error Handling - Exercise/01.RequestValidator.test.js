function solve(input) {
  let correctMethods = [`GET`, `POST`, `DELETE`, `CONNECT`];
  if (!correctMethods.includes(input.method) || input.method === undefined) {
    throw new Error(`Invalid request header: Invalid Method`);
  }
  let uriMatcher = /^[a-zA-Z0-9\.]+$/gm
  let uriMatch = uriMatcher.test(input.uri)
  if (!uriMatch || !input.uri || input.uri === undefined) {
    throw new Error(`Invalid request header: Invalid URI`);
  }
  let correctVersion = [`HTTP/0.9`, `HTTP/1.0`, `HTTP/1.1`, `HTTP/2.0`];
  if (
    !correctVersion.includes(input.version) ||
    input.version === undefined
  ) {
    throw new Error(`Invalid request header: Invalid Version`);
  }
  let incorrectMsg = /[<>\\&'"]/gm;
  let msgCheck = incorrectMsg.test(input.message)

  if (msgCheck || input.message === undefined) {
    throw new Error(`Invalid request header: Invalid Message`);
  }
  return input;
}
console.log(
  solve({
    method: 'GET',
  uri: 'kkk jjjj',
  version: 'HTTP/1.1',
  message: ''

  })
);
