import React, { useState } from 'react';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css'; // Import the CSS for SimpleMDE
import { addPost } from '../utils/utils';
import './AddEssay.css';

const AddEssay = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addPost(title, content); // Submit the title and markdown content
        setTitle('');
        setContent('');
        alert('Essay added successfully!');
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
            </form>
        </div>

    );
};

export default AddEssay;
