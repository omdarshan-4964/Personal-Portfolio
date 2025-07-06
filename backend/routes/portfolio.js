// backend/routes/portfolio.js
const express = require('express');
const router = express.Router();
const { Profile, Skill, Project, Experience, Gallery } = require('../models/Portfolio');

// GET /api/portfolio - Get all portfolio data
router.get('/', async (req, res) => {
  try {
    const [profile, skills, projects, experience, gallery] = await Promise.all([
      Profile.findOne().sort({ createdAt: -1 }),
      Skill.find().sort({ createdAt: 1 }),
      Project.find().sort({ createdAt: -1 }),
      Experience.find().sort({ createdAt: -1 }),
      Gallery.find().sort({ createdAt: -1 })
    ]);

    res.json({
      success: true,
      data: {
        profile: profile || {},
        skills: skills || [],
        projects: projects || [],
        experience: experience || [],
        gallery: gallery || []
      }
    });
  } catch (error) {
    console.error('Error fetching portfolio data:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch portfolio data',
      error: error.message
    });
  }
});

// POST /api/portfolio/seed - Seed initial data
router.post('/seed', async (req, res) => {
  try {
    // Check if data already exists
    const existingProfile = await Profile.findOne();
    if (existingProfile) {
      return res.json({
        success: true,
        message: 'Portfolio data already exists'
      });
    }

    // Create initial profile
    const profile = new Profile({
      name: 'Omdarshan Uttam Shindepatil',
      title: 'Full Stack Developer | MERN Stack Specialist',
      email: 'omdarshanpatil@gmail.com',
      phone: '+91 9359037001',
      location: 'Pune, Maharashtra, India',
      website: 'omdarshanshindepatil.com',
      linkedin: 'omdarshanshindepatil',
      github: 'Omdarshan-7001',
      bio: 'Aspiring Software Engineer specializing in Full Stack Web Development with hands-on experience in MERN stack and backend systems. Passionate about building scalable and secure applications, with growing expertise in DevOps and Machine Learning.'
    });

    // Create initial skills
    const skills = [
      {
        category: 'Programming Languages',
        items: ['JavaScript', 'Java', 'C++', 'C']
      },
      {
        category: 'Frontend Development',
        items: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design']
      },
      {
        category: 'Backend Development',
        items: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB']
      },
      {
        category: 'Blockchain & Web3',
        items: ['Ethereum', 'Solidity', 'Smart Contracts', 'DApps']
      },
      {
        category: 'Tools & Technologies',
        items: ['Git', 'Postman', 'DBMS', 'Operating Systems']
      }
    ];

    // Create initial projects
    const projects = [
      {
        title: 'Decentralized AI Model Marketplace',
        year: '2025',
        description: 'Built a blockchain-powered marketplace for secure AI model exchange, integrating smart contracts for licensing and IP protection. Enabled provenance tracking and audit trails for model transparency and integrity.',
        technologies: ['React', 'Node.js', 'Ethereum', 'Solidity', 'MongoDB'],
        achievements: ['Winner of PBL Day Competition (SEM VI)'],
        featured: true,
        status: 'completed'
      },
      {
        title: 'Evento - Event Management System',
        year: '2023',
        description: 'Developed a full-stack event registration and scheduling platform using the MERN stack. Streamlined user interaction with a dynamic React frontend and RESTful API integration.',
        technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
        achievements: ['1st Runner Up of PBL Day Competition (SEM III)'],
        featured: true,
        status: 'completed'
      }
    ];

    // Create initial experience
    const experience = [
      {
        title: 'Secretary at Pioneer 2025',
        organization: 'Indian Society for Technical Education (ISTE)',
        date: 'Feb 2025',
        description: 'Served as Secretary of Pioneer 2025, leading a core team of 19 members across 10 domains, coordinating 150+ volunteers, and managing operations for a national-level event with over 3000 participants.',
        type: 'leadership',
        current: true
      },
      {
        title: 'Technical Co-Head at Pioneer 2024',
        organization: 'Indian Society for Technical Education (ISTE)',
        date: 'Feb 2024',
        description: 'Led the design & printing operations, ensuring smooth execution of technical events.',
        type: 'leadership'
      },
      {
        title: 'Full Stack Web Development Cohort',
        organization: '100xDevs',
        date: 'May 2024',
        description: 'Completed comprehensive full-stack development training covering modern web technologies.',
        type: 'education'
      }
    ];

    // Save all data
    await profile.save();
    await Skill.insertMany(skills);
    await Project.insertMany(projects);
    await Experience.insertMany(experience);

    res.json({
      success: true,
      message: 'Portfolio data seeded successfully'
    });

  } catch (error) {
    console.error('Error seeding portfolio data:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to seed portfolio data',
      error: error.message
    });
  }
});

module.exports = router;