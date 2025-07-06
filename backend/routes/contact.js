// backend/routes/contact.js
const express = require('express');
const router = express.Router();
const { Contact } = require('../models/Portfolio');
const nodemailer = require('nodemailer'); // Optional: for email notifications

// GET /api/contact - Get all contact messages (for admin)
router.get('/', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      data: messages
    });
  } catch (error) {
    console.error('Error fetching contact messages:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contact messages',
      error: error.message
    });
  }
});

// POST /api/contact - Send new contact message
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required'
      });
    }
    
    // Create new contact message
    const contactMessage = new Contact({
      name,
      email,
      subject: subject || 'Portfolio Contact',
      message
    });
    
    await contactMessage.save();
    
    // Optional: Send email notification to yourself
    // You can configure nodemailer here if needed
    
    res.status(201).json({
      success: true,
      message: 'Message sent successfully! I will get back to you soon.',
      data: contactMessage
    });
  } catch (error) {
    console.error('Error sending contact message:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message',
      error: error.message
    });
  }
});

// PUT /api/contact/:id/read - Mark message as read
router.put('/:id/read', async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    );
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Message not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Message marked as read',
      data: contact
    });
  } catch (error) {
    console.error('Error marking message as read:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to mark message as read',
      error: error.message
    });
  }
});

// DELETE /api/contact/:id - Delete contact message
router.delete('/:id', async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Message not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Message deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting message:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete message',
      error: error.message
    });
  }
});

module.exports = router;
