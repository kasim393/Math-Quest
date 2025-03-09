import styled from "styled-components";
import Button from "../components/button/Button";
import { Link } from "react-router";
import { useState } from "react";
import { useIsTimerStore, useOperationStore } from "../utils/store";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import Switch from "../components/switch/Switch";
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
  align-items: center;
  gap: 10px;
  > p {
    font-size: 1.2rem;
    color: #ab836d;
    font-weight: 600;
  }
`;

const OperationMenu = () => {
  const [operation, setOperation] = useState<string>("");

  const updateOperation = useOperationStore((state) => state.updateOperation);
  const updateIsTimer = useIsTimerStore((state) => state.updateIsTimer);
  const isTimer = useIsTimerStore((state) => state.isTimer);
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
          variant={operation === "x" ? "secondary" : "tertiary"}
          onClick={() => handleOperation("x")}
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
        <p>Add timer</p>
        <Switch
          onChange={(e) => {
            updateIsTimer(e.target.checked);
          }}
          checked={isTimer}
        />
      </Footer>
      <Footer>
        <Link to="/">
          <Button variant="tertiary">
            <IoIosArrowDropleftCircle />
            Back
          </Button>
        </Link>
        <Link to="/game">
          <Button variant="primary" disabled={!operation}>
            Continue <IoIosArrowDroprightCircle />
          </Button>
        </Link>
      </Footer>
    </Container>
  );
};

export default OperationMenu;
