import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const FontFace = styled.div`
  @font-face {
    font-family: "Londrina Solid", sans-serif;
    src: url("https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@300&display=swap")
      format("truetype");
  }
  background-color: #ce2829;
  margin: auto 0;
  padding: 10px;
`;

const HeaderTitle = styled.h1`
  font-family: "Londrina Solid", sans-serif;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: white;
  padding: 2.5px;
  margin-bottom: 20px;
`;
const Breadcrumb = styled.ul`
  padding: 1px 5px;
  list-style: none;
  background-color: #ce2829;
  display: ${(props) => (props.show ? "flex" : "none")};

  li {
    display: flex;
    font-size: 12.5px;
    align-items: center;
    margin-left: 10px;
    color: white;
  }

  li + li:before {
    padding: 4px;
    content: "-";
    color: white;
  }

  li a {
    color: white;
    text-decoration: none;
  }

  li a:hover {
    color: white;
    text-decoration: underline;
    font-weight: bold;
  }
  .pizza {
    font-weight: bold;
  }
`;

function Header() {
  const location = useLocation();
  const history = useHistory();
  const showBreadcrumb =
    location.pathname !== "/" && location.pathname !== "/Success";

  return (
    <FontFace>
      <HeaderTitle>Teknolojik Yemekler</HeaderTitle>

      <Breadcrumb className="breadcrumb" show={showBreadcrumb}>
        <li>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              history.push("/");
            }}
          >
            Anasayfa
          </a>
        </li>
        <li className="pizza">Sipariş Oluştur</li>
      </Breadcrumb>
    </FontFace>
  );
}

export default Header;
