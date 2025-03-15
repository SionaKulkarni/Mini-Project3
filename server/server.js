const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:4200",
    methods: ["GET", "POST"]
  }
});

app.use(cors());

// Simulated feed data
let posts = [
  { id: 1, content: "Hello World!", likes: 5, comments: ["Nice post!", "I agree!"] },
  { id: 2, content: "This is a cool app!", likes: 3, comments: [] }
];

io.on('connection', (socket) => {
  console.log('A user connected');

  // Send initial posts
  socket.emit('feed', posts);

  // Handle new post
  socket.on('newPost', (post) => {
    posts.push(post);
    io.emit('feed', posts);
  });

  // Handle likes
  socket.on('likePost', (postId) => {
    const post = posts.find(p => p.id === postId);
    if (post) {
      post.likes++;
      io.emit('feed', posts);
    }
  });

  // Handle comments
  socket.on('commentOnPost', (data) => {
    const post = posts.find(p => p.id === data.postId);
    if (post) {
      post.comments.push(data.comment);
      io.emit('feed', posts);
    }
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
