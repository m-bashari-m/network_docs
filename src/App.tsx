import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import DocPage from "./components/DocPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/docs/:docName" element={<DocPage />} />
      </Routes>
    </Router>
  );
}

export default App;
