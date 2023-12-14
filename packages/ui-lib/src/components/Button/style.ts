import styled from "styled-components";

interface StyledButtonProps {
  secondary?: boolean;
  large?: boolean;
  selected?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;

  &.secondary {
    background-color: #ccc;
    color: #333;
  }

  &.large {
    font-size: 20px;
  }

  &:hover {
    background-color: #0056b3;
  }

  &.selected {
    background-color: red;
    color: white;
  }
`;
