import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function NotFound() {
  return <Container to="/">Page Not Found!</Container>;
}

const Container = styled(Link)`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 25vh;
  font-size: 2rem;
  color: #000000;
  text-decoration: none;
`;
