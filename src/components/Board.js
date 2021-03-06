import React from "react";
import Square from "./Square";
import { calculateWinner } from "./winner";
import Status from "./Status";
import styled from "@emotion/styled";
import Game from "./Game";

const GameFlex = styled.div`
  width: ${props => 100 * Math.sqrt(props.size)}px;

  > * {
    background: #32aaaa;
    height: 100px;
    width: 100px;
  }

  & Square {
    padding: 5px;
  }
`;

export default function Board() {
  const [squares, setSquares] = React.useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = React.useState(true);

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "0"}`;
  }

  function handleClick(index) {
    if (calculateWinner(squares) || squares[index]) {
      return;
    }
    if (squares[index]) {
      return;
    }
    const squaresClone = [...squares];
    squaresClone[index] = xIsNext ? "X" : "0";
    setXIsNext(!xIsNext);
    setSquares(squaresClone);
  }

  return (
    <div>
      <Status>{status}</Status>
      <GameFlex size={9}>
        <Square
          value={squares[0]}
          onClick={() => {
            handleClick(0);
          }}
        />
        <Square
          value={squares[1]}
          onClick={() => {
            handleClick(1);
          }}
        />
        <Square
          value={squares[2]}
          onClick={() => {
            handleClick(2);
          }}
        />
        <Square
          value={squares[3]}
          onClick={() => {
            handleClick(3);
          }}
        />
        <Square
          value={squares[4]}
          onClick={() => {
            handleClick(4);
          }}
        />
        <Square
          value={squares[5]}
          onClick={() => {
            handleClick(5);
          }}
        />
        <Square
          value={squares[6]}
          onClick={() => {
            handleClick(6);
          }}
        />
        <Square
          value={squares[7]}
          onClick={() => {
            handleClick(7);
          }}
        />
        <Square
          value={squares[8]}
          onClick={() => {
            handleClick(8);
          }}
        />
      </GameFlex>
    </div>
  );
}
