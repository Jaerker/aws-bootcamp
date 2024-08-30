import GetSpecificValue from "./functions/getSpecificValue.mjs";

export const handler = async (event) => {
    // TODO implement
    const response = {
      statusCode: 200,
      headers:{
        "Content-Type":"text/json" 
      },
      body: JSON.stringify(GetSpecificValue(JSON.parse(event.pathParameters.value),JSON.parse(event.body))),
    };
    return response;
  };

  // console.log(GetSpecificValue({value:1}, {
  //   deck: [
  //     {
  //       "value": 12,
  //       "suit": "diamonds",
  //       "card": "Queen of diamonds"
  //     },
  //     {
  //       "value": 10,
  //       "suit": "diamonds",
  //       "card": "10 of diamonds"
  //     },
  //     {
  //       "value": 3,
  //       "suit": "spades",
  //       "card": "3 of spades"
  //     },
  //     {
  //       "value": 11,
  //       "suit": "diamonds",
  //       "card": "Jack of diamonds"
  //     },
  //     {
  //       "value": 4,
  //       "suit": "spades",
  //       "card": "4 of spades"
  //     },
  //     {
  //       "value": 3,
  //       "suit": "hearts",
  //       "card": "3 of hearts"
  //     },
  //     {
  //       "value": 5,
  //       "suit": "clubs",
  //       "card": "5 of clubs"
  //     },
  //     {
  //       "value": 10,
  //       "suit": "spades",
  //       "card": "10 of spades"
  //     },
  //     {
  //       "value": 12,
  //       "suit": "clubs",
  //       "card": "Queen of clubs"
  //     },
  //     {
  //       "value": 1,
  //       "suit": "spades",
  //       "card": "Ace of spades"
  //     },
  //     {
  //       "value": 3,
  //       "suit": "clubs",
  //       "card": "3 of clubs"
  //     },
  //     {
  //       "value": 12,
  //       "suit": "spades",
  //       "card": "Queen of spades"
  //     },
  //     {
  //       "value": 9,
  //       "suit": "spades",
  //       "card": "9 of spades"
  //     },
  //     {
  //       "value": 6,
  //       "suit": "diamonds",
  //       "card": "6 of diamonds"
  //     },
  //     {
  //       "value": 13,
  //       "suit": "clubs",
  //       "card": "King of clubs"
  //     },
  //     {
  //       "value": 13,
  //       "suit": "diamonds",
  //       "card": "King of diamonds"
  //     },
  //     {
  //       "value": 5,
  //       "suit": "hearts",
  //       "card": "5 of hearts"
  //     },
  //     {
  //       "value": 4,
  //       "suit": "hearts",
  //       "card": "4 of hearts"
  //     },
  //     {
  //       "value": 6,
  //       "suit": "spades",
  //       "card": "6 of spades"
  //     },
  //     {
  //       "value": 2,
  //       "suit": "diamonds",
  //       "card": "2 of diamonds"
  //     },
  //     {
  //       "value": 4,
  //       "suit": "diamonds",
  //       "card": "4 of diamonds"
  //     },
  //     {
  //       "value": 11,
  //       "suit": "hearts",
  //       "card": "Jack of hearts"
  //     },
  //     {
  //       "value": 1,
  //       "suit": "hearts",
  //       "card": "Ace of hearts"
  //     },
  //     {
  //       "value": 8,
  //       "suit": "diamonds",
  //       "card": "8 of diamonds"
  //     },
  //     {
  //       "value": 8,
  //       "suit": "spades",
  //       "card": "8 of spades"
  //     },
  //     {
  //       "value": 2,
  //       "suit": "hearts",
  //       "card": "2 of hearts"
  //     },
  //     {
  //       "value": 13,
  //       "suit": "spades",
  //       "card": "King of spades"
  //     },
  //     {
  //       "value": 7,
  //       "suit": "hearts",
  //       "card": "7 of hearts"
  //     },
  //     {
  //       "value": 5,
  //       "suit": "diamonds",
  //       "card": "5 of diamonds"
  //     },
  //     {
  //       "value": 12,
  //       "suit": "hearts",
  //       "card": "Queen of hearts"
  //     },
  //     {
  //       "value": 7,
  //       "suit": "spades",
  //       "card": "7 of spades"
  //     },
  //     {
  //       "value": 4,
  //       "suit": "clubs",
  //       "card": "4 of clubs"
  //     },
  //     {
  //       "value": 1,
  //       "suit": "diamonds",
  //       "card": "Ace of diamonds"
  //     },
  //     {
  //       "value": 6,
  //       "suit": "clubs",
  //       "card": "6 of clubs"
  //     },
  //     {
  //       "value": 11,
  //       "suit": "clubs",
  //       "card": "Jack of clubs"
  //     },
  //     {
  //       "value": 10,
  //       "suit": "clubs",
  //       "card": "10 of clubs"
  //     },
  //     {
  //       "value": 13,
  //       "suit": "hearts",
  //       "card": "King of hearts"
  //     },
  //     {
  //       "value": 7,
  //       "suit": "diamonds",
  //       "card": "7 of diamonds"
  //     },
  //     {
  //       "value": 9,
  //       "suit": "hearts",
  //       "card": "9 of hearts"
  //     },
  //     {
  //       "value": 2,
  //       "suit": "spades",
  //       "card": "2 of spades"
  //     },
  //     {
  //       "value": 9,
  //       "suit": "clubs",
  //       "card": "9 of clubs"
  //     },
  //     {
  //       "value": 10,
  //       "suit": "hearts",
  //       "card": "10 of hearts"
  //     },
  //     {
  //       "value": 1,
  //       "suit": "clubs",
  //       "card": "Ace of clubs"
  //     },
  //     {
  //       "value": 2,
  //       "suit": "clubs",
  //       "card": "2 of clubs"
  //     },
  //     {
  //       "value": 8,
  //       "suit": "clubs",
  //       "card": "8 of clubs"
  //     },
  //     {
  //       "value": 11,
  //       "suit": "spades",
  //       "card": "Jack of spades"
  //     },
  //     {
  //       "value": 7,
  //       "suit": "clubs",
  //       "card": "7 of clubs"
  //     },
  //     {
  //       "value": 3,
  //       "suit": "diamonds",
  //       "card": "3 of diamonds"
  //     },
  //     {
  //       "value": 5,
  //       "suit": "spades",
  //       "card": "5 of spades"
  //     },
  //     {
  //       "value": 9,
  //       "suit": "diamonds",
  //       "card": "9 of diamonds"
  //     },
  //     {
  //       "value": 6,
  //       "suit": "hearts",
  //       "card": "6 of hearts"
  //     },
  //     {
  //       "value": 8,
  //       "suit": "hearts",
  //       "card": "8 of hearts"
  //     }
  //   ]
  // }))
