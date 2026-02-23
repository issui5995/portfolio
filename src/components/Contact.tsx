import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socialLinks = [
  { name: "GitHub", icon: <FaGithub className="w-8 h-8" />, url: "#" },
  { name: "LinkedIn", icon: <FaLinkedin className="w-8 h-8" />, url: "#" },
  { name: "Twitter", icon: <FaTwitter className="w-8 h-8" />, url: "#" },
];

const Contact = () => {
  return (
    <section className="bg-gray-800 text-white py-20 px-4 md:px-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-300 text-lg mb-8">
          お仕事のご相談や、その他お問い合わせは下記のメールアドレスまでお気軽にご連絡ください。
        </p>
        <a
          href="mailto:your-email@example.com"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors duration-300"
        >
          your-email@example.com
        </a>
        <div className="mt-12">
          <p className="text-gray-400 mb-4">Or find me on social media:</p>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
