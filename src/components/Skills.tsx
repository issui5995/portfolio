import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiC,
  SiRaspberrypi,
} from "react-icons/si";

const skills = [
  { name: "Python", icon: <FaPython className="w-12 h-12 mx-auto" /> },
  { name: "C", icon: <SiC className="w-12 h-12 mx-auto" /> },
  { name: "TypeScript", icon: <SiTypescript className="w-12 h-12 mx-auto" /> },
  { name: "React", icon: <FaReact className="w-12 h-12 mx-auto" /> },
  { name: "Raspberry Pi", icon: <SiRaspberrypi className="w-12 h-12 mx-auto" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="w-12 h-12 mx-auto" /> },
  { name: "Node.js", icon: <FaNodeJs className="w-12 h-12 mx-auto" /> },
  { name: "Git", icon: <FaGitAlt className="w-12 h-12 mx-auto" /> },
  { name: "Docker", icon: <FaDocker className="w-12 h-12 mx-auto" /> },
];

const Skills = () => {
  return (
    <section className="bg-gray-800 text-white py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-gray-900 p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-blue-400 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
