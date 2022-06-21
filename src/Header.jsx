/* eslint-disable */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./Style";
import "./Header.css";
export default function Header() {
  const Logo = "BSSM 매점";
  let status = 0;
  const $ = document.querySelector.bind(document);

  const [headerList, setHeaderList] = useState([
    "상품보기",
    "엄",
    "준",
    "식",
    "새상품",
  ]);
  const [headerLinkList, setHeaderLinkList] = useState([
    "/view",
    "/reservation",
    "/404",
    "/405",
    "/406 ",
  ]);

  const [login, setlogin] = useState(["장바구니"]);
  const [loginLink, setloginLink] = useState(["/cart"]);

  let liClick = () => {
    $(".navbar__menu").classList.remove("active");
    $(".navbar__links").classList.remove("active");
    $("#btn").classList.remove("on");
  };

  let click = () => {
    if (!status) {
      $(".navbar__menu").classList.add("active");
      $(".navbar__links").classList.add("active");
      status = 1;
    } else {
      $(".navbar__menu").classList.remove("active");
      $(".navbar__links").classList.remove("active");
      status = 0;
    }
  };

  let eClick = () => {
    if (status) {
      $("#btn").classList.remove("on");
    } else {
      $("#btn").classList.add("on");
    }
  };

  return (
    <nav className="navbar">
      <S.MainText href="/" style={{ paddingLeft: "15px" }}>
        {Logo}
      </S.MainText>
      <ul className="navbar__menu">
        {headerList.map((a, i) => {
          return (
            <li
              key={i}
              onClick={() => {
                liClick();
              }}
            >
              <Link style={{ color: "beige" }} to={headerLinkList[i]}>
                {a}
              </Link>
            </li>
          );
        })}
      </ul>

      <ul className="navbar__links">
        {login.map((a, i) => {
          return (
            <li
              key={i}
              onClick={() => {
                liClick();
              }}
            >
              <Link to="#" style={{ color: "beige" }}>
                {a}
              </Link>
            </li>
          );
        })}
        {/* <li>
          <Link to="/signup">회원가입</Link>
        </li> */}
      </ul>

      <Link to="#" className="navbar__toggleBtn" onClick={click}>
        <button id="btn" onClick={eClick}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </Link>
    </nav>
  );
}
