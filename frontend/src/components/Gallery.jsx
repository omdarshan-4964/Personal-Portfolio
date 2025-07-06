import React, { useState } from 'react';
import { Calendar,ExternalLink } from 'lucide-react';
import PBL_Winner_VI from '../assets/Winner_PBL_SEM_VI.jpg';
import Pioneer from '../assets/Pioneer_2025_Event.jpg';
import Evento from '../assets/Evento_SEM_III.jpg';
import DAIMMP from '../assets/Projects_Images/DAIMMP.png';
import Pionner_123 from '../assets/123.jpg';
import Pioneer_2024 from '../assets/Pioneer_2024.jpg';


// Gallery Section Component
const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "Winner - PBL Day Competition (SEM VI)",
      description: "Project judged among 30+ teams for innovation and scalability",
      date: "April 2025",
      category: "Achievement",
      image: PBL_Winner_VI,
      award: "🏆 Winner"
    },
    {
      id: 2,
      title: "1st Runner Up - PBL Day Competition (SEM III)",
      description: "Evento Project presented and recognized for practical application",
      date: "November 2023",
      category: "Achievement",
      image: Evento,
      award: "🥈 Runner Up"
    },
    {
      id: 3,
      title: "Pioneer 2025 Event Management",
      description: "Leading 150+ volunteers across 10 domains for 3000+ participants",
      date: "February 2025",
      category: "Leadership",
      image: Pioneer,
      award: "👨‍💼 Secretary"
    },
    {
      id: 4,
      title: "Decentralized AI Model Marketplace",
      description: "Blockchain-powered marketplace with smart contracts",
      date: "2025",
      category: "Project",
      image: DAIMMP,
      award: "🚀 Innovation"
    },
    {
      id: 5,
      title: "Evento - Event Management System",
      description: "Full-stack MERN application for event management",
      date: "2023",
      category: "Project",
      image: Pionner_123,
      award: "💻 Development"
    },
    {
      id: 6,
      title: "Technical Leadership at Pioneer 2024",
      description: "Led design & printing operations for technical events",
      date: "February 2024",
      category: "Leadership",
      image: Pioneer_2024,
      award: "🛠️ Technical Lead"
    }
  ];

  const categories = ["All", "Achievement", "Leadership", "Project"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-slate-800 via-gray-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Gallery & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Achievements</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A visual journey through my projects, achievements, and leadership experiences
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-full p-2 border border-white/20">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-semibold'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="group bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative overflow-hidden">
                {/* <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                /> */}

                {/* <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300 border-2 border-white"
                /> */}

                <img 
  src={item.image} 
  alt={item.title}
  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300 bg-white"
/>


                <div className="absolute top-4 left-4">
                  <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.award}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item.category === 'Achievement' ? 'bg-yellow-500/80 text-black' :
                    item.category === 'Leadership' ? 'bg-blue-500/80 text-white' :
                    'bg-purple-500/80 text-white'
                  }`}>
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm mb-3 line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-xs flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {item.date}
                  </span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-yellow-300 transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for selected image */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl max-w-2xl w-full border border-white/20">
              <div className="relative">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-black/70 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/90 transition-colors"
                >
                  ×
                </button>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm">
                    {selectedImage.award}
                  </span>
                  <span className="text-gray-300 text-sm">{selectedImage.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{selectedImage.title}</h3>
                <p className="text-gray-300 leading-relaxed">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;