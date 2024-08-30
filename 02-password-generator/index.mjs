import GeneratePassword from "./functions/passwordGenerator.mjs";

export const handler = async (event) => {
    // TODO implement
    const response = {
      statusCode: 200,
      headers:{
        "Content-Type":"text/json" 
      },
      body: JSON.stringify(GeneratePassword(JSON.parse(event.body))),
    };
    return response;
  };
  