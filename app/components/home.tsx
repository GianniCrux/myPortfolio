'use client'

import Image from 'next/image'
import RandomLines from './random-lines'

const skills = [
  { name: 'Skill 1', image: '/next.svg' },
  { name: 'Skill 2', image: '/next.svg' },
  { name: 'Skill 3', image: '/next.svg' },
  { name: 'Skill 4', image: '/next.svg' },
  { name: 'Skill 5', image: '/next.svg' },
  { name: 'Skill 6', image: '/next.svg' },
  { name: 'Skill 7', image: '/next.svg' },
  { name: 'Skill 8', image: '/next.svg' },
  { name: 'Skill 9', image: '/next.svg' },
]

export default function HomePage() {
  return (
    <div className="min-h-screen relative bg-white dark:bg-black">
      <RandomLines />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between mb-8">
          {/* User Profile */}
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4 bg-gray-200">
              <Image src="/proPic.png" alt="Profile" width={192} height={192} />
            </div>
          </div>

          {/* Description */}
          <div className="md:w-2/3 md:pl-8">
            <div className="bg-white dark:bg-slate-950 text-black dark:text-white bg-opacity-80 dark:bg-opacity-80 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Why me</h2>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, accusamus! Explicabo, veritatis! Ratione, rem! Blanditiis optio et odit esse provident.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Container */}
        <div className="w-full max-w-6xl mx-auto p-6 rounded-lg bg-white dark:bg-slate-950 bg-opacity-80 dark:bg-opacity-80 shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-center">Skills</h2>
          <div className="flex flex-wrap justify-center">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center m-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <Image src={skill.image} alt={skill.name} width={40} height={40} />
                </div>
                <span className="mt-2 text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}