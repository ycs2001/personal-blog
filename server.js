const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(express.json());

app.use(
    cors({
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
        credentials: true,
    })
);

// File for storing blog posts
const DATA_FILE = path.join(__dirname, 'data', 'posts.json');

// Load posts from file, fallback to empty array
const loadPosts = () => {
    try {
        const data = fs.readFileSync(DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error loading posts:', err.message);
        return [];
    }
};

// Persistent blog posts
let blogPosts = loadPosts();

// Save posts to file
const savePosts = () => {
    // Ensure the data directory exists
    fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
    fs.writeFile(DATA_FILE, JSON.stringify(blogPosts, null, 2), 'utf8', (err) => {
        if (err) {
            console.error('Error saving posts:', err.message);
        }
    });
};

app.get('/api/posts', (req, res) => {
    console.log('Server-side blog posts:', JSON.stringify(blogPosts, null, 2)); // Log for debugging
    res.setHeader('Content-Type', 'application/json; charset=utf-8'); // Ensure UTF-8 encoding
    res.status(200).json(blogPosts);
});

// Test endpoint
app.get('/api/test', (req, res) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.status(200).json([{ id: 1, title: 'Test', content: 'Hello 😊🚀' }]);
});

app.post('/api/posts', (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ error: 'Title and content are required.' });
    }

    const newPost = { id: blogPosts.length + 1, title, content };
    blogPosts.push(newPost);
    savePosts();

    console.log('New post added:', newPost); // Log for debugging
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.status(201).json(newPost);
});

app.use((req, res, next) => {
    res.status(404).json({ error: 'Endpoint not found.' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong. Please try again later.' });
});

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
