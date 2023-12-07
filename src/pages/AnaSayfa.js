import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import myImage from "../mvp-banner.png";

const StyledApp = styled.div`
  background-image: url(${myImage});
  background-size: cover;
  margin: auto;
  height: 100vh;
  overflow: hidden;
`;

const Container = styled.div`
  text-align: center;
  color: white;
  margin-top: 75px;
`;

const Title = styled.h1`
  font-family: "Barlow", sans-serif; /* index.js'teki import sonrası font-family yazılması yeterli. */
  color: white;
  font-size: 40px;
  width: 25%;
  margin: 0 auto;
`;

const Button = styled.button`
  font-family: "Barlow", sans-serif;
  display: flex;
  background-color: #fdc913;
  border-radius: 20px;
  border: 2px solid transparent;
  color: black;
  margin: 50px auto;
  padding: 1em 2em;
  text-decoration: none;
  font-weight: bold;
`;

function AnaSayfa() {
  return (
    <StyledApp>
      <Container>
        <Title>KOD ACIKTIRIR, PİZZA DOYURUR</Title>
        <NavLink to="/pizza" style={{ textDecoration: "none" }}>
          <Button>ACIKTIM</Button>
        </NavLink>
      </Container>
    </StyledApp>
  );
}

export default AnaSayfa;
