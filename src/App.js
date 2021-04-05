import React, { useState } from "react";
import { lightTheme, darkTheme, GlobalStyle } from "./themes.js";
import styled, { ThemeProvider } from "styled-components";
import { Cursor } from "./CustomCursor/Cursor";
import { isMobile } from "react-device-detect";

const StyledApp = styled.div`
  display: flex;
  margin-top: 15rem;
  font-weight: bold;
  transition: all 4s;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: ${(props) => props.theme.fontColor};
  font-size: ${(props) => props.theme.fontSize};
  font-family: ${(props) => props.theme.fontFamily};

  @media screen and (max-width: 480px) {
    font-size: ${(props) => props.theme.mobileFontSize};
  }

  button {
    cursor: none;
    height: 50px;
    width: 100px;
    border: none;
    outline: none;
    font-size: 13px;
    margin-top: 10px;
    font-weight: bold;
    transition: all 2s;
    border-radius: 20px;
    letter-spacing: 0.1px;
    font-family: ${(props) => props.theme.fontFamily};
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.fontColorButton};
  }

  i {
    transition: all 2s;
    color: ${(props) => props.theme.iconColor};
  }
`;

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
      {isMobile ? <></> : <Cursor />}
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <StyledApp>
          <i className={theme === "light" ? "ri-sun-fill" : "ri-moon-fill"}></i>
          Do you like light or dark theme?
          <button onClick={() => themeToggler()}>
            {theme === "light" ? "Dark" : "Light"}
          </button>
        </StyledApp>
      </ThemeProvider>
    </>
  );
}

export default App;
