// backend/utils/validators.js
const validator = require('validator');

const validateEmail = (email) => {
  return validator.isEmail(email);
};

const validatePhone = (phone) => {
  // Basic phone validation - adjust regex as needed
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone);
};

const validateURL = (url) => {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};

const sanitizeString = (str) => {
  return validator.escape(str.trim());
};

const validateProject = (projectData) => {
  const errors = [];
  
  if (!projectData.title || projectData.title.trim().length < 3) {
    errors.push('Title must be at least 3 characters long');
  }
  
  if (!projectData.description || projectData.description.trim().length < 10) {
    errors.push('Description must be at least 10 characters long');
  }
  
  if (!projectData.technologies || !Array.isArray(projectData.technologies) || projectData.technologies.length === 0) {
    errors.push('At least one technology must be specified');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

const validateContact = (contactData) => {
  const errors = [];
  
  if (!contactData.name || contactData.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }
  
  if (!contactData.email || !validateEmail(contactData.email)) {
    errors.push('Valid email is required');
  }
  
  if (!contactData.message || contactData.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

module.exports = {
  validateEmail,
  validatePhone,
  validateURL,
  sanitizeString,
  validateProject,
  validateContact
};