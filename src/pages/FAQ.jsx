import React from "react";
import styled from "styled-components";
import FaqComponent from "react-faq-component";

import { Template, BackHome } from "../layout/Template";

import { ReactComponent as Faq } from "../img/faq.svg";

const data = {
  rows: [
    {
      title: "Question 1?",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus, sed orci, est lacus rhoncus sed massa eu a. Ullamcorper est sem ac pulvinar.`,
    },
    {
      title: "Question 2?",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus, sed orci, est lacus rhoncus sed massa eu a. Ullamcorper est sem ac pulvinar.`,
    },
    {
      title: "Question 3?",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus, sed orci, est lacus rhoncus sed massa eu a. Ullamcorper est sem ac pulvinar.`,
    },
    {
      title: "Question 4?",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus, sed orci, est lacus rhoncus sed massa eu a. Ullamcorper est sem ac pulvinar.`,
    },
  ],
};
const styles = {
  bgColor: "transparent",
  rowTitleColor: "#FFF500",
  rowTitleTextSize: "30px",
  rowContentColor: "#fff",
  rowContentTextSize: "20px",
  arrowColor: "#fff",
  rowContentPaddingBottom: "30px",
};

const FAQ = () => {
  return (
    <Template className="container">
      <h1 data-aos="zoom-in">FAQ</h1>
      <div data-aos="fade-in">
        <div>
          <Faq />
        </div>
        <CustomStyles>
          <FaqComponent data={data} styles={styles} />
        </CustomStyles>
      </div>
      <BackHome />
    </Template>
  );
};

export default FAQ;

const CustomStyles = styled.div``;
