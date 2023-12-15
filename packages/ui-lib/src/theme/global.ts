import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		font-family: 'Montserrat', sans-serif;
		box-sizing: border-box;
		transition: all 0.5s ease;
	}
	a {
		text-decoration: none;
	}
`;
