import { Category, Difficulty, Settings, questionType } from "../Settings";

export function getOpentdbURL(settings: Settings){
  // Example of an API call URL: https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple
  const baseUrl: string = "https://opentdb.com/api.php?"
  const amountUrl: string = `amount=${settings.numOfQuestions}`
  const categoryUrl: string = `category=${settings.category}` 
  const difficultyUrl: string = `difficulty=${settings.difficulty}`
  const typeUrl: string = `type=${settings.type}`

  let url = baseUrl + amountUrl

  if (settings.category !== Category.ANY) url += `\&${categoryUrl}`
  if (settings.difficulty !== Difficulty.ANY) url += `\&${difficultyUrl}`
  if (settings.type !== questionType.ANY) url += `\&${typeUrl}`


  return url
}