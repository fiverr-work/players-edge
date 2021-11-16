import { useWeb3React } from "@web3-react/core";
import styled from "styled-components";
import { toast } from "react-toastify";

import { ModalBackground } from "./ModalBackground";
import { injected } from "../wallet/connectors";
import { ReactComponent as CloseIcon } from "../../img/icons/close.svg";
import { ReactComponent as MetaMaskIcon } from "../../img/icons/metamask.svg";
import { ReactComponent as TrustedWalletIcon } from "../../img/icons/trustedwallet.svg";

const Wallets = ({ hideModal }) => {
  return (
    <>
      <WalletsModal>
        <CloseIcon className="close" onClick={() => hideModal(false)} />
        <Content hideModal={hideModal} />
      </WalletsModal>
      <ModalBackground onClick={() => hideModal(false)} />
    </>
  );
};

export default Wallets;

const WalletsModal = styled.div`
  z-index: 8;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  min-height: 500px;
  background: #2b2b2b;
  box-shadow: -5px 13px 22px rgba(0, 0, 0, 0.25);
  border-radius: 75px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  .close {
    align-self: center;
    position: relative;
    margin-top: 7%;
    margin-bottom: 40px;
    padding: 10px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    :hover {
      path {
        fill: #fff500;
      }
    }
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    max-height: 80vh;
    width: 90%;
  }
`;

const Content = ({ hideModal }) => {
  const { activate } = useWeb3React();

  function connectTrustedWallet() {}

  async function connectMetamask() {
    try {
      if (typeof window.web3 !== "undefined") {
        await activate(injected);
        hideModal(false);
        toast.success("Metamask Connected");
      } else toast.info("You need to install Metamask extension");
    } catch (ex) {
      // console.log(ex);
    }
  }

  // Disconnect wallet
  // async function disconnect() {
  //   try {
  //     deactivate();
  //   } catch (ex) {
  //     // console.log(ex);
  //   }
  // }

  return (
    <ContentStyle>
      <h1>Connect wallet</h1>
      <div>
        <ConnectTo onClick={connectMetamask}>
          <MetaMaskIcon />
          MetaMask
        </ConnectTo>
        <ConnectTo onClick={connectTrustedWallet}>
          <TrustedWalletIcon />
          Trust Wallet
        </ConnectTo>
      </div>
    </ContentStyle>
  );
};

const ContentStyle = styled.div`
  > div {
    display: flex;
    flex-direction: column;
  }
  h1 {
    margin-bottom: 40px;
    text-align: center;
    font-family: "Fira Sans Bold";
    letter-spacing: 1px;
  }
`;

const ConnectTo = styled.button`
  transition: background-color 200ms;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border: 1px solid #3a3a3a;
  border-radius: 18px;
  padding: 15px 20px;
  background-color: #1d1d1d;
  font-family: "Fira Sans";
  letter-spacing: 1px;
  font-size: 16px;
  font-weight: 500;
  text-transform: capitalize;

  :hover {
    background-color: #444444;
    transition: background-color 200ms;
  }
  svg {
    margin-right: 20px;
    max-width: 35px;
    max-height: 35px;
  }
`;
