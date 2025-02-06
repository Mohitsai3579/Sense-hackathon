import React, { useState } from 'react';
import image1 from "./og-icon.png";
import image2 from "./images.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="relative shadow-md fixed w-full z-50 w-full fixed h-8 bg-[#0078B7]"></div>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        <div className="flex items-center space-x-4">
          <img src={image1} alt="SSIT Logo" className="h-10" />
          <div className="h-6 w-px bg-gray-300"></div>
          <img src={image2} alt="X Logo" className="h-10" />
        </div>
        
        
        <ul className="hidden md:flex space-x-5  ">
          {['About', 'Structure & Guidelines', 'Timeline', 'Evaluation Criteria', 'Instructions', 'Takeaways'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase().replace(/ & /g, '-')}`} 
                 className="text-black hover:text-black font-medium">
                {item}
              </a>
            </li>
          ))}
        </ul>
        
        
        <button onClick={() => setIsOpen(!isOpen)} 
                className="md:hidden text-white focus:outline-none">
          ☰
        </button>
      </div>
      
      
      {isOpen && (
        <div className="md:hidden bg- text-black shadow-md py-4 px-6">
          <ul className="space-y-4">
            {['About', 'Structure & Guidelines', 'Timeline', 'Evaluation Criteria', 'Instructions', 'Takeaways'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase().replace(/ & /g, '-')}`}
                   onClick={() => setIsOpen(false)}
                   className="block text-black hover:text-gray-700 font-medium">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
