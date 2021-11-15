import React from "react";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../components/wallet/connectors";

// import Components
import Header from "../layout/Header";
import Navbar from "../layout/Navbar";

import Button from "../components/Button";
import Counter from "../components/Counter";
import FirstRound from "../components/FirstRound";
import Tickets from "../components/Tickets";

const ticketLeft = 1100;
const ticketInDraw = 0;

const Home = () => {
  const { active, account, activate, deactivate } = useWeb3React();

  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      // console.log(ex);
    }
  }
  async function disconnect() {
    try {
      deactivate();
    } catch (ex) {
      // console.log(ex);
    }
  }
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
          {active ? (
            <>
              <Button className="connect" onClick={disconnect}>
                Disconnect
              </Button>
              <span>
                Connected with <b>{account}</b>
              </span>
            </>
          ) : (
            <Button className="connect" onClick={connect}>
              Connect
            </Button>
          )}
          <Button outline to="/history">
            Winner History
          </Button>
        </div>
        <div>
          <Tickets />
        </div>
      </main>
    </>
  );
};

export default Home;
