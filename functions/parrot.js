exports.handler = async function(event, context) {
  console.log(event);

  try { 
    const requestBody = JSON.parse(event.body);
    const message = requestBody.message;

    if (event.httpMethod === "OPTIONS") {
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
      };
      return {
        statusCode: 200, // <-- Must be 200 otherwise pre-flight call fails
        headers,
        body: "This was a preflight call!",
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: message }),
    };

  
  }
  catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Nothing to repeat :(, please send a message" }),
    };
  }
  /* if (message) {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: message }),
    };
  }
  return {
    statusCode: 400,
    body: JSON.stringify({ message: "Nothing to repeat :(" }),
  }; */
};
