// backend/routes/gallery.js
const express = require('express');
const router = express.Router();
const { Gallery } = require('../models/Portfolio');

// GET /api/gallery - Get all gallery items
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {};
    
    const galleryItems = await Gallery.find(filter).sort({ createdAt: -1 });
    res.json({
      success: true,
      data: galleryItems
    });
  } catch (error) {
    console.error('Error fetching gallery items:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch gallery items',
      error: error.message
    });
  }
});

// POST /api/gallery - Add new gallery item
router.post('/', async (req, res) => {
  try {
    const galleryItem = new Gallery(req.body);
    await galleryItem.save();
    
    res.status(201).json({
      success: true,
      message: 'Gallery item added successfully',
      data: galleryItem
    });
  } catch (error) {
    console.error('Error adding gallery item:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to add gallery item',
      error: error.message
    });
  }
});

// PUT /api/gallery/:id - Update gallery item
router.put('/:id', async (req, res) => {
  try {
    const galleryItem = await Gallery.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!galleryItem) {
      return res.status(404).json({
        success: false,
        message: 'Gallery item not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Gallery item updated successfully',
      data: galleryItem
    });
  } catch (error) {
    console.error('Error updating gallery item:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update gallery item',
      error: error.message
    });
  }
});

// DELETE /api/gallery/:id - Delete gallery item
router.delete('/:id', async (req, res) => {
  try {
    const galleryItem = await Gallery.findByIdAndDelete(req.params.id);
    
    if (!galleryItem) {
      return res.status(404).json({
        success: false,
        message: 'Gallery item not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Gallery item deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting gallery item:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete gallery item',
      error: error.message
    });
  }
});

module.exports = router;