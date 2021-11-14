import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// import Components
import Header from "../layout/Header";
import Navbar from "../layout/Navbar";

import Button from "../components/Button";
import Counter from "../components/Counter";
import FirstRound from "../components/FirstRound";
import Tickets from "../components/Tickets";

const Home = () => {
  const ticketLeft = 1100;
  const ticketInDraw = 0;
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <div>
          <FirstRound />
        </div>
        <div>
          <Counter title="tickets" word="left" number={ticketLeft} />
          <Counter title="tickets in" word="draw" number={ticketInDraw} />
          <Tickets className="tickets" />
          <Button className="connect">Connect</Button>
          <Button outline>Winner History</Button>
        </div>
        <div>
          <Tickets />
        </div>
      </main>
    </>
  );
};

export default Home;
