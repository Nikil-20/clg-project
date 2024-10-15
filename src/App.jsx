// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentSearch from "./Component/StudentSearch";
import Navbar from "./Component/Navbar";
import Results from "./Component/Results";
import About from "./Component/About";
import Services from "./Component/Services";
import OtpPage from "./Component/otp";
import AdmissionsPage from "./Component/AdmissionsPage";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <main className="p-4">
          <Routes>
            <Route path="/" element={<StudentSearch />} />
            <Route path="/otp" element={<OtpPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services/>}/>
            <Route path="/admissionspage" element={<AdmissionsPage />} />
            <Route path="/results" element={<Results/>} />


           
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
