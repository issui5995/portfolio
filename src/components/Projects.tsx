import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Project Title 1",
    description: "A brief description of the project. What it does, why you built it, and what technologies were used.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    image: "https://via.placeholder.com/400x250/1A202C/FFFFFF?text=Project+Image",
    github: "#",
    live: "#",
  },
  {
    title: "Project Title 2",
    description: "A brief description of the project. What it does, why you built it, and what technologies were used.",
    tags: ["Python", "Flask", "SQLAlchemy"],
    image: "https://via.placeholder.com/400x250/1A202C/FFFFFF?text=Project+Image",
    github: "#",
    live: "#",
  },
  {
    title: "Project Title 3",
    description: "A brief description of the project. What it does, why you built it, and what technologies were used.",
    tags: ["Next.js", "GraphQL", "PostgreSQL"],
    image: "https://via.placeholder.com/400x250/1A202C/FFFFFF?text=Project+Image",
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-800 rounded-lg overflow-hidden group">
              <div className="relative">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                    <FaGithub className="w-8 h-8" />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                    <FaExternalLinkAlt className="w-7 h-7" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-gray-700 text-gray-300 px-2 py-1 rounded-md text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
