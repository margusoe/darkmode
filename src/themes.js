import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "fff",
  fontColor: "#000",
  fontSize: "24px",
  fontFamily: "'New Tegomin', serif",
  backgroundColor: "#333",
  fontColorButton: "#fff",
  iconColor: "orange",
};

export const darkTheme = {
  body: "#333",
  fontColor: "#fff",
  fontSize: "44px",
  fontFamily: "'New Tegomin', serif",
  backgroundColor: "#fff",
  fontColorButton: "#333",
  iconColor: "#fff",
};

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.body}
    }
`;
