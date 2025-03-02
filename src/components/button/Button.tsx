import styled from "styled-components";

const StyledButton = styled.button<{
  $variant: "primary" | "secondary" | "tertiary";
}>`
  background: ${({ $variant }) => {
    if ($variant === "primary") return "#58ac2c";
    if ($variant === "secondary") return "#d18f4d";
    if ($variant === "tertiary") return "#b99c79";
  }};
  border-radius: 16px;
  border: none;
  padding: 0;
  font-family: inherit;
  cursor: pointer;
  outline-offset: 2px;
  .front {
    display: block;
    padding: 12px 24px;
    border-radius: 16px;
    font-size: 1.25rem;
    font-weight: 600;
    background: ${({ $variant }) => {
      if ($variant === "primary") return "#a0d655";
      if ($variant === "secondary") return "#edcb7b";
      if ($variant === "tertiary") return "#cfb294";
    }};
    color: ${({ $variant }) => {
      if ($variant === "primary") return "#528a1b";
      if ($variant === "secondary") return "#ce713e";
      if ($variant === "tertiary") return "#9b7560";
    }};
    transform: translateY(-2px);
  }
  &:active .front {
    transform: translateY(0px);
  }
`;

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  onClick,
  disabled,
}: ButtonProps) => {
  return (
    <StyledButton $variant={variant} onClick={onClick} disabled={disabled}>
      <span className="front">{children}</span>
    </StyledButton>
  );
};

export default Button;
