// backend/routes/profile.js
const express = require('express');
const router = express.Router();
const { Profile } = require('../models/Portfolio');

// GET /api/profile - Get profile data
router.get('/', async (req, res) => {
  try {
    const profile = await Profile.findOne().sort({ createdAt: -1 });
    res.json({
      success: true,
      data: profile || {}
    });
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch profile',
      error: error.message
    });
  }
});

// PUT /api/profile - Update profile data
router.put('/', async (req, res) => {
  try {
    const profileData = req.body;
    
    let profile = await Profile.findOne();
    
    if (profile) {
      // Update existing profile
      Object.assign(profile, profileData);
      await profile.save();
    } else {
      // Create new profile
      profile = new Profile(profileData);
      await profile.save();
    }

    res.json({
      success: true,
      message: 'Profile updated successfully',
      data: profile
    });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update profile',
      error: error.message
    });
  }
});

module.exports = router;