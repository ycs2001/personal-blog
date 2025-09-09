import axios from 'axios';

// Base API URL, configurable via environment variable
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/api';

// Axios instance for reusable configuration
const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 5000, // Set a timeout of 5 seconds
});

// Fetch all posts
export const fetchPosts = async () => {
    try {
        const response = await apiClient.get('/posts');
        return response.data; // Return the data from the response
    } catch (err) {
        console.error('Error fetching posts:', err.message);
        return []; // Return an empty array on error
    }
};

// Add a new post
export const addPost = async (title, content) => {
    try {
        const response = await apiClient.post('/posts', { title, content });
        return response.data; // Return the created post data
    } catch (err) {
        console.error('Error adding post:', err.message);
        throw err; // Throw the error to handle it in the calling function
    }
};
