import { Link } from "react-router";
import Button from "../components/button/Button";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 16px;
  color: #ab836d;
`;

const MainMenu = () => {
  return (
    <Container>
      <Title>Math Quest</Title>
      <Link to="/operation">
        <Button variant="primary">New Game</Button>
      </Link>
    </Container>
  );
};

export default MainMenu;
