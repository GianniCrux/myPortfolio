'use client'


import { FaHtml5, FaCss3Alt, FaJs, FaGithub, FaCloud, FaReact, FaPython, FaNodeJs } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs, SiClerk, SiPrisma, SiTypescript, SiRedux } from 'react-icons/si'
import RandomLines from '../_components/lines'
import { IconType } from 'react-icons';
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

type Skill = {
  name: string;
  icon: IconType;
  color: string;
};

const skills: Skill[] = [
  { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
  { name: 'GitHub', icon: FaGithub, color: '#181717' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'Python', icon: FaPython, color: '#3776AB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'Convex', icon: FaCloud, color: '#FF5C02' },
  { name: 'Clerk', icon: SiClerk, color: '#6C47FF' },
  { name: 'Prisma', icon: SiPrisma, color: '#2D3748' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'Redux', icon: SiRedux, color: '#764ABC' },
]

export default function HomePage() {

  useEffect(() => {
    AOS.refresh(); // Ensure AOS refreshes to detect new elements
  }, []);


  return (
    <div id='home' className="min-h-screen relative bg-white dark:bg-black pt-10">
      <RandomLines />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between mb-8">

          <div data-aos="fade-down" className="md:w-1/2 lg:w-2/4 ">
            <div className="bg-white dark:bg-black text-black dark:text-white bg-opacity-80 dark:bg-opacity-80 p-6 rounded-lg  border-2 border-green-500">
              <p className="text-lg leading-relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, accusamus! Explicabo, veritatis! Ratione, rem! Blanditiis optio et odit esse provident.
              </p>
            </div>
          </div>
        </div>

      
        <div data-aos="zoom-in" className="w-full max-w-4xl mx-auto p-6 rounded-lg bg-white dark:bg-black bg-opacity-90 dark:bg-opacity-90  border-2 border-green-500">
          <h2 className="text-2xl text-green-600 font-semibold mb-6 text-center dark:text-green-400">Skills</h2>
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-14 h-14 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                {React.createElement(skill.icon, { size: 30, color: skill.color })}
                </div>
                <span className="mt-2 text-sm text-black dark:text-white group-hover:text-green-500 transition-colors">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}