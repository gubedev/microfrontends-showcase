import React, { ReactNode } from "react";
import { StyledButton } from "./style";

/**
 * Props for the Button component.
 */
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  secondary?: boolean;
  large?: boolean;
  hover?: boolean;
  selected?: boolean;
}

/**
 * Props for the Button text component.
 */
interface ButtonTextProps {
  children: ReactNode;
}

/**
 * A compound component representing a button.
 */
interface ComponentButton extends React.FC<ButtonProps> {
  Text: React.FC<ButtonTextProps>;
}

/**
 * The Button component.
 *
 * @param {ButtonProps} props - The component props.
 * @returns {JSX.Element} The rendered Button component.
 */
const Button: ComponentButton = ({
  children,
  secondary,
  large,
  hover,
  selected,
  ...props
}) => {
  const classNames = [
    "button",
    secondary && "secondary",
    large && "large",
    hover && "hover",
    selected && "selected",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <StyledButton className={classNames} {...props}>
      {children}
    </StyledButton>
  );
};

const ButtonText: React.FC<ButtonTextProps> = ({ children }) => {
  return <>{children}</>;
};

Button.Text = ButtonText;

export { Button };
