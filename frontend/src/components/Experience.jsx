import React from 'react';
import { 
  ChevronUp, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Globe, 
  Calendar,
  Award,
  Users,
  Code,
  Database,
  Server,
  BookOpen,
  Trophy,
  Star,
  ExternalLink,
  Download,
  Heart
} from 'lucide-react';

// Experience Section Component
const ExperienceSection = () => {
  const experiences = [
    {
      title: "Secretary",
      organization: "Pioneer 2025 - Indian Society for Technical Education (ISTE)",
      period: "Feb 2025",
      type: "Leadership Role",
      description: "Led a core team of 19 members across 10 domains, coordinating 150+ volunteers, and managing operations for a national-level event with over 3000 participants.",
      achievements: ["Managed 150+ volunteers", "Coordinated 10 different domains", "3000+ event participants"],
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Technical Co-Head",
      organization: "Pioneer 2024 - Indian Society for Technical Education (ISTE)",
      period: "Feb 2024",
      type: "Technical Leadership",
      description: "Led the design & printing operations, ensuring smooth execution of technical events.",
      achievements: ["Led design operations", "Managed printing logistics", "Ensured seamless event execution"],
      icon: <Code className="w-6 h-6" />
    }
  ];

  const certifications = [
    {
      title: "Full Stack Web Development Cohort – 0–100",
      provider: "100xDevs",
      date: "May 2024",
      skills: ["MERN Stack", "Full Stack Development", "Web Technologies"]
    },
    {
      title: "Cybersecurity Virtual Internship",
      provider: "EduSkills",
      date: "March 2024",
      skills: ["Cybersecurity", "Security Protocols", "Risk Assessment"]
    },
    {
      title: "Google AI-ML Virtual Internship",
      provider: "EduSkills",
      date: "April 2024",
      skills: ["Machine Learning", "AI Concepts", "Data Analysis"]
    },
    {
      title: "GDSC WOW 2024 Participant",
      provider: "Google Developer Student Clubs",
      date: "April 2024",
      skills: ["Google Technologies", "Community Building", "Development"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Learning</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building leadership skills and technical expertise through hands-on experiences and continuous learning
          </p>
        </div>

        {/* Leadership Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Trophy className="w-8 h-8 text-yellow-400 mr-3" />
            Leadership Experience
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white">
                      {exp.icon}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-2xl font-bold text-white mb-1">{exp.title}</h4>
                        <p className="text-blue-300 font-medium">{exp.organization}</p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block bg-purple-500/30 text-purple-200 px-3 py-1 rounded-full text-sm font-medium mb-2">
                          {exp.type}
                        </span>
                        <p className="text-gray-300 flex items-center justify-end">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.achievements.map((achievement, idx) => (
                        <span key={idx} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Learning */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <BookOpen className="w-8 h-8 text-green-400 mr-3" />
            Certifications & Virtual Internships
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-grow">
                    <h4 className="text-lg font-semibold text-white mb-2">{cert.title}</h4>
                    <p className="text-blue-300 font-medium">{cert.provider}</p>
                  </div>
                  <span className="text-gray-300 text-sm flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {cert.date}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, idx) => (
                    <span key={idx} className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;


// // Gallery Section Component
// const GallerySection = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const galleryItems = [
//     {
//       id: 1,
//       title: "Winner - PBL Day Competition (SEM VI)",
//       description: "Project judged among 30+ teams for innovation and scalability",
//       date: "April 2025",
//       category: "Achievement",
//       image: "/api/placeholder/400/300",
//       award: "🏆 Winner"
//     },
//     {
//       id: 2,
//       title: "1st Runner Up - PBL Day Competition (SEM III)",
//       description: "Evento Project presented and recognized for practical application",
//       date: "November 2023",
//       category: "Achievement",
//       image: "/api/placeholder/400/300",
//       award: "🥈 Runner Up"
//     },
//     {
//       id: 3,
//       title: "Pioneer 2025 Event Management",
//       description: "Leading 150+ volunteers across 10 domains for 3000+ participants",
//       date: "February 2025",
//       category: "Leadership",
//       image: "/api/placeholder/400/300",
//       award: "👨‍💼 Secretary"
//     },
//     {
//       id: 4,
//       title: "Decentralized AI Model Marketplace",
//       description: "Blockchain-powered marketplace with smart contracts",
//       date: "2025",
//       category: "Project",
//       image: "/api/placeholder/400/300",
//       award: "🚀 Innovation"
//     },
//     {
//       id: 5,
//       title: "Evento - Event Management System",
//       description: "Full-stack MERN application for event management",
//       date: "2023",
//       category: "Project",
//       image: "/api/placeholder/400/300",
//       award: "💻 Development"
//     },
//     {
//       id: 6,
//       title: "Technical Leadership at Pioneer 2024",
//       description: "Led design & printing operations for technical events",
//       date: "February 2024",
//       category: "Leadership",
//       image: "/api/placeholder/400/300",
//       award: "🛠️ Technical Lead"
//     }
//   ];

//   const categories = ["All", "Achievement", "Leadership", "Project"];
//   const [activeCategory, setActiveCategory] = useState("All");

//   const filteredItems = activeCategory === "All" 
//     ? galleryItems 
//     : galleryItems.filter(item => item.category === activeCategory);

//   return (
//     <section id="gallery" className="py-20 bg-gradient-to-br from-slate-800 via-gray-900 to-slate-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Gallery & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Achievements</span>
//           </h2>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//             A visual journey through my projects, achievements, and leadership experiences
//           </p>
//         </div>

//         {/* Category Filter */}
//         <div className="flex justify-center mb-12">
//           <div className="bg-white/10 backdrop-blur-lg rounded-full p-2 border border-white/20">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setActiveCategory(category)}
//                 className={`px-6 py-2 rounded-full transition-all duration-300 ${
//                   activeCategory === category
//                     ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-semibold'
//                     : 'text-white hover:bg-white/20'
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Gallery Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredItems.map((item) => (
//             <div 
//               key={item.id}
//               className="group bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
//               onClick={() => setSelectedImage(item)}
//             >
//               <div className="relative overflow-hidden">
//                 <img 
//                   src={item.image} 
//                   alt={item.title}
//                   className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
//                 />
//                 <div className="absolute top-4 left-4">
//                   <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
//                     {item.award}
//                   </span>
//                 </div>
//                 <div className="absolute top-4 right-4">
//                   <span className={`px-3 py-1 rounded-full text-xs font-medium ${
//                     item.category === 'Achievement' ? 'bg-yellow-500/80 text-black' :
//                     item.category === 'Leadership' ? 'bg-blue-500/80 text-white' :
//                     'bg-purple-500/80 text-white'
//                   }`}>
//                     {item.category}
//                   </span>
//                 </div>
//               </div>
//               <div className="p-6">
//                 <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-300 transition-colors">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-300 text-sm mb-3 line-clamp-2">{item.description}</p>
//                 <div className="flex items-center justify-between">
//                   <span className="text-gray-400 text-xs flex items-center">
//                     <Calendar className="w-4 h-4 mr-1" />
//                     {item.date}
//                   </span>
//                   <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-yellow-300 transition-colors" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Modal for selected image */}
//         {selectedImage && (
//           <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//             <div className="bg-white/10 backdrop-blur-lg rounded-2xl max-w-2xl w-full border border-white/20">
//               <div className="relative">
//                 <img 
//                   src={selectedImage.image} 
//                   alt={selectedImage.title}
//                   className="w-full h-64 object-cover rounded-t-2xl"
//                 />
//                 <button 
//                   onClick={() => setSelectedImage(null)}
//                   className="absolute top-4 right-4 bg-black/70 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/90 transition-colors"
//                 >
//                   ×
//                 </button>
//               </div>
//               <div className="p-6">
//                 <div className="flex items-center justify-between mb-4">
//                   <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm">
//                     {selectedImage.award}
//                   </span>
//                   <span className="text-gray-300 text-sm">{selectedImage.date}</span>
//                 </div>
//                 <h3 className="text-2xl font-bold text-white mb-3">{selectedImage.title}</h3>
//                 <p className="text-gray-300 leading-relaxed">{selectedImage.description}</p>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// // Contact Section Component
// const ContactSection = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Form submitted:', formData);
//     // Reset form
//     setFormData({ name: '', email: '', subject: '', message: '' });
//   };

//   const contactInfo = [
//     {
//       icon: <Phone className="w-6 h-6" />,
//       label: "Phone",
//       value: "+91 9359037001",
//       link: "tel:+919359037001"
//     },
//     {
//       icon: <Mail className="w-6 h-6" />,
//       label: "Email",
//       value: "omdarshanpatil@gmail.com",
//       link: "mailto:omdarshanpatil@gmail.com"
//     },
//     {
//       icon: <MapPin className="w-6 h-6" />,
//       label: "Location",
//       value: "Pune, Maharashtra, India",
//       link: "#"
//     },
//     {
//       icon: <Globe className="w-6 h-6" />,
//       label: "Website",
//       value: "omdarshanshindepatil.com",
//       link: "https://omdarshanshindepatil.com"
//     }
//   ];

//   const socialLinks = [
//     {
//       icon: <Linkedin className="w-6 h-6" />,
//       label: "LinkedIn",
//       link: "https://linkedin.com/in/omdarshanshindepatil"
//     },
//     {
//       icon: <Github className="w-6 h-6" />,
//       label: "GitHub",
//       link: "https://github.com/Omdarshan-7001"
//     },
//     {
//       icon: <Globe className="w-6 h-6" />,
//       label: "Portfolio",
//       link: "https://omdarshanshindepatil.com"
//     }
//   ];

//   return (
//     <section id="contact" className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400">Touch</span>
//           </h2>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//             Let's discuss opportunities, collaborations, or just have a friendly chat about technology!
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <div className="space-y-8">
//             <div>
//               <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
//               <div className="space-y-4">
//                 {contactInfo.map((info, index) => (
//                   <a
//                     key={index}
//                     href={info.link}
//                     className="flex items-center p-4 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group"
//                   >
//                     <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-lg flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
//                       {info.icon}
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-400">{info.label}</p>
//                       <p className="text-white font-medium">{info.value}</p>
//                     </div>
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Social Links */}
//             <div>
//               <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
//               <div className="flex space-x-4">
//                 {socialLinks.map((social, index) => (
//                   <a
//                     key={index}
//                     href={social.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-12 h-12 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-indigo-500 hover:scale-110 transition-all duration-300"
//                     title={social.label}
//                   >
//                     {social.icon}
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Download Resume */}
//             <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
//               <h4 className="text-lg font-semibold text-white mb-4">Download Resume</h4>
//               <button className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-indigo-500 text-white px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-300">
//                 <Download className="w-5 h-5" />
//                 <span>Download CV</span>
//               </button>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
//             <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
//                     placeholder="Your Name"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
//                     placeholder="your.email@example.com"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
//                 <input
//                   type="text"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
//                   placeholder="Message Subject"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   required
//                   rows="4"
//                   className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
//                   placeholder="Your message here..."
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-pink-500 to-indigo-500 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center space-x-2"
//               >
//                 <span>Send Message</span>
//                 <Star className="w-5 h-5" />
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Footer Section Component
// const FooterSection = () => {
//   const currentYear = new Date().getFullYear();
  
//   const quickLinks = [
//     { name: "About", href: "#about" },
//     { name: "Skills", href: "#skills" },
//     { name: "Projects", href: "#projects" },
//     { name: "Experience", href: "#experience" },
//     { name: "Gallery", href: "#gallery" },
//     { name: "Contact", href: "#contact" }
//   ];

//   const socialLinks = [
//     { 
//       name: "LinkedIn", 
//       href: "https://linkedin.com/in/omdarshanshindepatil", 
//       icon: <Linkedin className="w-5 h-5" /> 
//     },
//     { 
//       name: "GitHub", 
//       href: "https://github.com/Omdarshan-7001", 
//       icon: <Github className="w-5 h-5" /> 
//     },
//     { 
//       name: "Portfolio", 
//       href: "https://omdarshanshindepatil.com", 
//       icon: <Globe className="w-5 h-5" /> 
//     }
//   ];

//   const skills = ["React", "Node.js", "MongoDB", "JavaScript", "Java", "Blockchain"];

//   return (
//     <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* About Section */}
//           <div className="lg:col-span-2">
//             <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
//               Omdarshan Shindepatil
//             </h3>
//             <p className="text-gray-300 mb-6 leading-relaxed">
//               Aspiring Software Engineer specializing in Full Stack Web Development with hands-on experience in MERN stack and backend systems. Passionate about building scalable and secure applications.
//             </p>
//             <div className="flex flex-wrap gap-2 mb-6">
//               {skills.map((skill, index) => (
//                 <span key={index} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
//                   {skill}
//                 </span>
//               ))}
//             </div>
//             <div className="flex space-x-4">
//               {socialLinks.map((link, index) => (
//                 <a
//                   key={index}
//                   href={link.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:scale-110 transition-all duration-300"
//                   title={link.name}
//                 >
//                   {link.icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
//             <ul className="space-y-3">
//               {quickLinks.map((link, index) => (
//                 <li key={index}>
//                   <a 
//                     href={link.href}
//                     className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
//                   >
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
//             <div className="space-y-3">
//               <a 
//                 href="mailto:omdarshanpatil@gmail.com"
//                 className="text-gray-300 hover:text-white transition-colors flex items-center"
//               >
//                 <Mail className="w-4 h-4 mr-2" />
//                 omdarshanpatil@gmail.com
//               </a>
//               <a 
//                 href="tel:+919359037001"
//                 className="text-gray-300 hover:text-white transition-colors flex items-center"
//               >
//                 <Phone className="w-4 h-4 mr-2" />
//                 +91 9359037001
//               </a>
//               <p className="text-gray-300 flex items-center">
//                 <MapPin className="w-4 h-4 mr-2" />
//                 Pune, Maharashtra, India
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="border-t border-gray-800 mt-12 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <p className="text-gray-400 text-sm mb-4 md:mb-0">
//               © {currentYear} Omdarshan Shindepatil. All rights reserved.
//             </p>
//             <p className="text-gray-400 text-sm flex items-center">
//               Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> and lots of ☕
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// Scroll To Top Component
// const ScrollToTop = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const toggleVisibility = () => {
//       if (window.pageYOffset > 300) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     window.addEventListener('scroll', toggleVisibility);
//     return () => window.removeEventListener('scroll', toggleVisibility);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   };

//   return (
//     <>
//       {isVisible && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
//           aria-label="Scroll to top"
//         >
//           <ChevronUp className="w-6 h-6 group-hover:animate-bounce" />
//         </button>
//       )}
//     </>
//   );
// };

// Main Component that combines all sections
// const PortfolioSections = () => {
//   return (
//     <div className="relative">
//       <ExperienceSection />
//       <GallerySection />
//       <ContactSection />
//       <FooterSection />
//       <ScrollToTop />
//     </div>
//   );
// };

// export default PortfolioSections;