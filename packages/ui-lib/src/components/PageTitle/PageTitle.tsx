import React from "react";
import { StyledPageTitle } from "./style";

interface PageTitleProps {
  title: string;
}

export function PageTitle({ title }: PageTitleProps) {
  return <StyledPageTitle>{title}</StyledPageTitle>;
}
