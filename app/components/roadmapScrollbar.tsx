'use client'

import React, { useState, useEffect } from 'react';

interface Section {
  id: string;
  title: string;
}

const RoadmapScrollbar: React.FC<{ sections: Section[] }> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(0);


  const scrollToSection = (index: number) => {
    const element = document.getElementById(sections[index].id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth'})
    }
  }

  useEffect(() => { 
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop - windowHeight / 2 &&
              scrollPosition < offsetTop + offsetHeight - windowHeight / 2
            ) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return ( //TODO: Modify the style 
    <div id="roadmap-scrollbar" className="w-1 fixed ml-1 md:top-1/2 md:right-5 md:-translate-y-1/2 md:flex md:flex-col 
                    sm:top-0 sm:left-0 sm:right-0 sm:flex sm:flex-row sm:justify-center sm:bg-white sm:dark:bg-black ">
      {sections.map((section, index) => (
        <div
          key={section.id}
          className={`w-4 h-4 rounded-full cursor-pointer ${
            index === activeSection ? 'bg-green-500' : 'bg-gray-300'
          }`}
          onClick={() => scrollToSection(index)}
          title={section.title}
        />
      ))}
    </div>
  );
};

export default RoadmapScrollbar;