import React, { useEffect, useState } from "react";
import { fetchPosts } from "../utils/utils";
import ReactMarkdown from "react-markdown"; // For rendering Markdown
import './Blog.css';

const Blog = () => {
    const [posts, setPosts] = useState([]); // State for blog posts
    const [loading, setLoading] = useState(false); // Loading state
    const [error, setError] = useState(""); // Error state

    useEffect(() => {
        const getPosts = async () => {
            setLoading(true);
            try {
                const data = await fetchPosts();
                setPosts(data);
            } catch (err) {
                setError("Failed to fetch posts. Please try again later.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        getPosts();
    }, []);

    return (
        <div className="blog-container">
            <h1 className="blog-heading">Blog</h1>

            {/* Show loading or error messages */}
            {loading && <div className="spinner">Loading...</div>}
            {error && <div className="error-message">{error}</div>}

            {/* Render blog posts */}
            <div className="posts-container">
                {posts.map((post) => (
                    <div className="post-item" key={post.id}>
                        <h2 className="post-title">{post.title}</h2>
                        <ReactMarkdown className="post-content">{post.content}</ReactMarkdown>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
