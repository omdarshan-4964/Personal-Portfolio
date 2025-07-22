import React, { useEffect, useState } from 'react';
import { ChevronDown, Download, Mail, Github, Linkedin, X } from 'lucide-react';
import profileImage from '../assets/profile.jpeg';
import resume from '../assets/Resume_2026.pdf';

// Mock portfolio data for testing
const mockPortfolioData = {
  profile: {
    name: 'Omdarshan Uttam Shindepatil',
    title: 'Full Stack Developer | MERN Stack Specialist',
    email: 'omdarshanpatil@gmail.com',
    phone: '+91 9359037001',
    location: 'Pune, Maharashtra, India',
    x: 'Omdarshan_jsx',
    linkedin: 'omdarshanshindepatil',
    github: 'Omdarshan-4964',
    profileImage: profileImage,
    resume: resume,
    // bio: `Aspiring Software Engineer specializing in Full Stack Web Development with hands-on experience in MERN stack and backend systems. Passionate about building scalable and secure applications, with growing expertise in DevOps and Machine Learning.`
  }
};

const Hero = () => {
  // Use mock data for testing - replace with your context hook later
  const portfolioData = mockPortfolioData;
  const { profile } = portfolioData;
  
  const [typedText, setTypedText] = useState('');
  const titles = [
    'Full Stack Developer', 
    'MERN Backend Specialist',
    'B.Tech In CSBS',
    'Cybersecurity Enthusiast'
  ];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  // Typing animation effect
  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;
    const currentTitle = titles[currentTitleIndex];
    
    const typingInterval = setInterval(() => {
      if (currentIndex < currentTitle.length) {
        currentText += currentTitle[currentIndex];
        setTypedText(currentText);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          // Clear text and move to next title
          const clearingInterval = setInterval(() => {
            currentText = currentText.slice(0, -1);
            setTypedText(currentText);
            if (currentText === '') {
              clearInterval(clearingInterval);
              setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
            }
          }, 50);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentTitleIndex]);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16 md:pt-20 lg:pt-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
        />
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="relative inline-block">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 p-1 hover:scale-110 transition-transform duration-300">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                  {profile.profileImage ? (
                    <img 
                      src={profile.profileImage} 
                      alt={profile.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <span className="text-4xl">👨‍💻</span>
                  )}
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-900 animate-pulse" />
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent">
            {profile.name}
          </h1>

          <div className="h-16 mb-6">
            <span className="text-2xl md:text-3xl text-cyan-400 font-semibold">
              {typedText}
              <span className="ml-1 animate-pulse">|</span>
            </span>
          </div>

          {/* Bio */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            {profile.bio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
            >
              View My Work
            </a>
            
            {profile.resume && (
              <a
                href={profile.resume}
                download
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-500 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
              >
                <Download size={20} />
                Download Resume
              </a>
            )}
            
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-purple-500 text-purple-500 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
            >
              <Mail size={20} />
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            {profile.github && (
              <a
                href={`https://github.com/${profile.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-125"
              >
                <Github size={24} />
              </a>
            )}
            
            {profile.linkedin && (
              <a
                href={`https://linkedin.com/in/${profile.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-125"
              >
                <Linkedin size={24} />
              </a>
            )}
            
            {profile.x && (
              <a
                href={`https://x.com/${profile.x}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-125"
              >
                <X size={24} />
              </a>
            )}

          </div>

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center text-gray-400">
            <span className="text-sm mb-2">Scroll to explore</span>
            <ChevronDown size={24} className="animate-bounce" />
          </div>
        </div>
      </div>

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
