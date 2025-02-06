import React from "react";
import hi from "./hi.png";
const WhatYouWillDo = () => {
    const steps = [
      "Form a multidisciplinary team of 5-8 members.",
      "Pick one problem statement from the given list.",
      "Develop a working prototype that solves the problem effectively.",
      "Present your solution to the jury for evaluation."
    ];
  
    return (
      <div className="bg-white  py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#0078B7] mx-1 my-1 mb-8">What You Will Do?</h2>
          <div className="grid md:grid-cols-2 gap-0 items-center">
            <ul className="space-y-3 font-medium text-black">
              {steps.map((step, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 text-blue-600">✔</div>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-center">
              <img src={hi} alt="Team Collaboration" className="max-w-full" />
            </div>
          </div>
        </div>
      </div>
    );
  };

export default WhatYouWillDo;