import React from "react";
import Game from "./components/Game";
import styled from "@emotion/styled";
import GlobalStyles from "./components/GlobalStyles";

const AppDiv = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  min-width: 100vw;
  font-size: calc(10px + 2vmin);
  color: white;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  & > h1 {
    color: #32a852;
    text-shadow: 3px 3px #000;
  }
`;

function App() {
  return (
    <AppDiv>
      <GlobalStyles />
      <h1>Shiny Giggle</h1>
      <Game />
    </AppDiv>
  );
}

export default App;
