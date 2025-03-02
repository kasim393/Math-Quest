import styled from "styled-components";
const StyledProgress = styled.progress`
  &[value] {
    --color: white; /* the progress color */
    --background: #d4b799; /* the background color */

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 4px solid #cf8a46;
    border-radius: 10em;
    background: var(--background);
  }
  &[value]::-webkit-progress-bar {
    border-radius: 10em;
    background: var(--background);
  }
  &[value]::-webkit-progress-value {
    border-radius: 10em;
    background: var(--color);
  }
  &[value]::-moz-progress-bar {
    border-radius: 10em;
    background: var(--color);
  }
`;

interface PropsType {
  progress: number;
}

const ProgressBar = ({ progress }: PropsType) => {
  return <StyledProgress value={progress} max="100" />;
};

export default ProgressBar;
