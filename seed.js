// const User = require('./models/User.js');
// const Post = require('./models/Post.js');
// const Comment = require('./models/Comment.js');

// const users = [
//   { name: 'John Doe', email: 'john@example.com', password: 'password123' },
//   { name: 'Jane Smith', email: 'jane@example.com', password: 'password456' },
//   { name: 'Bob Johnson', email: 'bob@example.com', password: 'password789' },
// ];

// const posts = [
//   { title: 'My First Post', content: 'This is the content of my first post.', author: users[0]._id },
//   { title: 'Exploring the City', content: 'I went on a walk around the city today.', author: users[1]._id },
//   { title: 'Coding Challenges', content: 'I solved some interesting coding problems today.', author: users[2]._id },
// ];

// const comments = [
//   { content: 'Great post!', author: users[0]._id, post: posts[0]._id },
//   { content: 'I enjoyed reading this.', author: users[1]._id, post: posts[1]._id },
//   { content: 'Nice work on the coding challenges.', author: users[2]._id, post: posts[2]._id },
// ];

// async function seedDatabase() {
//   try {
//     await User.deleteMany({});
//     await Post.deleteMany({});
//     await Comment.deleteMany({});

//     await User.insertMany(users);
//     await Post.insertMany(posts);
//     await Comment.insertMany(comments);

//     console.log('Database seeded successfully!');
//   } catch (err) {
//     console.error('Error seeding database:', err);
//   }
// }

// seedDatabase();
