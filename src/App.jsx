import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatYouWillDo from "./components/Whatwillyoudo";
import Guidelines from "./components/Guidelines";
import ProblemStatements from "./components/ProblemStatements";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans bg-white">
      
      <Navbar />
      <Hero />
      <WhatYouWillDo />
      <Guidelines />
      <ProblemStatements />
      <Timeline />
      <Footer />
    </div>
  );
}

export default App;
