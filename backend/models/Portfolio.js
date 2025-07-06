// backend/models/Portfolio.js
const mongoose = require('mongoose');

// Profile Schema
const ProfileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: 'Omdarshan Uttam Shindepatil'
  },
  title: {
    type: String,
    default: 'Full Stack Developer | MERN Stack Specialist'
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: String,
  location: String,
  website: String,
  linkedin: String,
  github: String,
  profileImage: String,
  resume: String,
  bio: {
    type: String,
    maxlength: 1000
  }
}, {
  timestamps: true
});

// Skills Schema
const SkillSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  items: [{
    type: String,
    required: true
  }]
}, {
  timestamps: true
});

// Projects Schema
const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  year: String,
  description: {
    type: String,
    required: true,
    maxlength: 2000
  },
  technologies: [{
    type: String,
    required: true
  }],
  github: String,
  demo: String,
  image: String,
  achievements: [String],
  featured: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    enum: ['completed', 'in-progress', 'planned'],
    default: 'completed'
  }
}, {
  timestamps: true
});

// Experience Schema
const ExperienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  organization: {
    type: String,
    required: true
  },
  date: String,
  description: {
    type: String,
    maxlength: 1000
  },
  type: {
    type: String,
    enum: ['work', 'education', 'leadership', 'volunteer'],
    default: 'work'
  },
  current: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Gallery Schema
const GallerySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['achievements', 'leadership', 'team', 'events', 'projects'],
    default: 'achievements'
  },
  date: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Contact Messages Schema
const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  subject: String,
  message: {
    type: String,
    required: true,
    maxlength: 2000
  },
  read: {
    type: Boolean,
    default: false
  },
  replied: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Create models
const Profile = mongoose.model('Profile', ProfileSchema);
const Skill = mongoose.model('Skill', SkillSchema);
const Project = mongoose.model('Project', ProjectSchema);
const Experience = mongoose.model('Experience', ExperienceSchema);
const Gallery = mongoose.model('Gallery', GallerySchema);
const Contact = mongoose.model('Contact', ContactSchema);

module.exports = {
  Profile,
  Skill,
  Project,
  Experience,
  Gallery,
  Contact
};