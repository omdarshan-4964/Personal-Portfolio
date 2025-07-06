import React from 'react';
import { GraduationCap, MapPin, Calendar, Award, Target, User } from 'lucide-react';

const About = () => {
  const education = [
    {
      institution: "KIT's College of Engineering (Empowered Autonomous)",
      degree: "B.Tech in Computer Science and Business Systems",
      period: "Nov 2022 - May 2026",
      location: "Kolhapur, India",
      status: "Currently pursuing",
      grade: null
    },
    {
      institution: "Dr.Kadam Jeevan Vikas Prashala",
      degree: "Higher Secondary Education",
      period: "Completed June 2022",
      location: "Pune, India",
      status: "Completed",
      grade: "92.17%"
    },
    {
      institution: "S.B.Patil Public School",
      degree: "Secondary School Education",
      period: "Completed June 2019",
      location: "Pune, India",
      status: "Completed",
      grade: "86.40%"
    }
  ];

  const personalInfo = {
    location: "Pune, Maharashtra-413106, India",
    languages: ["English (Intermediate)", "Hindi (Advanced)", "Marathi (Superior)"],
    interests: ["Listening to Music", "Singing", "Fitness Enthusiast", "Playing Football", "Playing Cricket"]
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Personal Info */}
            <div className="space-y-8">
              {/* Objective */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="text-cyan-400" size={24} />
                  <h3 className="text-2xl font-semibold text-white">Objective</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Aspiring Software Engineer specializing in Full Stack Web Development with hands-on experience in MERN stack 
                  and backend systems. Passionate about building scalable and secure applications, with growing expertise in DevOps 
                  and Machine Learning. Eager to contribute to impactful projects and innovative tech solutions.
                </p>
              </div>

              {/* Personal Details */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <User className="text-purple-400" size={24} />
                  <h3 className="text-2xl font-semibold text-white">Personal Info</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin size={16} className="text-cyan-400" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Languages:</h4>
                    <div className="flex flex-wrap gap-2">
                      {personalInfo.languages.map((lang, index) => (
                        <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Interests:</h4>
                    <div className="flex flex-wrap gap-2">
                      {personalInfo.interests.map((interest, index) => (
                        <span key={index} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl p-6 text-center border border-cyan-500/30">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">2+</div>
                  <div className="text-gray-300">Years of Learning</div>
                </div>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-6 text-center border border-purple-500/30">
                  <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
                  <div className="text-gray-300">Projects Built</div>
                </div>
              </div>
            </div>

            {/* Right Column - Education */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="text-green-400" size={24} />
                  <h3 className="text-2xl font-semibold text-white">Education</h3>
                </div>
                
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="relative pl-6 border-l-2 border-gradient-to-b from-cyan-400 to-purple-600">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"></div>
                      
                      <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                        <h4 className="text-xl font-semibold text-white mb-2">{edu.institution}</h4>
                        <p className="text-cyan-400 font-medium mb-2">{edu.degree}</p>
                        
                        <div className="space-y-1 text-sm text-gray-300">
                          <div className="flex items-center gap-2">
                            <Calendar size={14} />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={14} />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Award size={14} />
                            <span className={edu.status === 'Currently pursuing' ? 'text-green-400' : 'text-blue-400'}>
                              {edu.status}
                            </span>
                          </div>
                          {edu.grade && (
                            <div className="flex items-center gap-2">
                              <Award size={14} />
                              <span className="text-yellow-400 font-medium">Grade: {edu.grade}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>
    </section>
  );
};

export default About;