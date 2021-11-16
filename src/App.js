import React, { useEffect } from "react";
import "./sass/style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";
import AOS from "aos";

// Pages
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import History from "./pages/History";
import HowToPlay from "./pages/HowToPlay";
import Referrals from "./pages/Referrals";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SmartContract from "./pages/SmartContract";
import SupportEmail from "./pages/SupportEmail";
import TermsOfServices from "./pages/TermsOfServices";
import NotFound from "./pages/NotFound"; // not found 404 page

function getLibrary(provider) {
  return new Web3(provider);
}

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <>
      <ToastContainer />
      <Web3ReactProvider getLibrary={getLibrary}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/faq" element={<FAQ />} />
            <Route exact path="/history" element={<History />} />
            <Route exact path="/how-to-play" element={<HowToPlay />} />
            <Route exact path="/referrals" element={<Referrals />} />
            <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route exact path="/smart-contract" element={<SmartContract />} />
            <Route exact path="/support-email" element={<SupportEmail />} />
            <Route exact path="/terms-of-services" element={<TermsOfServices />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </Web3ReactProvider>
    </>
  );
};

export default App;
