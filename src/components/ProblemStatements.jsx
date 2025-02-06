import React, { useState } from "react";

const ProblemStatements = () => {
  const problems = [
    {
      id: "01",
      theme: "Smart Transit",
      statement:
        "Develop an innovative student transportation management system using real-time GPS tracking for buses, optimized route algorithms for efficient travel, and seamless communication via a mobile app for enhanced safety and operational efficiency.",
    },
    {
      id: "02",
      theme: "Smart Agri",
      statement:
        "Develop a Smart Agriculture system using IoT sensors for real-time monitoring of soil moisture, weather conditions, and crop health, and implement automated irrigation control via the MQTT protocol for efficient water usage. Establish server communication using the HTTP protocol to provide actionable data insights, optimize resource management, and enhance crop yield through data-driven decision-making.",
    },
    {
      id: "03",
      theme: "Aqua Sense",
      statement:
        "Develop a real-time water quality management system using IoT sensors to continuously monitor parameters such as pH, turbidity, and contaminants. Implement automated corrective actions and alert mechanisms to promptly address any water quality issues, ensuring a safe and reliable water supply in public spaces.",
    },
    {
      id: "04",
      theme: "Air Sense",
      statement:
        "Develop a real-time air quality monitoring system using IoT sensors to continuously measure pollutants such as PM2.5, CO2, NO2, and VOCs. Implement automated alerts and data analysis tools to provide instant feedback on air quality conditions, enabling timely interventions and ensuring a healthier environment in public and urban spaces.",
    },
    {
      id: "05",
      theme: "Smart Waste",
      statement:
        "Develop a real-time waste management system using IoT sensors to monitor waste levels in bins and optimize collection schedules. Implement automated routing and notification mechanisms to ensure timely waste pickup, reduce overflow, and promote efficient recycling, contributing to cleaner and more sustainable urban environments.",
    },
    {
      id: "06",
      theme: "Traffic Control",
      statement:
        "Design a smart traffic control system using sensors and real-time data to manage traffic lights, reduce congestion, and improve traffic flow in urban areas.",
    },
    {
      id: "07",
      theme: "Smart Lighting",
      statement:
        "Create an intelligent street lighting system that adjusts brightness based on traffic density and time of day to reduce energy consumption and enhance public safety.",
    },
    {
      id: "08",
      theme: "Smart Parking",
      statement:
        "Develop an IoT-based smart parking system that helps users find available parking spots in real-time, reducing time spent searching for parking and lowering congestion.",
    },
    {
      id: "09",
      theme: "Energy Monitoring",
      statement:
        "Implement an energy monitoring system using IoT sensors to track energy usage in buildings and provide recommendations for energy conservation and efficiency.",
    },
    {
      id: "10",
      theme: "Water Conservation",
      statement:
        "Design a system that uses IoT to monitor water usage in homes and public spaces and provide real-time feedback and recommendations for efficient water use.",
    },
  ];

  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  
  const indexOfLastProblem = currentPage * itemsPerPage;
  const indexOfFirstProblem = indexOfLastProblem - itemsPerPage;
  const currentProblems = problems.slice(indexOfFirstProblem, indexOfLastProblem);

  
  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(problems.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  
  const nextPage = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-[#0078B7] text-center mb-12">
          Problem Statements
        </h2>
        <div className="overflow-x-auto text-black">
          <table className="w-full bg-white shadow-lg rounded-lg border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-4 text-center border border-gray-600">
                  S.No
                </th>
                <th className="px-6 py-4 text-center border border-gray-600">
                  Problem Theme
                </th>
                <th className="px-6 py-4 text-center border border-gray-600">
                  Problem Statement
                </th>
              </tr>
            </thead>
            <tbody>
              {currentProblems.map((problem) => (
                <tr key={problem.id} className="border-t">
                  <td className="px-10 py-4 font-medium border border-gray-600">
                    {problem.id}
                  </td>
                  <td className="px-10 py-4 font-medium border border-gray-600">
                    {problem.theme}
                  </td>
                  <td className="px-6 py-4 font-medium border border-gray-600">
                    {problem.statement}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <div className="flex justify-center mt-4 items-center space-x-2">
  <button
    onClick={prevPage}
    disabled={currentPage === 1}
    className="text-xl text-black disabled:text-gray-400"
  >
    &#60;
  </button>
  {pageNumbers.map((number) => (
    <button
      key={number}
      onClick={() => changePage(number)}
      className={`px-4 py-2 text-sm md:text-base ${currentPage === number ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'} rounded`}
    >
      {number}
    </button>
  ))}
  <button
    onClick={nextPage}
    disabled={currentPage === pageNumbers.length}
    className="text-xl text-black disabled:text-gray-400"
  >
    &#62;
  </button>
</div>

        </div>
      </div>
    </section>
  );
};

export default ProblemStatements;
