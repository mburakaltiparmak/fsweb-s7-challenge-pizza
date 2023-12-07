import React from "react";
import styled from "styled-components";
import Londrina from "../fonts/Londrina/LondrinaSolid-Regular.ttf";

const FontFace = styled.div`
  @font-face {
    font-family: "Londrina Solid", sans-serif;
    src: url("https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@300&display=swap")
      format("truetype");
  }
  background-color: #ce2829;
  margin: auto;
  padding: 5px;
`;
/*const FontFace = styled.div`
  font-family: "Londrina Solid", sans-serif;
  src: url(${Londrina}) format("truetype");
  background-color: #ce2829;
  margin: auto;
  padding: 5px;
`;*/

const HeaderTitle = styled.h1`
  font-family: "Londrina Solid", sans-serif;
  display: flex;
  justify-content: center;
  color: white;
`;

function Header() {
  return (
    <FontFace>
      <HeaderTitle>Teknolojik Yemekler</HeaderTitle>
    </FontFace>
  );
}

export default Header;
