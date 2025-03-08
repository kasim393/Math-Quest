import { useState, useMemo } from "react";
import { GAME_CONFIG } from "../utils/const";
import {
  evaluateAnswer,
  generateOptions,
  generateRandomNumber,
  getRandomOperator,
} from "../utils/helper";

type Difficulty = "easy" | "medium" | "hard";

export const useGameLogic = (difficulty: Difficulty, operation: string) => {
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);
  const [lives, setLives] = useState<number>(GAME_CONFIG.INITIAL_LIVES);
  const [isGameOver, setIsGameOver] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const questions = useMemo(() => {
    const questions = [];
    const { maxNumber } =
      GAME_CONFIG.DIFFICULTY_SETTINGS[difficulty] ||
      GAME_CONFIG.DIFFICULTY_SETTINGS.easy;

    for (let i = 0; i < GAME_CONFIG.TOTAL_QUESTIONS; i++) {
      const num1 = generateRandomNumber(1, maxNumber);
      const num2 = generateRandomNumber(1, maxNumber);
      const operator = operation === "random" ? getRandomOperator() : operation;
      const correctAnswer = evaluateAnswer(num1, num2, operator);
      const options = generateOptions(correctAnswer);

      questions.push({ num1, num2, operator, correctAnswer, options });
    }
    return questions;
  }, [operation, difficulty]);

  const handleAnswer = (selectedAnswer: number, correctAnswer: number) => {
    if (selectedAnswer === correctAnswer) {
      const points =
        GAME_CONFIG.DIFFICULTY_SETTINGS[difficulty]?.points ||
        GAME_CONFIG.DIFFICULTY_SETTINGS.easy.points;
      setScore((prev) => prev + points);
      setProgress((prev) => prev + GAME_CONFIG.PROGRESS_INCREMENT);
    } else {
      setLives((prev) => prev - 1);
      if (lives <= 1) setIsGameOver(true);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setIsGameOver(true);
    }
  };

  return {
    score,
    progress,
    lives,
    isGameOver,
    currentQuestion: questions[currentQuestionIndex],
    handleAnswer,
  };
};
