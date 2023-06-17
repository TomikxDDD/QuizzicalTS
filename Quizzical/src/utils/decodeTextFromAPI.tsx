/** Decoding the text from API call; Code taken from 
 * https://stackoverflow.com/questions/47962519/html-special-character-symbol-not-rendering-in-react-component 
*/
export function decodeTextFromAPI(textToDecode: string): string{
  const parser: DOMParser = new DOMParser();
  const decodedQuestion: string = parser.parseFromString(textToDecode, 'text/html').body.textContent!;
  return decodedQuestion
}