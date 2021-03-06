import React from "react";
import styled from "styled-components";

import { Template, BackHome } from "../layout/Template";

import { ReactComponent as Questions } from "../img/how.svg";

const HowToPlay = () => {
  return (
    <Template className="container">
      <h1 data-aos="zoom-in">How To Play</h1>
      <div data-aos="fade-in">
        <div>
          <Questions />
        </div>
        <CustomStyles>
          <p>
            <span>1.-</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit lectus leo
            sit egestas viverra ut eget rutrum at tellus orci.
          </p>
          <p>
            <span>2.-</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit lectus leo
            sit egestas viverra ut eget rutrum at tellus orci.
          </p>
          <p>
            <span>3.-</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit lectus leo
            sit egestas viverra ut eget rutrum at tellus orci.
          </p>
          <p>
            <span>4.-</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit lectus leo
            sit egestas viverra ut eget rutrum at tellus orci.
          </p>
        </CustomStyles>
      </div>
      <BackHome />
    </Template>
  );
};
export default HowToPlay;

const CustomStyles = styled.div`
  p {
    font-weight: 800;
    font-size: 24px;
    margin-bottom: 47px;
    span {
      color: rgba(255, 245, 0, 0.86);
    }
  }
`;
