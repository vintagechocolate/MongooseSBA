const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment.js');
const User = require('../models/User.js');
const Post = require('../models/Post.js');

// GET all comments
router.get('/', async (req, res) => {
  try {
    const comments = await Comment.find().populate('author', 'name').populate('post', 'title');
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// CREATE a new comment
router.post('/', async (req, res) => {
  const comment = new Comment({
    content: req.body.content,
    author: req.body.authorId,
    post: req.body.postId,
  });

  try {
    const newComment = await comment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// UPDATE a comment
router.patch('/:id', async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      return res.status(404).json({ message: 'Cannot find comment' });
    }

    if (req.body.content) comment.content = req.body.content;
    if (req.body.authorId) comment.author = req.body.authorId;
    if (req.body.postId) comment.post = req.body.postId;
    comment.updatedAt = Date.now();

    const updatedComment = await comment.save();
    res.json(updatedComment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a comment
router.delete('/:id', async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      return res.status(404).json({ message: 'Cannot find comment' });
    }

    await comment.remove();
    res.json({ message: 'Deleted comment' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
