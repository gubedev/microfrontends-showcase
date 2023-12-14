import React from "react";
import { StyledListItem } from "./style";

interface ListItemProps {
  children: React.ReactNode;
  justifyContent: React.ReactNode;
}

interface ListItemTextProps {
  children: React.ReactNode;
}

interface ComponentListItem extends React.FC<ListItemProps> {
  Text: React.FC<ListItemTextProps>;
}

const ListItem: ComponentListItem = ({
  children,
  justifyContent,
  ...props
}: ListItemProps) => {
  const classNames = ["list-item", justifyContent && "justifyContent"]
    .filter(Boolean)
    .join(" ");

  return (
    <StyledListItem className={classNames} {...props}>
      {children}
    </StyledListItem>
  );
};

const ListItemText: React.FC<ListItemTextProps> = ({ children }) => {
  return <>{children}</>;
};

ListItem.Text = ListItemText;

export { ListItem };
