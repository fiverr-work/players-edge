import React, { useState } from "react";

// import Components
import Header from "../layout/Header";
import Navbar from "../layout/Navbar";

import Button from "../components/Button";
import Counter from "../components/Counter";
import FirstRound from "../components/FirstRound";
import Tickets from "../components/Tickets";
import Wallets from "../components/modals/Wallets";

const ticketLeft = 1100;
const ticketInDraw = 0;

const Home = () => {
  const [modal, setModal] = useState(false);

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
          {typeof window.web3 !== "undefined" ? (
            <>
              <span style={{ textAlign: "center" }}>
                Connected with <b>{window.web3.currentProvider._state.accounts[0]}</b>
              </span>
            </>
          ) : (
            <Button className="connect" onClick={() => setModal(true)} data-aos="zoom-in">
              Connect
            </Button>
          )}
          <Button outline to="/history" data-aos="zoom-in">
            Winner History
          </Button>
        </div>
        <div>
          <Tickets />
        </div>
      </main>
      {modal && <Wallets hideModal={setModal} />}
    </>
  );
};

export default Home;
