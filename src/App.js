import React from "react";
import Game from "./components/Game";
import styled from "@emotion/styled";

const AppDiv = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  min-width: 100vw;
  font-size: calc(10px + 2vmin);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <AppDiv>
      <Game />
    </AppDiv>
  );
}

export default App;
