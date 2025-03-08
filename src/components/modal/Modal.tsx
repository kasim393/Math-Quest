import styled from "styled-components";
import Button from "../button/Button";
import { Link } from "react-router";
import { GoHomeFill } from "react-icons/go";

const OverLay = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.2);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  background: #f5f5f5;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 16px;
  border-radius: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
  width: 80%;
  max-width: 400px;
  max-height: 80%;
  overflow: auto;
`;

const BtnDiv = styled.div`
  margin-top: 16px;
`;

interface Props {
  children: React.ReactNode;
}
const Modal = ({ children }: Props) => {
  return (
    <OverLay>
      <Container>
        {children}
        <BtnDiv>
          <Link to="/">
            <Button variant="tertiary">
              <GoHomeFill />
            </Button>
          </Link>
        </BtnDiv>
      </Container>
    </OverLay>
  );
};

export default Modal;
