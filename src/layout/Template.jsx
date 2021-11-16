import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowLeftIcon } from "../img/icons/arrow-left.svg";

export const Template = styled.section`
  padding-top: 110px;
  @media (max-width: 768px) {
    padding-top: 70px;
    margin-bottom: 150px;
  }
  h1 {
    font-family: "Fira Sans Black", sans-serif;
    text-align: center;
    text-transform: capitalize;
    margin-bottom: 167px;
    font-weight: 900;
    font-size: 52px;
    @media (max-width: 768px) {
      font-size: 30px !important;
      margin-bottom: 70px !important;
    }
  }
  > div {
    display: flex;
    > div {
      flex: 1;
      :nth-child(1) {
        display: flex;
        flex: 3;
        justify-content: flex-end;
        svg {
          max-width: 100%;
        }
      }
      :nth-child(2) {
        flex: 4;
        margin-left: 130px;
      }
    }
    @media (max-width: 768px) {
      flex-direction: column;
      > div {
        :nth-child(1) {
          justify-content: center;
          margin-bottom: 30px;
          svg {
            height: 100px;
          }
        }
        :nth-child(2) {
          margin-left: 0;
        }
      }
    }
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const BackHome = () => {
  return (
    <BackHomeStyle>
      <Link to="/">
        <ArrowLeftIcon />
      </Link>
    </BackHomeStyle>
  );
};

const BackHomeStyle = styled.div`
  position: absolute;
  top: 100px;
  right: 100px;
  z-index: 1;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    width: 78px;
    height: 78px;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)),
      linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
    box-shadow: 0px 0px 17.0303px rgba(49, 255, 156, 0.7), 0px 0px 65.9298px rgba(49, 255, 156, 0.5),
      inset 0px 0px 6.59298px rgba(49, 255, 156, 0.5);
    svg {
      transform: scale(0.8);
    }
  }
  @media (max-width: 768px) {
    position: static;
    margin-top: 50px;
    a {
      transform: scale(0.8);
      margin: 0 auto;
    }
  }
`;

export const Header = styled.h1`
  text-align: center;
  margin-top: 100px;
  font-family: "Fira Sans Bold";
  font-size: 45px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
