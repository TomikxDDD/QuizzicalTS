export enum Category{
  'ANY' = '',
  'GENERAL_KNOWLEDGE'= 9,
  'ENTERTAINMENT_BOOKS',
  'ENTERTAINMENT_FILM',
  'ENTERTAINMENT_MUSIC',
  'ENTERTAINMENT_MUSICALS_THEATRES',
  'ENTERTAINMENT_TELEVISION',
  'ENTERTAINMENT_VIDEO_GAMES',
  'ENTERTAINMENT_BOARD_GAMES',
  'SCIENCE_NATURE',
  'SCIENCE_COMPUTERS',
  'SCIENCE_MATHEMATICS',
  'MYTHODOLOGY',
  'SPORTS',
  'GEOGRAPHY',
  'HISTORY',
  'POLITICS',
  'ART',
  'CELEBRITIES',
  'ANIMALS',
  'VEHICLES',
  'ENTERTAINMENT_COMICS',
  'SCIENCE_GADGETS',
  'ENTERTAINMENT_JAPANESE_ANIME_MANGA',
  'ENTERTAINMENT_CARTOON_ANIMATIONS',
}

export enum Difficulty{
  'ANY' = '',
  'EASY' = 'easy',
  'MEDIUM' = 'medium',
  'HARD' = 'hard'
}

export enum questionType{
  'ANY' = '',
  'MULTIPLE' = 'multiple',
  'BOOLEAN' = 'boolean'
}

export interface Settings{
  numOfQuestions: number,
  category: Category,
  difficulty: Difficulty,
  type: questionType
}

export const initialSettings: Settings = {
  numOfQuestions: 5,
  category: Category.ANY,
  difficulty: Difficulty.ANY,
  type: questionType.ANY
}