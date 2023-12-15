import React from "react";
import { StyledListItemContentInfoTitle } from "./style";

interface ListItemContentInfoTitleProps {
  children: React.ReactNode;
}

export function ListItemContentInfoTitle({
  children,
}: ListItemContentInfoTitleProps) {
  return (
    <StyledListItemContentInfoTitle>{children}</StyledListItemContentInfoTitle>
  );
}
