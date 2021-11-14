import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// import Components
import Header from "../layout/Header";
import Navbar from "../layout/Navbar";

import Button from "../components/Button";
import FirstRound from "../components/FirstRound";
import Tickets from "../components/Tickets";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Navbar />
        <Button>Connect</Button>
        <Button outline>Winner History</Button>
      </main>
      {/* <FirstRound />
      <Tickets /> */}
    </>
  );
};

export default Home;
