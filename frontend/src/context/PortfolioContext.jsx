// src/context/PortfolioContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const PortfolioContext = createContext();

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};

export const PortfolioProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [portfolioData, setPortfolioData] = useState({
    profile: {
      name: 'Omdarshan Uttam Shindepatil',
      title: 'Full Stack Developer | MERN Stack Specialist',
      email: 'omdarshanpatil@gmail.com',
      phone: '+91 9359037001',
      location: 'Pune, Maharashtra, India',
      website: 'omdarshanshindepatil.com',
      linkedin: 'omdarshanshindepatil',
      github: 'Omdarshan-7001',
      profileImage: null,
      resume: null,
      bio: `Aspiring Software Engineer specializing in Full Stack Web Development with hands-on experience in MERN stack and backend systems. Passionate about building scalable and secure applications, with growing expertise in DevOps and Machine Learning.`
    },
    skills: [
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
        category: 'Tools & Technologies',
        items: ['Git', 'Postman', 'DBMS', 'Operating Systems']
      }
    ],
    projects: [
      {
        id: 1,
        title: 'Decentralized AI Model Marketplace',
        year: '2025',
        description: 'Built a blockchain-powered marketplace for secure AI model exchange, integrating smart contracts for licensing and IP protection. Enabled provenance tracking and audit trails for model transparency and integrity.',
        technologies: ['React', 'Node.js', 'Ethereum', 'Solidity', 'MongoDB'],
        github: '',
        demo: '',
        image: null,
        achievements: ['Winner of PBL Day Competition (SEM VI)']
      },
      {
        id: 2,
        title: 'Evento - Event Management System',
        year: '2023',
        description: 'Developed a full-stack event registration and scheduling platform using the MERN stack. Streamlined user interaction with a dynamic React frontend and RESTful API integration.',
        technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
        github: '',
        demo: '',
        image: null,
        achievements: ['1st Runner Up of PBL Day Competition (SEM III)']
      }
    ],
    experience: [
      {
        id: 1,
        title: 'Secretary at Pioneer 2025',
        organization: 'Indian Society for Technical Education (ISTE)',
        date: 'Feb 2025',
        description: 'Served as Secretary of Pioneer 2025, leading a core team of 19 members across 10 domains, coordinating 150+ volunteers, and managing operations for a national-level event with over 3000 participants.',
        type: 'leadership'
      },
      {
        id: 2,
        title: 'Technical Co-Head at Pioneer 2024',
        organization: 'Indian Society for Technical Education (ISTE)',
        date: 'Feb 2024',
        description: 'Led the design & printing operations, ensuring smooth execution of technical events.',
        type: 'leadership'
      },
      {
        id: 3,
        title: 'Full Stack Web Development Cohort',
        organization: '100xDevs',
        date: 'May 2024',
        description: 'Completed comprehensive full-stack development training covering modern web technologies.',
        type: 'education'
      }
    ],
    gallery: [
      {
        id: 1,
        title: 'Pioneer 2025 - Secretary',
        description: 'Leading the core team at Pioneer 2025',
        image: null,
        category: 'leadership'
      },
      {
        id: 2,
        title: 'PBL Day Winner',
        description: 'Winning moment at PBL Day Competition',
        image: null,
        category: 'achievements'
      },
      {
        id: 3,
        title: 'Technical Team',
        description: 'Working with the technical team',
        image: null,
        category: 'team'
      }
    ]
  });

  // API base URL
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

  // Fetch portfolio data from backend
  const fetchPortfolioData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/portfolio`);
      if (response.data.success) {
        setPortfolioData(prev => ({ ...prev, ...response.data.data }));
      }
    } catch (err) {
      setError('Failed to fetch portfolio data');
      console.error('Error fetching portfolio data:', err);
    } finally {
      setLoading(false);
    }
  };

  // Upload file (profile image, resume, gallery images)
  const uploadFile = async (file, type) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('file', file);
      formData.append('type', type);

      const response = await axios.post(`${API_URL}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.data.success) {
        return response.data.data;
      }
      throw new Error(response.data.message || 'Upload failed');
    } catch (err) {
      setError('Failed to upload file');
      console.error('Error uploading file:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Update profile data
  const updateProfile = async (profileData) => {
    try {
      setLoading(true);
      const response = await axios.put(`${API_URL}/profile`, profileData);
      
      if (response.data.success) {
        setPortfolioData(prev => ({
          ...prev,
          profile: { ...prev.profile, ...response.data.data }
        }));
        return response.data.data;
      }
      throw new Error(response.data.message || 'Update failed');
    } catch (err) {
      setError('Failed to update profile');
      console.error('Error updating profile:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Add project
  const addProject = async (projectData) => {
    try {
      setLoading(true);
      const response = await axios.post(`${API_URL}/projects`, projectData);
      
      if (response.data.success) {
        setPortfolioData(prev => ({
          ...prev,
          projects: [...prev.projects, response.data.data]
        }));
        return response.data.data;
      }
      throw new Error(response.data.message || 'Failed to add project');
    } catch (err) {
      setError('Failed to add project');
      console.error('Error adding project:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Add gallery item
  const addGalleryItem = async (galleryData) => {
    try {
      setLoading(true);
      const response = await axios.post(`${API_URL}/gallery`, galleryData);
      
      if (response.data.success) {
        setPortfolioData(prev => ({
          ...prev,
          gallery: [...prev.gallery, response.data.data]
        }));
        return response.data.data;
      }
      throw new Error(response.data.message || 'Failed to add gallery item');
    } catch (err) {
      setError('Failed to add gallery item');
      console.error('Error adding gallery item:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Send contact message
  const sendMessage = async (messageData) => {
    try {
      setLoading(true);
      const response = await axios.post(`${API_URL}/contact`, messageData);
      
      if (response.data.success) {
        return response.data.message;
      }
      throw new Error(response.data.message || 'Failed to send message');
    } catch (err) {
      setError('Failed to send message');
      console.error('Error sending message:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Clear error
  const clearError = () => setError(null);

  useEffect(() => {
    fetchPortfolioData();
  }, []);

  const value = {
    portfolioData,
    loading,
    error,
    uploadFile,
    updateProfile,
    addProject,
    addGalleryItem,
    sendMessage,
    clearError,
    fetchPortfolioData
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};



