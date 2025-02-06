import React from "react";

const stages = [
  { id: "01", title: "Enrollment", date: "1st - 7th Feb 2025", linkText: "Submit your team details here" },
  { id: "02", title: "Problem Statement Finalization", date: "7th - 12th Feb 2025", linkText: "Submit your report", template: "Get the template from here" },
  { id: "03", title: "Project Requirement Document", date: "12th - 18th Feb 2025", linkText: "Submit your report", template: "Get the template from here" },
  { id: "04", title: "Analysis & Design", date: "18th - 24th Feb 2025", linkText: "Submit your report", template: "Get the template from here" },
  { id: "05", title: "Implementation & Prototyping", date: "24th - 28th Feb 2025" },
  { id: "06", title: "Real-Time Implementation & Testing", date: "1st - 5th March 2025" },
  { id: "07", title: "Presentation & Results", date: "6th - 8th March 2025", template: "Final Presentation Template" },
];

const HackathonTimeline = () => {
  return (
    <div className="flex flex-col items-center py-5">
      <h2 className="text-lg font-semibold text-[#0078B7] mb-6">Stage-by-Stage Hackathon Execution</h2>
      <div className="relative w-full max-w-3xl flex flex-col items-center">
        <div className="absolute w-1 bg-blue-500 h-full left-1/2 transform -translate-x-1/2"></div>
        {stages.map((stage, index) => (
          <div key={stage.id} className="relative flex items-center justify-between w-full mb-8">
            
            <div className="w-1/3 text-right pr-4">
              <h3 className="text-lg font-bold text-black">{stage.title}</h3>
              {stage.linkText && <a href="#" className="text-[#0078B7] text-sm underline">{stage.linkText}</a>}
            </div>
            
            
            <div className="relative w-16 flex flex-col items-center">
              <div className="w-14 h-14 flex items-center justify-center text-white text-lg font-bold bg-[#0078B7] rounded-full border-4 border-white shadow-md">
                {stage.id}
              </div>
              {index < stages.length - 1 && <div className="w-1 bg-[#0078B7] h-12"></div>}
            </div>
            
            
            <div className="w-1/3 text-left pl-4">
              <p className="text-sm text-black">{stage.date}</p>
              {stage.template && <a href="#" className="text-[#0078B7] text-sm ">{stage.template}</a>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HackathonTimeline;
