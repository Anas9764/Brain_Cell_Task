import React from 'react'

import AdharCard from './Components/AdharCard'
import Navbar from './Components/NavBar'
import PanCard from './Components/PanCard'
import ElectionCard from './Components/ElectionCard'
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
      <div>
        <Navbar />
        <Routes>
        <Route path="/" element={<AdharCard />} />
          <Route path="/pancard" element={<PanCard />} />
          <Route path="/electioncard" element={<ElectionCard />} />

        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App