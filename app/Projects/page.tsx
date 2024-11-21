import Link from 'next/link';
import { Github } from 'lucide-react';

interface ProjectCardProps {
  number: string;
  title: string;
  description: string;
  githubUrl: string;
}

interface Project {
  number: string;
  title: string;
  description: string;
  githubUrl: string;
}

const ProjectCard = ({ number, title, description, githubUrl }: ProjectCardProps) => {
  return (
    <div className="relative group">
      <div className="h-72 sm:h-80 md:h-96 w-full bg-[#2A0F45]/60 border border-[#8B31FF]/30 backdrop-blur rounded-3xl transition-all duration-300 group-hover:bg-[#3B1A64]/80">
        <div className="h-full flex flex-col items-center justify-center p-4 sm:p-6">
          <div className="flex flex-col items-center transition-opacity duration-300 group-hover:opacity-0">
            <span className="text-3xl sm:text-4xl font-bold text-white mb-2 sm:mb-4">#{number}</span>
            <h3 className="text-lg sm:text-xl font-bold text-white text-center">{title}</h3>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <p className="text-sm sm:text-base text-white text-center mb-4 sm:mb-6">{description}</p>
            <Link 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 sm:px-6 py-2 bg-fuchsia-600 hover:bg-fuchsia-700 text-white rounded-full transition-colors text-sm sm:text-base"
              aria-label={`Ver código fuente del proyecto ${title} en GitHub`}
            >
              <Github size={18} className="sm:w-5 sm:h-5" />
              Ver Código
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const projects: Project[] = [
    {
      number: "1",
      title: "Shopping website",
      description: " online platform where users can browse, select and purchase products or services from various categories",
      githubUrl: "https://github.com/Juanjoyita/shopping_website"
    },
    {
      number: "2",
      title: "Task Manager ",
      description: "This project is a task management web application developed using React and Next.js. It allows users to create, edit and delete tasks and add comments for better collaboration.",
      githubUrl: "https://github.com/Juanjoyita/TaskManager"
    },
    {
      number: "3",
      title: "Portfolio Website",
      description: "Personal website developed with Next.js and Tailwind CSS. Responsive design and smooth animations.",
      githubUrl: "https://github.com/Juanjoyita/Portfolio-JJ"
    },
    {
      number: "4",
      title: "Weather App",
      description: "Aplicación del clima que consume API externa. Desarrollada con React y styled-components.",
      githubUrl: "https://github.com/tuusuario/weather-app"
    }
  ];

  return (
    <section className="min-h-screen py-16 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="hidden lg:block absolute left-12 top-[60%] transform -rotate-90 origin-left">
          <h2 className="text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 tracking-wider">
            PROJECTS
          </h2>
        </div>
        <div className="lg:hidden text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 tracking-wider">
            PROJECTS
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:ml-20">
          {projects.map((project) => (
            <ProjectCard
              key={project.number}
              number={project.number}
              title={project.title}
              description={project.description}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
