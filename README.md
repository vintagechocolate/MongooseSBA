# Server Application with Node, Express, and MongoDB

This is a server application built using Node.js, Express, and MongoDB. It provides a CRUD (Create, Read, Update, Delete) API for managing users, posts, and comments.

## API Routes

### Users

- `GET /users`: Get all users
- `POST /users`: Create a new user
- `PATCH /users/:id`: Update a user
- `DELETE /users/:id`: Delete a user

### Posts

- `GET /posts`: Get all posts
- `POST /posts`: Create a new post
- `PATCH /posts/:id`: Update a post
- `DELETE /posts/:id`: Delete a post

### Comments

- `GET /comments`: Get all comments
- `POST /comments`: Create a new comment
- `PATCH /comments/:id`: Update a comment
- `DELETE /comments/:id`: Delete a comment

## MongoDB Indexing and Validation

- The `email` field in the `User` model is indexed to improve query performance.
- The `email` field in the `User` model is validated using a regular expression to ensure a valid email format.
- The `password` field in the `User` model is validated to ensure a minimum length of 8 characters.

## Database Seeding

The `seed.js` file is used to populate the database with sample data, including users, posts, and comments.