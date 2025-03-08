import { Link } from "react-router";
import Button from "../components/button/Button";
import styled from "styled-components";
import { IoMdSettings } from "react-icons/io";

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

const BtnDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const MainMenu = () => {
  return (
    <Container>
      <Title>Math Quest</Title>
      <BtnDiv>
        <Link to="/operation">
          <Button variant="primary">New Game</Button>
        </Link>
        <Link to="/settings">
          <Button variant="tertiary">
            <IoMdSettings />
          </Button>
        </Link>
      </BtnDiv>
    </Container>
  );
};

export default MainMenu;
