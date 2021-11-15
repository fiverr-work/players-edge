import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import bg from "../img/backgrounds/header.png";
import bgSm from "../img/backgrounds/header-sm.png";
import { ReactComponent as ContractIcon } from "../img/icons/contract.svg";
import { ReactComponent as PrivacyIcon } from "../img/icons/privacy.svg";
import { ReactComponent as SupportIcon } from "../img/icons/support.svg";
import { ReactComponent as TermsIcon } from "../img/icons/terms.svg";
import { ReactComponent as CloseIcon } from "../img/icons/close.svg";

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <HeaderStyle>
      <img className="lg" src={bg} alt="" />
      <img className="sm" src={bgSm} alt="" />
      <div className="title">
        <span>Beta</span>
        <h1>Player’s Edge</h1>
      </div>
      <div className="description">
        <p>It is up to the participant to get the</p>
        <span>EDGE</span>
      </div>
      <Menu setMenu={setMenu} />
      <Sidebar setMenu={setMenu} menu={menu} />
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.header`
  text-align: center;
  width: 90%;
  max-width: 1320px;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 100px;
  margin-bottom: 50px;
  position: relative;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    &.sm {
      display: none;
    }
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    h1 {
      font-weight: 900;
      font-size: 52px;
      line-height: 1;
      text-transform: capitalize;
      font-family: "Fira Sans Black", sans-serif;
    }
    span {
      font-family: "Fira Sans", sans-serif;
      vertical-align: middle;
      display: inline-block;
      font-weight: bold;
      font-size: 24px;
      line-height: 94%;
      text-transform: capitalize;
      text-shadow: 0px 0px 20px #ff0000, 0px 0px 71.7083px #ff0000;
      color: #ffb9b9;
      padding: 10px 30px;
      margin-right: 20px;

      background: rgba(196, 196, 196, 0.01);
      box-shadow: inset 0px 19.8066px 28.4403px -18.283px rgba(255, 255, 255, 0.5),
        inset 0px 3.55503px 5.58648px -2.03145px rgba(255, 183, 183, 0.68),
        inset 0px -41.6447px 34.5346px -32.5032px rgba(255, 0, 0, 0.3),
        inset 0px 49.7704px 50.7862px -24.3774px rgba(255, 0, 0, 0.3),
        inset 0px 2.03145px 9.14151px rgba(255, 0, 0, 0.3),
        inset 0px 0.507862px 20.3145px rgba(255, 187, 187, 0.2);
      backdrop-filter: blur(50.7862px);
      border-radius: 69px;

      @media (max-width: 992px) {
        display: none;
      }
    }
  }
  .description {
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-family: "Rubik Bold";
      font-weight: bold;
      font-size: 36px;
      text-shadow: 0px 0px 15px rgba(255, 245, 0, 0.86), 0px 0px 72px rgba(255, 245, 7, 0.43);
      color: rgba(253, 249, 127, 0.8);
      margin-right: 10px;
    }
    span {
      text-transform: capitalize;
      text-shadow: 0px 0px 15px #ff0000, 0px 0px 71.7083px #ff0000;
      font-family: "Fira Sans Bold";
      font-weight: bold;
      font-size: 36px;
      color: #ff9e9e;
    }
  }

  @media (max-width: 992px) {
    padding-bottom: 40px;
    .description {
      flex-direction: column;
      p {
        max-width: 55%;
        margin-bottom: 10px;
        margin-right: 0;
      }
    }
  }
  @media (max-width: 765px) {
    padding-top: 30px;
    img {
      &.sm {
        display: block;
      }
      &.lg {
        display: none;
      }
    }
    .title {
      margin-bottom: 10px;
      h1 {
        font-size: 30px;
      }
    }
    .description {
      p {
        font-size: 16px;
      }
      span {
        font-size: 18px;
      }
    }
  }
`;

// Menu Component
const Menu = ({ setMenu }) => (
  <MenuStyle onClick={() => setMenu(true)}>
    <div>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </MenuStyle>
);

