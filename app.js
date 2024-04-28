require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const usersRouter = require('./routes/users.js');
const postsRouter = require('./routes/posts.js');
const commentsRouter = require('./routes/comments.js');

const app = express();
const PORT =  process.env.PORT || 3000;

// Connect to MongoDB
require('./db.js');

app.use(express.json());

// Use the routers
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/comments', commentsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${port}`);
});
