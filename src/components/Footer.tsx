import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socialLinks = [
  { name: "GitHub", icon: <FaGithub className="w-6 h-6" />, url: "#" },
  { name: "LinkedIn", icon: <FaLinkedin className="w-6 h-6" />, url: "#" },
  { name: "Twitter", icon: <FaTwitter className="w-6 h-6" />, url: "#" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-4 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>&copy; {currentYear} YODA ISSUI. All Rights Reserved.</p>
        </div>
        <div className="flex space-x-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
