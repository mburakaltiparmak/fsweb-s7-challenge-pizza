import React from "react";
import styled from "styled-components";
const FooterContainer = styled.div`
  padding: 50px;
  background-color: #292929;
  h2 {
    font-family: "Londrina Solid", sans-serif;
    font-size: 30px;
    color: #faf7f2;
    margin-left: 100px;
  }
  .adres {
    color: #faf7f2;
    margin-left: 100px;
    font-family: "Barlow", sans-serif;
  }
  .mail {
    color: #faf7f2;
    margin-left: 100px;
    font-family: "Barlow", sans-serif;
  }
  .telefon {
    color: #faf7f2;
    margin-left: 100px;
    font-family: "Barlow", sans-serif;
  }
  .copyright {
    color: #faf7f2;
    margin-left: 100px;
    font-family: "Barlow", sans-serif;
  }
`;
export default function Footer() {
  return (
    <FooterContainer>
      <h2>
        Teknolojik <br /> Yemekler
      </h2>
      <p className="adres">
        341 Londonderry Road,
        <br /> Istanbul Türkiye
      </p>
      <p className="mail">aciktim@teknolojikyemekler.com</p>
      <p className="telefon">+90 216 123 45 67</p>

      <hr />
      <p className="copyright">© 2023 Teknolojik Yemekler. </p>
    </FooterContainer>
  );
}
