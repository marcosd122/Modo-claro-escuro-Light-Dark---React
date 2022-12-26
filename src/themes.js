import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#424890",
  fontColor: "#3be7bc",
};

export const darkTheme = {

  body: "#1f2641",
  fontColor: "#fff",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}
`;