const MenuStyle = styled.div`
  position: absolute;
  top: 23px;
  right: 7%;
  width: 78px;
  height: 78px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background: rgba(196, 196, 196, 0.01);
  box-shadow: inset 0px 30.0211px 43.1072px -27.7118px rgb(255 255 255 / 20%),
    inset 0px -10.007px 6.92795px -10.7768px rgb(255 255 255 / 30%),
    inset 0px 5.38841px 8.46749px -3.07909px #ffffff49,
    inset 0px -63.1213px 52.3445px -49.2654px rgb(143 145 68 / 10%),
    inset 0px 75.4377px 76.9772px -36.9491px rgb(255 252 172 / 13%),
    inset 0px 3.07909px 13.8559px rgb(210 208 146 / 10%),
    inset 0px 0.769772px 30.7909px rgb(227 222 255 / 10%);
  backdrop-filter: blur(76.9772px);
  cursor: pointer;

  span {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)),
      linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
    box-shadow: 0px 0px 18.9113px rgba(255, 248, 89, 0.18), 0px 0px 50px rgba(255, 245, 0, 0.5),
      inset 0px 0px 7.32115px rgba(255, 245, 0, 0.86);
    border-radius: 29.2846px;
    width: 40px;
    height: 7px;
    display: block;
    :nth-child(2) {
      margin-top: 5px;
      margin-bottom: 5px;
    }
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    top: 20px;
    right: 13px;
    span {
      width: 30px;
      height: 5px;
    }
  }
`;

// Sidebar Component
const Sidebar = ({ setMenu, menu }) => (
  <SidebarStyle className={menu ? "show" : ""}>
    <button className="close" onClick={() => setMenu(false)}>
      <CloseIcon />
    </button>
    <div className="devider"></div>
    <nav>
      <Link to="/terms-of-services">
        <span className="icon">
          <TermsIcon />
        </span>
        Terms of service
      </Link>
      <Link to="/privacy-policy">
        <span className="icon">
          <PrivacyIcon />
        </span>
        Privacy Policy
      </Link>
      <Link to="/support-email">
        <span className="icon">
          <SupportIcon />
        </span>
        Support email
      </Link>
      <Link to="/smart-contract">
        <span className="icon">
          <ContractIcon />
        </span>
        Smart Contract
      </Link>
    </nav>
    <p>Player’s Edge. 2021.</p>
  </SidebarStyle>
);

const SidebarStyle = styled.aside`
  background-color: #2b2b2b;
  position: fixed;
  top: 0;
  right: -100%;
  bottom: 0;
  left: auto;
  width: 524px;
  padding: 35px 45px;
  display: flex;
  flex-direction: column;
  transition: right 200ms ease-in-out;
  z-index: 10;

  &.show {
    right: 0;
    transition: right 200ms ease-in-out;
  }
  .close {
    all: unset;
    padding: 10px;
    display: block;
    margin-left: auto;
    cursor: pointer;
    :hover {
      svg path {
        fill: rgba(255, 245, 0, 1);
      }
    }
  }
  .devider {
    margin: 40px auto 50px;
    height: 5px;
    width: 100%;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)),
      linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
    box-shadow: 0px 0px 18.9113px rgba(255, 248, 89, 0.18), 0px 0px 50px rgba(255, 245, 0, 0.5),
      inset 0px 0px 7.32115px rgba(255, 245, 0, 0.86);
    border-radius: 5px;
  }
  nav {
    margin: 0 auto;
    display: inline-block;
    flex: 1;
    padding: 20px 0;
    overflow: auto;
    .icon {
      width: 56px;
      min-width: 56px;
      height: 56px;
      background: linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)),
        linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
      box-shadow: 0px 0px 0px rgba(49, 255, 156, 0.7), 0px 0px 34px rgba(49, 255, 156, 0.5),
        inset 0px 0px 6.59298px rgba(49, 255, 156, 0.5);
      display: inline-block;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50px;
      margin-right: 20px;
    }
    a {
      color: #fff;
      display: flex;
      align-items: center;
      font-family: "Fira Sans Medium";
      font-weight: 500;
      font-size: 30px;
      margin-bottom: 44px;
      padding: 10px 30px;
      :hover {
        color: rgba(255, 245, 0, 1);
      }
    }
  }
  p {
    font-weight: 300;
    font-family: "Fira Sans Light";
    font-size: 24px;
    padding-top: 20px;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 25px;
    .close {
      margin-right: auto;
    }
    .devider {
      margin: 20px auto 10px;
    }
    nav {
      width: 100%;
      a {
        width: 100%;
        padding-left: 0;
        padding-right: 0;
        font-size: 24px;
        margin-bottom: 20px;
        text-align: left;
        span {
          margin-left: 35px;
        }
      }
    }
    p {
      font-size: 16px;
    }
  }
`;
