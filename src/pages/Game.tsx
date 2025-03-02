import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import styled from "styled-components";
import Button from "../components/button/Button";
import { FaPause } from "react-icons/fa";
import { useState } from "react";
import ProgressBar from "../components/progressbar/ProgressBar";
import Modal from "../components/modal/Modal";
import { useOperationStore } from "../utils/store";
import {
  evaluateAnswer,
  generateOptions,
  generateRandomNumber,
  getRandomOperator,
} from "../utils/helper";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;
const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 16px;
  color: #ab836d;
`;

const OptionBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
`;
const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 16px;
  cursor: pointer;
  transition: 0.3s;
  background-color: #d4b799;
  border-bottom: 2px solid #ab836d;
  color: white;
  font-size: 3rem;
  font-weight: 600;
`;

const Header = styled.header`
  margin-bottom: 16px;
  background-color: #ebbf71;
  padding: 16px;
  border-radius: 0 0 36px 36px;
  width: 100%;
  border-bottom: 4px solid #ab836d;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  .icons {
    color: #ed5c3a;
    font-size: 2rem;
  }
`;

const Score = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  color: #ce713e;
  span {
    color: #fff;
  }
`;

const Game = () => {
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);
  const [lives, setLives] = useState(3);
  const [isGameOver, setIsGameOver] = useState(false);

  const operation = useOperationStore((state) => state.operation);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const generateQuestions = () => {
    const questions = [];
    for (let i = 0; i < 10; i++) {
      const num1 = generateRandomNumber(1, 10);
      const num2 = generateRandomNumber(1, 10);

      let operator = operation;
      if (operation === "random") {
        operator = getRandomOperator();
      }

      const correctAnswer = evaluateAnswer(num1, num2, operator);
      const options = generateOptions(correctAnswer);

      questions.push({ num1, num2, operator, correctAnswer, options });
    }
    return questions;
  };

  const questions = generateQuestions();

  const checkAnswer = (selectedAnswer: number, correctAnswer: number) => {
    if (selectedAnswer === correctAnswer) {
      setScore(score + 10);
      setProgress(progress + 10);
    } else {
      setLives(lives - 1);
      if (lives === 1) {
        setIsGameOver(true);
      }
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsGameOver(true);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <Container>
      <Header>
        <Row>
          <Col>
            <ProgressBar progress={progress} />
            <div className="icons">
              {Array.from({ length: lives }).map((_, index) => (
                <IoMdHeart key={index} />
              ))}
              {Array.from({ length: 3 - lives }).map((_, index) => (
                <IoMdHeartEmpty key={index} />
              ))}
            </div>
          </Col>
          <div>
            <Button variant="tertiary">
              <FaPause />
            </Button>
          </div>
        </Row>
        <Score>score {score}</Score>
      </Header>
      <Title>
        {currentQuestion.num1} {currentQuestion.operator} {currentQuestion.num2}
      </Title>
      <OptionBox>
        {currentQuestion.options.map((option, index) => (
          <Option
            key={index}
            onClick={() => checkAnswer(option, currentQuestion.correctAnswer)}
          >
            {option}
          </Option>
        ))}
      </OptionBox>
      {isGameOver && (
        <Modal>
          <p>Game Over</p>
          <p>Score: {score}</p>
        </Modal>
      )}
    </Container>
  );
};

export default Game;
