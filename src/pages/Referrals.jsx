import React from "react";
import styled from "styled-components";

import { Template, BackHome } from "../layout/Template";

import { ReactComponent as People } from "../img/people.svg";

const Referrals = () => {
  return (
    <Template className="container">
      <h1 data-aos="zoom-in">Referrals</h1>
      <div data-aos="fade-in">
        <div>
          <People />
        </div>
        <CustomStyles>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus hendrerit velit auctor
            quam platea adipiscing orci. Nulla posuere est augue libero. Fames adipiscing in urna
            sapien amet nisi. Eget ultricies etiam risus diam ornare lectus porta integer. Malesuada
            urna.
          </p>
        </CustomStyles>
      </div>
      <BackHome />
    </Template>
  );
};

export default Referrals;

const CustomStyles = styled.div`
  p {
    margin-top: 30px;
    font-weight: 800;
    font-size: 24px;
    margin-bottom: 47px;
    text-align: center;
  }
`;
