import CreateDeck from "./functions/createDeck.mjs";

export const handler = async (event) => {
    // TODO implement
    const response = {
      statusCode: 200,
      headers:{
        "Content-Type":"text/json" 
      },
      body: JSON.stringify(CreateDeck()),
    };
    return response;
  };
  