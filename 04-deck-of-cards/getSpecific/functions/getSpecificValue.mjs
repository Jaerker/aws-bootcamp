
export default function GetSpecificCard(value, body){
  let {deck} = body;
  let returnValue = deck.filter(x => x.value === value);

  return returnValue;
  };
  
