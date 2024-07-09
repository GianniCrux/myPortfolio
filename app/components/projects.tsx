
import Project from './project';

const projects = [
  {
    title: 'Sticks',
    description: 'Miro clone: offer the possibility to create plans and workflows and collaborate real time with other users within the same organization',
    imageUrl: '/sticks-logo.png',
    link: 'https://sticks-gamma.vercel.app/',
    previewImage: '/sticks-screen.png'
  },
  {
    title: 'GPlanner',
    description: 'Plan scheduling app',
    imageUrl: '/moonbg.jpg',
    link: 'https://project2.com',
    previewImage: '/moonbg.jpg'
  },
  {
    title: 'Highwaytodev',
    description: 'Cars dodging mini-game',
    imageUrl: '/moonbg.jpg',
    link: 'https://project2.com',
    previewImage: '/moonbg.jpg'
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white py-16 content-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              link={project.link}
              previewImage={project.previewImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
