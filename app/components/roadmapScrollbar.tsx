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
          if (scrollPosition >= offsetTop - windowHeight / 2 &&
              scrollPosition < offsetTop + offsetHeight - windowHeight / 2) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return ( //TODO: Modify the style 
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
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