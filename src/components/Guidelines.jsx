import React from "react";
import { FaUsers, FaExclamationTriangle } from "react-icons/fa"; 

const Guidelines = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-[#0078B7] text-center mb-12">
          Hackathon Structure & Guidelines
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Team Formation Card */}
          <div className="relative bg-white shadow-lg rounded-lg p-6">
          <div className="absolute top-[-16px] left-1/2 translate-x-[-50%] bg-[#0078B7] text-white py-2 px-6 sm:px-8 md:px-10 rounded-t-lg">
            Team Formation
          </div>
            <ul className="space-y-4 text-black mt-6">
              <li className="flex items-start space-x-3">
                <FaUsers className="text-black mt-1" />
                <span>Each team must have 5-8 members from four different engineering branches.</span>
              </li>
              <li className="flex items-start space-x-3">
                <FaUsers className="text-black mt-1" />
                <span>Team members must register together during enrollment.</span>
              </li>
              <li className="flex items-start space-x-3">
                <FaUsers className="text-black mt-1" />
                <span>Diversity in skillsets (hardware, software, UI/UX, data analysis, firmware, casing, etc.) is encouraged for efficient problem-solving.</span>
              </li>
            </ul>
          </div>

          
          <div className="relative bg-white shadow-lg text-black text-bold rounded-lg p-6">
          <div className="absolute top-[-16px] left-1/2 translate-x-[-50%] bg-[#0078B7] text-white py-2 px-6 sm:px-8 md:px-10 rounded-t-lg">
            Problem Statements
          </div>
            <ul className="space-y-4 mt-6 text-bold">
              <li className="flex items-start text-bold space-x-3">
                <FaExclamationTriangle className="text-black mt-1" />
                <span>Teams will be given a set of predefined problem statements.</span>
              </li>
              <li className="flex items-start space-x-3">
                <FaExclamationTriangle className="text-black mt-1" />
                <span>Each team must choose one problem statement and propose a unique solution.</span>
              </li>
              <li className="flex items-start space-x-3">
                <FaExclamationTriangle className="text-black mt-1" />
                <span>Mentors will validate ideas before proceeding to the development phase.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guidelines;
