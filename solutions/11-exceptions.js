export class ParseError extends Error {
  constructor(message) {
    super(message);
    this.name = "ParseError";
  }
}

// BEGIN
const parseJson = (str) =>{
  try{
  const res = JSON.parse(str)
  return res
  }

  catch{
    throw new ParseError('Invalid JSON string')
  
  }

}
export{parseJson}
// END
