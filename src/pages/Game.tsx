import { useState } from "react";
import { FaPause } from "react-icons/fa";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import styled from "styled-components";
import Button from "../components/button/Button";
import Modal from "../components/modal/Modal";
import ProgressBar from "../components/progressbar/ProgressBar";
import { useGameLogic } from "../hooks/useGame";
import { GAME_CONFIG } from "../utils/const";
import { useDifficultyStore, useOperationStore } from "../utils/store";

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
  const [isPaused, setIsPaused] = useState(false);
  const operation = useOperationStore((state) => state.operation);
  const difficulty = useDifficultyStore((state) => state.difficulty);

  const { score, progress, lives, isGameOver, currentQuestion, handleAnswer } =
    useGameLogic(difficulty, operation);

  const renderLives = () => (
    <div className="icons">
      {Array.from({ length: lives }).map((_, index) => (
        <IoMdHeart key={`full-${index}`} />
      ))}
      {Array.from({ length: GAME_CONFIG.INITIAL_LIVES - lives }).map(
        (_, index) => (
          <IoMdHeartEmpty key={`empty-${index}`} />
        )
      )}
    </div>
  );

  if (!currentQuestion) return null;

  return (
    <Container>
      <Header>
        <Row>
          <Col>
            <ProgressBar progress={progress} />
            {renderLives()}
          </Col>
          <div>
            <Button variant="tertiary" onClick={() => setIsPaused(!isPaused)}>
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
            onClick={() => handleAnswer(option, currentQuestion.correctAnswer)}
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
      {isPaused && (
        <Modal>
          <p>Game Paused</p>
          <Button onClick={() => setIsPaused(false)}>Resume</Button>
        </Modal>
      )}
    </Container>
  );
};

export default Game;
