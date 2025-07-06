// backend/scripts/seed.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { Profile, Skill, Project, Experience, Gallery } = require('../models/Portfolio');

dotenv.config();

const seedData = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/omdarshan_portfolio');
    console.log('Connected to MongoDB');

    // Clear existing data
    await Promise.all([
      Profile.deleteMany({}),
      Skill.deleteMany({}),
      Project.deleteMany({}),
      Experience.deleteMany({}),
      Gallery.deleteMany({})
    ]);
    console.log('Cleared existing data');

    // Create Profile
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
    await profile.save();
    console.log('Profile created');

    // Create Skills
    const skills = [
      {
        category: 'Programming Languages',
        items: ['JavaScript', 'Java', 'C++', 'C', 'Python']
      },
      {
        category: 'Frontend Development',
        items: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design', 'Framer Motion']
      },
      {
        category: 'Backend Development',
        items: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'Mongoose']
      },
      {
        category: 'Blockchain & Web3',
        items: ['Ethereum', 'Solidity', 'Smart Contracts', 'DApps', 'Web3.js']
      },
      {
        category: 'Tools & Technologies',
        items: ['Git', 'GitHub', 'Postman', 'VS Code', 'MongoDB Compass', 'Figma']
      },
      {
        category: 'Database',
        items: ['MongoDB', 'MySQL', 'Database Design', 'Aggregation Pipeline']
      }
    ];
    await Skill.insertMany(skills);
    console.log('Skills created');

    // Create Projects
    const projects = [
      {
        title: 'Decentralized AI Model Marketplace',
        year: '2025',
        description: 'Built a blockchain-powered marketplace for secure AI model exchange, integrating smart contracts for licensing and IP protection. Enabled provenance tracking and audit trails for model transparency and integrity. The platform allows AI researchers and developers to securely trade, license, and verify AI models using blockchain technology.',
        technologies: ['React', 'Node.js', 'Ethereum', 'Solidity', 'MongoDB', 'Web3.js', 'Tailwind CSS'],
        github: 'https://github.com/Omdarshan-7001/ai-marketplace',
        demo: '',
        achievements: ['Winner of PBL Day Competition (SEM VI)', 'Best Innovation Award'],
        featured: true,
        status: 'completed'
      },
      {
        title: 'Evento - Event Management System',
        year: '2023',
        description: 'Developed a comprehensive full-stack event registration and scheduling platform using the MERN stack. Features include user authentication, event creation, booking management, payment integration, and real-time notifications. Streamlined user interaction with a dynamic React frontend and robust RESTful API integration.',
        technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'JWT Authentication', 'Payment Gateway'],
        github: 'https://github.com/Omdarshan-7001/evento',
        demo: '',
        achievements: ['1st Runner Up of PBL Day Competition (SEM III)', 'Best User Experience Design'],
        featured: true,
        status: 'completed'
      },
      {
        title: 'Portfolio Website v2',
        year: '2025',
        description: 'Modern, responsive portfolio website built with MERN stack featuring dynamic content management, file uploads, contact form, and admin dashboard. Includes advanced animations, SEO optimization, and mobile-first design approach.',
        technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Framer Motion'],
        github: 'https://github.com/Omdarshan-7001/portfolio-v2',
        demo: 'https://omdarshanshindepatil.com',
        achievements: [],
        featured: false,
        status: 'completed'
      }
    ];
    await Project.insertMany(projects);
    console.log('Projects created');

    // Create Experience
    const experience = [
      {
        title: 'Secretary at Pioneer 2025',
        organization: 'Indian Society for Technical Education (ISTE)',
        date: 'Feb 2025',
        description: 'Served as Secretary of Pioneer 2025, leading a core team of 19 members across 10 domains, coordinating 150+ volunteers, and managing operations for a national-level event with over 3000 participants. Responsible for strategic planning, team coordination, and ensuring smooth execution of technical events.',
        type: 'leadership',
        current: true
      },
      {
        title: 'Technical Co-Head at Pioneer 2024',
        organization: 'Indian Society for Technical Education (ISTE)',
        date: 'Feb 2024',
        description: 'Led the design & printing operations team, ensuring smooth execution of technical events. Managed graphic design requirements, promotional materials, and coordinated with vendors for event collaterals.',
        type: 'leadership',
        current: false
      },
      {
        title: 'Full Stack Web Development Cohort',
        organization: '100xDevs',
        date: 'May 2024 - Oct 2024',
        description: 'Completed comprehensive full-stack development training covering modern web technologies including React, Node.js, MongoDB, and system design. Gained hands-on experience in building scalable web applications.',
        type: 'education',
        current: false
      },
      {
        title: 'Web Development Intern',
        organization: 'TechCorp Solutions',
        date: 'Jun 2023 - Aug 2023',
        description: 'Worked on frontend development projects using React.js and contributed to building responsive web applications. Gained experience in version control, code reviews, and agile development practices.',
        type: 'work',
        current: false
      }
    ];
    await Experience.insertMany(experience);
    console.log('Experience created');

    // Create Gallery items
    const gallery = [
      {
        title: 'Pioneer 2025 - Secretary Recognition',
        description: 'Being recognized as Secretary of Pioneer 2025, the flagship event of ISTE',
        image: '/uploads/gallery/pioneer-secretary.jpg',
        category: 'leadership',
        date: new Date('2025-02-15')
      },
      {
        title: 'PBL Day Winner - AI Marketplace',
        description: 'Winning moment at PBL Day Competition with Decentralized AI Model Marketplace project',
        image: '/uploads/gallery/pbl-winner-ai.jpg',
        category: 'achievements',
        date: new Date('2025-01-20')
      },
      {
        title: 'Evento - Runner Up Achievement',
        description: 'Securing 1st Runner Up position with Evento project at PBL Day Competition',
        image: '/uploads/gallery/evento-runner-up.jpg',
        category: 'achievements',
        date: new Date('2023-11-15')
      },
      {
        title: 'Technical Team Collaboration',
        description: 'Working with the technical team during Pioneer 2024 event preparations',
        image: '/uploads/gallery/tech-team.jpg',
        category: 'team',
        date: new Date('2024-02-10')
      },
      {
        title: '100xDevs Cohort Completion',
        description: 'Successfully completing the intensive Full Stack Development cohort',
        image: '/uploads/gallery/100xdevs-completion.jpg',
        category: 'achievements',
        date: new Date('2024-10-30')
      },
      {
        title: 'Pioneer 2025 Core Team',
        description: 'Core team meeting and planning session for Pioneer 2025',
        image: '/uploads/gallery/pioneer-core-team.jpg',
        category: 'team',
        date: new Date('2024-12-15')
      }
    ];
    await Gallery.insertMany(gallery);
    console.log('Gallery items created');

    console.log('✅ Database seeded successfully!');
    console.log('📊 Data Summary:');
    console.log(`   - Profile: 1 record`);
    console.log(`   - Skills: ${skills.length} categories`);
    console.log(`   - Projects: ${projects.length} records`);
    console.log(`   - Experience: ${experience.length} records`);
    console.log(`   - Gallery: ${gallery.length} records`);

  } catch (error) {
    console.error('❌ Error seeding database:', error);
  } finally {
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
    process.exit(0);
  }
};

// Run the seed function
seedData();