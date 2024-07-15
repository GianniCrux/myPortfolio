'use client'

import Image from 'next/image'
import  RandomLines  from '../_components/lines'




const skills = [
  { name: 'HTML', image: '/next.svg' },
  { name: 'CSS', image: '/next.svg' },
  { name: 'JavaScript', image: '/next.svg' },
  { name: 'GitHub', image: '/next.svg' },
  { name: 'Tailwind', image: '/next.svg' },
  { name: 'React', image: '/next.svg' },
  { name: 'Python', image: '/next.svg' },
  { name: 'Next.js', image: '/next.svg' },
  { name: 'Convex', image: '/next.svg' },
  { name: 'Clerk', image: '/next.svg' },
  { name: 'Prisma', image: '/next.svg' },
  { name: 'Typescript', image: '/next.svg' },
  { name: 'Node.js', image: '/next.svg' },
  { name: 'Redux', image: '/next.svg' },
]

export default function HomePage() {




  return (
    <div id='home' className="min-h-screen relative bg-white dark:bg-black pt-10">
      <RandomLines />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between mb-8">
{/*           
          <div className="md:w-1/3 mb-8 md:mb-0" data-aos="fade-up">
            <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4 bg-gray-200">
              <Image src="/proPic.png" alt="Profile" width={192} height={192} />
            </div>
          </div> */}

          {/* Description */}
          <div data-aos="fade-down" className="md:w-1/2 lg:w-2/4 ">
            <div className="bg-white dark:bg-black text-black dark:text-white bg-opacity-80 dark:bg-opacity-80 p-6 rounded-lg  border-2 border-green-500">
              <p className="text-lg leading-relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, accusamus! Explicabo, veritatis! Ratione, rem! Blanditiis optio et odit esse provident.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Container */}
        <div data-aos="zoom-in" className="w-full max-w-4xl mx-auto p-6 rounded-lg bg-white dark:bg-black bg-opacity-90 dark:bg-opacity-90  border-2 border-green-500">
          <h2 className="text-2xl text-green-600 font-semibold mb-6 text-center dark:text-green-400">Skills</h2>
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                  <Image src={skill.image} alt={skill.name} width={40} height={40} />
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