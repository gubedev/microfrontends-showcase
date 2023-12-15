import styled from "styled-components";

interface StyledButtonProps {
  secondary?: boolean;
  large?: boolean;
  selected?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 10px 20px;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.brand.light};
  border: none;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 8px;
  cursor: pointer;
  border-radius: 24px;

  p {
    color: ${({ theme }) => theme.colors.neutrals.c600};
    font-weight: 600;
    text-transform: uppercase;
  }

  &.secondary {
    background-color: ${({ theme }) => theme.colors.brand.light};
    color: #333;
  }

  &.large {
    font-size: 20px;
  }

  &.selected {
    background: ${({ theme }) => theme.colors.brand.default};
    p {
      color: ${({ theme }) => theme.colors.neutrals.c0};
      font-weight: 600;
      text-transform: uppercase;
    }
  }
`;
