export const GAME_CONFIG = {
  TOTAL_QUESTIONS: 10,
  INITIAL_LIVES: 3,
  DIFFICULTY_SETTINGS: {
    easy: {
      maxNumber: 10,
      points: 10,
    },
    medium: {
      maxNumber: 25,
      points: 20,
    },
    hard: {
      maxNumber: 50,
      points: 30,
    },
  },
  PROGRESS_INCREMENT: 10,
} as const;
