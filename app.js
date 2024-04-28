const express = require('express');
const mongoose = require('mongoose');
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
const commentsRouter = require('./routes/comments');

const app = express();
const port = 3000;

// Connect to MongoDB
require('./db');

app.use(express.json());

// Use the routers
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/comments', commentsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
