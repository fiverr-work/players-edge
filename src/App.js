import "./sass/style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import History from "./pages/History";
import HowToPlay from "./pages/HowToPlay";
import Referrals from "./pages/Referrals";
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
