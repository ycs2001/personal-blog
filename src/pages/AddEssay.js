import React, { useState } from 'react';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css'; // Import the CSS for SimpleMDE
import { addPost } from '../utils/utils';
import './AddEssay.css';

const AddEssay = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage('');
        setErrorMessage('');
        try {
            await addPost(title, content); // Submit the title and markdown content
            setTitle('');
            setContent('');
            setSuccessMessage('Essay added successfully!');
        } catch (error) {
            setErrorMessage('Failed to add essay. Please try again.');
        }
    };

    return (
        <div className="add-essay-container">
            <h1 className="add-essay-title">Add New Essay</h1>
            <form className="add-essay-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        className="form-control"
                        placeholder="Enter essay title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Content</label>
                    <SimpleMDE
                        value={content}
                        onChange={setContent}
                        options={{
                            spellChecker: false,
                            placeholder: "Write your essay here...",
                            toolbar: ["bold", "italic", "heading", "|", "quote", "code", "unordered-list", "ordered-list", "|", "preview", "guide"],
                        }}
                    />
                </div>
                <button type="submit" className="btn-submit">
                    Submit
                </button>
                {successMessage && <p className="success-message">{successMessage}</p>}
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
        </div>

    );
};

export default AddEssay;
