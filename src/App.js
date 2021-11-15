import "./sass/style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

const App = () => {
  return (
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
  );
};

export default App;
