
export default function ShuffleDeck(body){
    let deck = body.deck;

    for(let i=deck.length-1; i > 0 ; i--){

        let randomIndex = Math.floor(Math.random() * i);

        [deck[i], deck[randomIndex]] = [deck[randomIndex], deck[i]]; //flippa plats på en random plats och det nuvarande kortet.
    }
    
    

    return deck;
  };
  
