// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentSearch from "./Component/StudentSearch";
import Navbar from "./Component/Navbar";
import Results from "./Component/Results";
import About from "./Component/About";
import Services from "./Component/Services";
import OtpPage from "./Component/otp";
import AdmissionsPage from "./Component/AdmissionsPage";
import { ShimmerText } from "react-shimmer-effects"; // Import shimmer effect

function App() {
  const [loading, setLoading] = useState(true); // Loading state

  // Simulate a loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1-second delay

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <main className="p-4">
          {loading ? (
            <div>
              {/* Shimmer effect while loading */}
              <ShimmerText line={23} gap={20} />
            </div>
          ) : (
            <Routes>
              <Route path="/" element={<StudentSearch />} />
              <Route path="/otp" element={<OtpPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/admissionspage" element={<AdmissionsPage />} />
              <Route path="/results" element={<Results />} />
            </Routes>
          )}
        </main>
      </div>
    </Router>
  );
}

export default App;
