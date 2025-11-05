import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/ReactRouter/Home";
import About from "./components/ReactRouter/About";
import Offer from "./components/ReactRouter/Offer";
import PageNotFound from "./components/ReactRouter/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
