import styled from "styled-components";

type Item = {
  label: string;
  value: string;
};

type Props = {
  items: Item[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
};

const StyledSelect = styled.select`
  padding: 4px 8px;
  border-radius: 8px;
  border: 2px solid #ab836d;
  font-size: 1rem;
  color: #5e483c;
  background-color: #d4b799;
  cursor: pointer;
  outline: none;
`;

const Select = ({ items, onChange, value }: Props) => {
  return (
    <StyledSelect onChange={onChange} defaultValue={value}>
      {items.map((item, index) => (
        <option key={index} value={item.value}>
          {item.label}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Select;
