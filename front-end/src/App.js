// import react-router-dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// imports pages
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import ReadMore from "./Components/ReadMore";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Error" element={<Error />} />
        <Route
          path="/GotoGalleryGotoGalleryGotoGalleryGotoGalleryGotoGalleryGotoGallery"
          element={<ReadMore />}
        />
      </Routes>
    </Router>
  );
}

export default App;
