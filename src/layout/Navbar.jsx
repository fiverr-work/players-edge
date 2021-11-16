import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavbarStyle data-aos="fade-in">
      <div>
        <Link to="/how-to-play">How to play</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/referrals">Referrals</Link>
      </div>
    </NavbarStyle>
  );
};

export default Navbar;

const NavbarStyle = styled.nav`
  text-align: center;
  margin-bottom: 20px;
  > div {
    display: inline-flex;
    padding: 12px 20px;
    justify-content: space-around;
    align-items: center;
    background: #2b2b2b;
    box-shadow: -5px 13px 22px rgba(0, 0, 0, 0.25);
    border-radius: 75px;
  }
  a {
    text-transform: capitalize;
    font-weight: bold;
    font-size: 24px;
    color: #f4f4f4;
    padding: 10px 40px;
    display: flex;
    align-items: center;
    position: relative;
    margin-right: 5px;

    :hover {
      color: rgba(255, 245, 0, 1);
    }
    :not(:last-child)::after {
      content: "";
      position: absolute;
      right: -5px;
      width: 5px;
      height: 42px;
      background: linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)),
        linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
      box-shadow: 0px 0px 18.9113px rgba(255, 248, 89, 0.18), 0px 0px 50px rgba(255, 245, 0, 0.5),
        inset 0px 0px 7.32115px rgba(255, 245, 0, 0.86);
      border-radius: 5px;
    }
  }
  @media (max-width: 768px) {
    > div {
      padding: 10px 15px;
    }
    a {
      font-size: 16px;
      padding: 5px 20px;
      ::after {
        width: 4px !important;
        height: 30px !important;
      }
    }
  }
`;
