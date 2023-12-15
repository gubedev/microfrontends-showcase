import styled from "styled-components";

const MAX_SIZE_SCREEN = 1920;
const LEFT_RIGHT_MARGIN = 228;

export const Container = styled.div`
  ${({ theme }) => `
    width: 100%;
    margin: 0 auto;
    @media ${theme.media.desktop} {
      width: 95%;
    }
    @media screen and (min-width: ${MAX_SIZE_SCREEN - LEFT_RIGHT_MARGIN}px) {
      width: calc(${MAX_SIZE_SCREEN}px - ${LEFT_RIGHT_MARGIN * 2}px);
    }
  `}
`;
