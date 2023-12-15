import React from "react";
import { StyledListItemContentPicture } from "./style";

interface ListItemContentPictureProps {
  src: string;
  alt: string;
}

export function ListItemContentPicture({
  src,
  alt,
}: ListItemContentPictureProps) {
  return <StyledListItemContentPicture src={src} alt={alt} />;
}
