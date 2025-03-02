import styled from "styled-components";
import Button from "../components/button/Button";
import { Link } from "react-router";
import { useState } from "react";
import { useOperationStore } from "../utils/store";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  height: 100vh;
  gap: 16px;
`;
const Title = styled.h1`
  font-size: 2.5rem;
  color: #ab836d;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;
  button {
    width: 100%;
  }
`;

const Footer = styled.footer`
  display: flex;
  gap: 10px;
`;

const OperationMenu = () => {
  const [operation, setOperation] = useState<string>("");

  const updateOperation = useOperationStore((state) => state.updateOperation);
  const handleOperation = (operation: string) => {
    setOperation(operation);
    updateOperation(operation);
  };

  return (
    <Container>
      <Title>Select your operation</Title>
      <BtnContainer>
        <Button
          variant={operation === "+" ? "secondary" : "tertiary"}
          onClick={() => handleOperation("+")}
        >
          + addition
        </Button>
        <Button
          variant={operation === "-" ? "secondary" : "tertiary"}
          onClick={() => handleOperation("-")}
        >
          - subtraction
        </Button>
        <Button
          variant={operation === "*" ? "secondary" : "tertiary"}
          onClick={() => handleOperation("*")}
        >
          x multiplication
        </Button>
        <Button
          variant={operation === "/" ? "secondary" : "tertiary"}
          onClick={() => handleOperation("/")}
        >
          ÷ division
        </Button>

        <Button
          variant={operation === "random" ? "secondary" : "tertiary"}
          onClick={() => handleOperation("random")}
        >
          ? random
        </Button>
      </BtnContainer>
      <Footer>
        <Link to="/">
          <Button variant="tertiary">Back</Button>
        </Link>
        <Link to="/game">
          <Button variant="primary" disabled={!operation}>
            Continue
          </Button>
        </Link>
      </Footer>
    </Container>
  );
};

export default OperationMenu;
