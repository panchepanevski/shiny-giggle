import React from "react";
import styled from "@emotion/styled";

const Button = styled.button`
  border: 3px solid #292929;
  float: left;
  font-size: 40px;
  font-weight: bold;

  padding: 0;
  text-align: center;

  :focus {
    outline: none;
  }
`;

export default function Square({ value, onClick }) {
  return <Button onClick={onClick}>{value}</Button>;
}
