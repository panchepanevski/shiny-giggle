import React from "react";
import Board from "./Board";
import styled from "@emotion/styled";

const GameDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const GameInfoDiv = styled.div`
  margin-left: 20px;
`;

export default function Game() {
  return (
    <GameDiv>
      <Board />
      <GameInfoDiv />
    </GameDiv>
  );
}
