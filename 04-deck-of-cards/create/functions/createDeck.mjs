
export default function CreateDeck(){

    let deckOfCards = [];
    const amountOfCardsPerSuit = 13;
    const suits = ['hearts', 'diamonds','spades','clubs']

    for(let i=0;i <52; i++){
        deckOfCards.push({
            value : i+1 - (Math.floor(i / amountOfCardsPerSuit)*amountOfCardsPerSuit),
            suit : suits[Math.floor(i / amountOfCardsPerSuit)],
            card:  `${
                i+1 - (Math.floor(i / amountOfCardsPerSuit)*amountOfCardsPerSuit) == 1 ? 'Ace' : 
                i+1 - (Math.floor(i / amountOfCardsPerSuit)*amountOfCardsPerSuit) == 11 ? 'Jack' : 
                i+1 - (Math.floor(i / amountOfCardsPerSuit)*amountOfCardsPerSuit) == 12 ? 'Queen' : 
                i+1 - (Math.floor(i / amountOfCardsPerSuit)*amountOfCardsPerSuit) == 13 ? 'King' : 
                i+1 - (Math.floor(i / amountOfCardsPerSuit)*amountOfCardsPerSuit)} of ${suits[Math.floor(i / amountOfCardsPerSuit)]}`
        
        });
    }

    return deckOfCards;
  };
  
