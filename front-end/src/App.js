// import react-router-dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// imports pages
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
