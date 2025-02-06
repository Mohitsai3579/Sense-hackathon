import React, { useState } from 'react';

const Hero = () => {
  return (
    <div className="pt-20 bg-white">
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold text-[#0078B7] mb-4">SENSE HACKATHON</h1>
        <p className="text-xl italic text-gray-700 mb-8">"Fueling Innovation, Powering Tomorrow."</p>
        <div className="max-w-3xl mx-auto font-medium text-gray-600 mb-8">
          <p>The Sense Hackathon is an interdisciplinary innovation challenge exclusively for RGUKT-SKLM students. Participants from ECE, EEE, MECH, and CSE will collaborate to develop a complete product from scratch, solving real-world technical challenges. This team-based hackathon encourages students to combine their skills in hardware, software, and engineering principles to create functional, impactful solutions.</p>
        </div>

        <button className="bg-blue-600 text-white px-8 py-4 rounded hover:bg-blue-700">
          Enroll Now
        </button>

      </div>
    </div>
  );
};

export default Hero;
