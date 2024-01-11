import React from "react";
import styled from "styled-components";
const SuccessContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  background: #ce2829;
  padding: 25px;
`;
const Yazi = styled.p`
  background: #ce2829;
  font-family: "Barlow", sans-serif;
  color: white;
  font-size: 40px;
  margin: 0 auto;
  text-align: center;
  margin-top: 15vh;
`;

function Success() {
  return (
    <SuccessContainer>
      <Yazi>
        TEBRİKLER!
        <br />
        SİPARİŞİNİZ ALINDI!
      </Yazi>
    </SuccessContainer>
  );
}

export default Success;
