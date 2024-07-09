import Image from "next/image";


interface ProjectProps {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
    previewImage: string;
  }
  
  const Project: React.FC<ProjectProps> = ({ title, description, imageUrl, link, previewImage }) => {
    return (
      <div className="relative group overflow-hidden border border-gray-300 dark:border-gray-700 rounded-lg shadow-md">
        <a href={link} target="_blank" rel="noopener noreferrer" className="block p-4">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
          <Image 
            src={imageUrl} 
            alt={`${title} screenshot`} 
            width={600} 
            height={400}
            className="w-full h-auto" 
        />
        </a>
        <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Image 
            src={previewImage} 
            alt={`${title} preview`} 
            width={600} 
            height={400}
            className="w-full h-auto" 
        />
        </div>
      </div>
    );
  }
  
  export default Project;
  