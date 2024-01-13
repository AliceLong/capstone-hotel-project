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
import RoomDetailsPage from "./Pages/RoomDetailsPage.jsx";
import DiningDetails from "./Pages/DiningDetails";
import Cinema from "./Pages/Cinema";
import Report from "./Pages/Report";
import BadEnd from "./Pages/BadEnd";
import axios from "axios";
import AboutUs from "./Pages/AboutUs";

function App() {
  // perform a lightweight operation every 10 seconds in order to prevent server from idle on free plan of render.
  const smallOperation = async () => {
    // Let's self ping too.
    const response = await axios.get(
      "https://capstone-hotel-project.onrender.com/form"
    );
    console.log("response", response.data);
  };

  setInterval(() => {
    smallOperation();
  }, 10000);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Error" element={<Error />} />
        <Route path="/SpecialOfferCode:<Code>" element={<MirrorError />} />
        <Route path="SpecialOfferCode:<mirror>" element={<SpecialOffer />} />
        <Route path="/ꓕμԍ 3Ɩϝμ μoϝԍɼ" element={<Home2 />} />
        <Route path="/TermCondition/:flag?" element={<TermCondition />} />
        <Route path="/Loading" element={<Welcome />} />
        <Route path="/Room" element={<Room />} />
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/Room/:title" element={<RoomDetailsPage />} />
        <Route path="/DiningDetails" element={<DiningDetails />} />
        <Route path="*" element={<Cinema />} />
        <Route path="/Report-II-DFAWH" element={<Report />} />
        <Route path="/ƧꓕⱯꓕꓵƧ_CHⱯИᘓE" element={<BadEnd />} />
        <Route path="/AboutUsLimited" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
