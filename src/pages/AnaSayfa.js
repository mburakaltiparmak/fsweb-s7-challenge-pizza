import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import myImage from "../mvp-banner.png";

const StyledApp = styled.div`
  background-color: #ce2829;
  height: 100%;
`;

const Container = styled.div`
  text-align: center;
  color: white;
  margin-top: 75px;
  background-image: url(${myImage});
  background-size: cover;
  margin: auto;
  height: 100vh;
  overflow: hidden;
`;

const Title = styled.h1`
  font-family: "Barlow", sans-serif;
  color: white;
  font-size: 50px;
  width: 30%;
  margin: 30px auto;
  font-weight: 500;
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
  cursor: pointer;
`;

function AnaSayfa() {
  return (
    <StyledApp>
      <Container>
        <Title>KOD ACIKTIRIR, PİZZA DOYURUR</Title>
        <NavLink to="/pizza" style={{ textDecoration: "none" }}>
          <Button id="order-pizza">ACIKTIM</Button>
        </NavLink>
      </Container>
    </StyledApp>
  );
}

export default AnaSayfa;
