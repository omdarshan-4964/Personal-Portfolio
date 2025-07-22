import React, { useState } from 'react';
import { ExternalLink, Github, Calendar, Award, Code, Database, Globe, Zap } from 'lucide-react';
import DAIMMP from '../assets/Projects_Images/DAIMMP.png';

const Projects = () => {
    const [activeProject, setActiveProject] = useState(0);

    const projects = [
        {
            id: 1,
            title: 'Decentralized AI Model Marketplace',
            year: '2025',
            category: 'Blockchain & ML in MERN',
            description: 'Built a blockchain-powered marketplace for secure AI model exchange, integrating smart contracts for licensing and IP protection. Enabled provenance tracking and audit trails for model transparency and integrity.',
            fullDescription: 'A revolutionary platform that combines blockchain technology with AI to create a secure marketplace for AI models. The system uses Ethereum smart contracts to handle licensing, payments, and intellectual property protection automatically.',
            technologies: ['React', 'Node.js', 'Ethereum', 'Solidity', 'MongoDB', 'AI'],
            features: [
                'Smart contract-based licensing system',
                'IP protection and provenance tracking',
                'Secure model exchange platform',
                'Audit trails for transparency',
                'Automated payment system'
            ],
            github: 'https://github.com/omdarshan-4964/DAiMMP',
            demo: 'https://aimodels-frontend.onrender.com',
            image: DAIMMP,
            achievements: ['Winner of PBL Day Competition (SEM VI)'],
            status: 'Completed',
            icon: <Database className="w-8 h-8" />
        },
        {
            id: 2,
            title: 'Evento - College Events Management System',
            year: '2023',
            category: 'Full Stack Web Application',
            description: 'A complete MERN stack application designed to solve venue booking conflicts and streamline event management for college clubs and students.',
            fullDescription: 'Evento is a comprehensive event management system that handles the entire event lifecycle. It features role-based access for Super Admins, Club Admins, and Students. The core functionality includes a conflict-detection system to prevent double-bookings, a real-time public calendar for venue availability, and a complete workflow for event creation, booking approval, and student registration with automatic capacity checks.',
            technologies: [ 'React.js', 
                            'Node.js', 
                            'Express.js', 
                            'MongoDB', 
                            'Tailwind CSS',
                            'JWT (JSON Web Tokens)',
                            'Vite',
                            'Recharts',
                            'React Big Calendar'
                        ],
            features: [
                'Role-Based Dashboards (Admin, Club, Student)',
                'Secure JWT Authentication & Authorization',
                'Real-time Booking Calendar View',
                'Automated Venue Booking Conflict Detection',
                'Admin Approval Workflow for Bookings',
                'Student Event Registration with Capacity Limits',
                'User Management Panel for Admins',
                'Data Analytics & Visualization Dashboard'
            ],
            github: 'https://github.com/omdarshan-4964/Evento-College_Events_Management_System',
            demo: 'https://evento-zeta-nine.vercel.app/',
            image: null,
            achievements: ['Successfully designed, built, and deployed a full-stack application from scratch',
                           '1st Runner Up of PBL Day Competition (SEM III)'
                        ],
            status: 'Completed & Deployed',
            icon: <Calendar className="w-8 h-8" />
        },
        {
            id: 3,
            title: 'LifeLink: Blood Donation Management System',
            year: '2025',
            category: 'Full Stack MERN Application',
            description:
                'Built a full-stack Blood Donation Management System using the MERN stack. Enabled donor registration, login, and admin-controlled verification via RESTful APIs. Improved usability with a responsive React dashboard and real-time donor notifications.',
            fullDescription:
                'LifeLink is a comprehensive platform designed to bridge the gap between blood donors and hospitals. It allows donors to register and manage their donations, while admins can verify users, monitor blood requests, and contact suitable donors. The system streamlines communication, enhances accessibility, and reduces dependency on traditional blood banks.',
            technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
            features: [
                'Donor and admin login system',
                'Admin-controlled donor verification',
                'Real-time donor notification system',
                'Responsive React dashboard',
                'Secure file uploads and RESTful APIs'
            ],
            github: 'https://github.com/omdarshan-4964/lifelink',
            demo: 'https://lifelink-frontend.onrender.com',
            image: null,
            achievements: ['Top 5 Finalist – PBL Day Competition (Semester IV)'],
            status: 'Completed',
            icon: <Database className="w-8 h-8" />
        }
    ];

    const getTechColor = (tech) => {
        const colors = {
            'React': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
            'React.js': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
            'Node.js': 'bg-green-500/20 text-green-300 border-green-500/30',
            'Express.js': 'bg-gray-500/20 text-gray-300 border-gray-500/30',
            'MongoDB': 'bg-green-600/20 text-green-400 border-green-600/30',
            'Ethereum': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
            'Solidity': 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
            'REST API': 'bg-orange-500/20 text-orange-300 border-orange-500/30'
        };
        return colors[tech] || 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30';
    };

    const currentProject = projects[activeProject];

    return (
        <section id="projects" className="py-20 relative">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                        Featured Projects
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full mb-4"></div>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Explore my latest projects showcasing full-stack development, blockchain integration, and innovative solutions.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto">
                    {/* Project Navigation */}
                    <div className="flex flex-wrap justify-center mb-12 gap-4">
                        {projects.map((project, index) => (
                            <button
                                key={project.id}
                                onClick={() => setActiveProject(index)}
                                className={`flex items-center gap-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${activeProject === index
                                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                                        : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
                                    }`}
                            >
                                {project.icon}
                                <div className="text-left">
                                    <div className="font-semibold">{project.title}</div>
                                    <div className="text-sm opacity-75">{project.category}</div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Project Details */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
                        {/* Project Header */}
                        <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 p-8 border-b border-white/10">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        {currentProject.icon}
                                        <h3 className="text-3xl font-bold text-white">{currentProject.title}</h3>
                                    </div>
                                    <div className="flex items-center gap-4 text-gray-300">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={16} />
                                            <span>{currentProject.year}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Code size={16} />
                                            <span>{currentProject.category}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Zap size={16} />
                                            <span className="text-green-400">{currentProject.status}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    {currentProject.github && (
                                        <a
                                            href={currentProject.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300"
                                        >
                                            <Github size={18} />
                                            <span>Code</span>
                                        </a>
                                    )}
                                    {currentProject.demo && (
                                        <a
                                            href={currentProject.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:shadow-lg hover:shadow-cyan-500/25 rounded-lg transition-all duration-300"
                                        >
                                            <ExternalLink size={18} />
                                            <span>Demo</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Project Content */}
                        <div className="p-8">
                            <div className="grid lg:grid-cols-3 gap-8">
                                {/* Main Content */}
                                <div className="lg:col-span-2 space-y-6">
                                    {/* Description */}
                                    <div>
                                        <h4 className="text-xl font-semibold text-white mb-3">Project Overview</h4>
                                        <p className="text-gray-300 leading-relaxed mb-4">{currentProject.description}</p>
                                        <p className="text-gray-300 leading-relaxed">{currentProject.fullDescription}</p>
                                    </div>

                                    {/* Key Features */}
                                    <div>
                                        <h4 className="text-xl font-semibold text-white mb-3">Key Features</h4>
                                        <div className="grid md:grid-cols-2 gap-3">
                                            {currentProject.features.map((feature, index) => (
                                                <div key={index} className="flex items-center gap-3 text-gray-300">
                                                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"></div>
                                                    <span>{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Achievements */}
                                    {currentProject.achievements.length > 0 && (
                                        <div>
                                            <h4 className="text-xl font-semibold text-white mb-3">Achievements</h4>
                                            <div className="space-y-2">
                                                {currentProject.achievements.map((achievement, index) => (
                                                    <div key={index} className="flex items-center gap-3 p-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg border border-yellow-500/30">
                                                        <Award className="text-yellow-400" size={20} />
                                                        <span className="text-yellow-300 font-medium">{achievement}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Sidebar */}
                                <div className="space-y-6">
                                    {/* Technologies */}
                                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                                        <h4 className="text-xl font-semibold text-white mb-4">Technologies Used</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {currentProject.technologies.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className={`px-3 py-2 rounded-lg text-sm font-medium border ${getTechColor(tech)}`}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Project Stats */}
                                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                                        <h4 className="text-xl font-semibold text-white mb-4">Project Stats</h4>
                                        <div className="space-y-2 text-gray-300">
                                            <div className="flex items-center justify-between">
                                                <span>Total Features</span>
                                                <span className="font-semibold">{currentProject.features.length}</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span>Technologies Used</span>
                                                <span className="font-semibold">{currentProject.technologies.length}</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span>Status</span>
                                                <span className="font-semibold text-green-400">{currentProject.status}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div> {/* End Sidebar */}
                            </div> {/* End Grid */}
                        </div> {/* End Project Content */}
                    </div> {/* End Project Details */}
                </div> {/* End Container */}
            </div>
        </section>
    );
};

export default Projects;

