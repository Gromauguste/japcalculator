exports.handler = async function(event, context) {
  return {
    statusCode: 418,
    body: JSON.stringify({ message: "Hello, I'm a teapot for the new feature" }),
  };
};
