// import react-router-dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// imports pages
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import MirrorError from "./Pages/MirrorError";
import SpecialOffer from "./Pages/SpecialOffer";
import Home2 from "./Pages/Home2";
import TermCondition from "./Pages/TermCondition";
import Welcome from "./Pages/Welcome";
import Room from "./Pages/Room";
import RoomDetailsPage from "./Pages/RoomDetailsPage";
import DiningDetails from "./Pages/DiningDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Error" element={<Error />} />
        <Route path="/SpecialOfferCode:<Code>" element={<MirrorError />} />
        <Route path="SpecialOfferCode:<dfawh>" element={<SpecialOffer />} />
        <Route path="/ꓕμԍ 3Ɩϝμ μoϝԍɼ" element={<Home2 />} />
        <Route path="/TermCondition/:flag?" element={<TermCondition />} />
        <Route path="/Loading" element={<Welcome />} />
        <Route path="/Room" element={<Room />} />
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/Room/:title" element={<RoomDetailsPage />} />
        <Route path="/DiningDetails" element={<DiningDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
