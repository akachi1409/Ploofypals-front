import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Upload from "./components/upload/upload";
import Landing from "./components/landing/landing";
import Download from "./components/download/download";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/trait" element={<Upload/>}/>
          <Route path="/download" element={<Download/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
