import styled from "styled-components";
import Select from "../components/select/Select";
import { useDifficultyStore } from "../utils/store";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { Link } from "react-router";
import Button from "../components/button/Button";

const Container = styled.div`
  padding: 12px;
`;
const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 16px;
  color: #ab836d;
  display: flex;
  align-items: center;
  gap: 10px;
  svg {
    cursor: pointer;
  }
`;
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  color: #ab836d;
  font-size: 1.3rem;
`;

const FooterBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Settings = () => {
  const updateDifficulty = useDifficultyStore(
    (state) => state.updateDifficulty
  );
  const difficulty = useDifficultyStore((state) => state.difficulty);
  return (
    <Container>
      <Title>Settings</Title>
      <Item>
        <h3>Difficulty Level</h3>
        <Select
          value={difficulty}
          onChange={(e) =>
            updateDifficulty(e.target.value as "easy" | "medium" | "hard")
          }
          items={[
            { label: "Easy", value: "easy" },
            { label: "Medium", value: "medium" },
            { label: "Hard", value: "hard" },
          ]}
        />
      </Item>

      <Item>
        <h3>Sound</h3>
        <p>Coming soon</p>
      </Item>

      <Item>
        <h3>Theme</h3>
        <p>Coming soon</p>
      </Item>

      <Item>
        <h3>Language</h3>
        <p>Coming soon</p>
      </Item>
      <FooterBtn>
        <Link to="/">
          <Button variant="tertiary">
            <IoIosArrowDropleftCircle /> Back
          </Button>
        </Link>
      </FooterBtn>
    </Container>
  );
};

export default Settings;
