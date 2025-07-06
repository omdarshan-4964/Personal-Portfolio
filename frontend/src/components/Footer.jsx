// Footer Section Component

import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  X,
  Heart
} from 'lucide-react';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { 
      name: "LinkedIn", 
      href: "https://linkedin.com/in/omdarshanshindepatil", 
      icon: <Linkedin className="w-5 h-5" /> 
    },
    { 
      name: "GitHub", 
      href: "https://github.com/Omdarshan-4964", 
      icon: <Github className="w-5 h-5" /> 
    },
    { 
      name: "X", 
      href: "https://x.com/Omdarshan_jsx", 
      icon: <X className="w-5 h-5" /> 
    }
  ];

  const skills = ["React", "Node.js", "MongoDB", "JavaScript", "Java", "Blockchain"];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Omdarshan Shindepatil
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Aspiring Software Engineer specializing in Full Stack Web Development with hands-on experience in MERN stack and backend systems. Passionate about building scalable and secure applications.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {skills.map((skill, index) => (
                <span key={index} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:scale-110 transition-all duration-300"
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
            <div className="space-y-3">
              <a 
                href="mailto:omdarshanpatil@gmail.com"
                className="text-gray-300 hover:text-white transition-colors flex items-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                omdarshanpatil@gmail.com
              </a>
              <a 
                href="tel:+919359037001"
                className="text-gray-300 hover:text-white transition-colors flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                +91 9359037001
              </a>
              <p className="text-gray-300 flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Pune, Maharashtra, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Omdarshan Shindepatil. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> and lots of ☕
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;