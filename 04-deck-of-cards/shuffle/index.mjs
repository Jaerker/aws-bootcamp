import ShuffleDeck from "./functions/shuffleDeck.mjs";

export const handler = async (event) => {
    // TODO implement
    const response = {
      statusCode: 200,
      headers:{
        "Content-Type":"text/json" 
      },
      body: JSON.stringify(ShuffleDeck(JSON.parse(event.body))),
    };
    return response;
  };