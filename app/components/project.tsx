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
      <div data-aos="flip-right" className="relative group overflow-hidden border border-gray-300 dark:border-gray-700 rounded-lg shadow-md w-full max-w-xs">
        <a href={link} target="_blank" rel="noopener noreferrer" className="block p-4">
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-gray-700 text-sm dark:text-gray-300 mb-4">{description}</p>
          <div className="relative w-full aspect-video">
            <Image 
              src={imageUrl} 
              alt={`${title} screenshot`} 
              fill
              className="object-cover" 
            />
          </div>
        </a>
        <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a href={link} target="_blank" rel="noopener noreferrer" className="block p-4 w-full h-full">
          <div className="relative w-full aspect-video">           
              <Image 
                src={previewImage} 
                alt={`${title} preview`} 
                fill
                className="object-cover" 
              />
          </div>
          </a>
        </div>
      </div>
    );
  }
  
  export default Project;
  