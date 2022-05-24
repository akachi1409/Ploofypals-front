import { useRef, useEffect, useState } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import "./App.css";


import Upload from "./components/upload/upload";
import Landing from "./components/landing/landing";
function App() {
  // const buySection = useRef(null);
  // const [firstLoad, setFirstLoad] = useState(false);
  // const scrollToBuy = () => {
  //   buySection.current?.scrollIntoView({ behavior: "smooth" });
  // };
  // useEffect(() => {
  //   if (!firstLoad) {
  //     scrollToBuy();
  //     setFirstLoad(true);
  //   }
  // });
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/trait" element={<Upload/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
