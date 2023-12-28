import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewPage from "./pages/NewPage";
import { Fragment } from "react";

function App() {
  return (
    // <Fragment>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/NewPage" element={<NewPage />} />
      </Routes>
    </Router>
    // </Fragment>
  );
}

export default App;
