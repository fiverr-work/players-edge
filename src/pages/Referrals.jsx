import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Template, ArrowLeftIcon } from "../layout/Template";

import { ReactComponent as People } from "../img/people.svg";

const Referrals = () => {
  return (
    <Template className="container">
      <h1>Referrals</h1>
      <div>
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
      <Link to="/">
        <ArrowLeftIcon />
      </Link>
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
