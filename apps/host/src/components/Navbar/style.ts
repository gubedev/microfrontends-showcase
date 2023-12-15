import styled from "styled-components";

export const Nav = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  width: 100%;
  height: ${({ theme }) => theme.layout.navbarHeight};
  left: 0px;
  top: 0px;
  padding: 40px 20px 40px 20px;
  z-index: 5;
  box-shadow: ${({ theme }) => theme.shadows.elevation2};
`;

export const NavBarContent = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
