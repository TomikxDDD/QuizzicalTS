import { IAnswer } from "../components/Question/Question";

/**
 * Shuffle algorithm taken from https://www.w3docs.com/snippets/javascript/how-to-randomize-shuffle-a-javascript-array.html
 */
export function shuffleArray(arr: IAnswer[]): IAnswer[] {

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); 
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr
}

