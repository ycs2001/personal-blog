import React from "react";
import "./Life.css";

const events = [
    {
        image: `${process.env.PUBLIC_URL}/photos/aurora.png`,
        title: "My first encounter with",
        description: "The soft glow of the aurora contrasts with the surrounding dark sky dotted with visible stars.",
        date: "Nov 10, 2024",
    },
    {
        image: `${process.env.PUBLIC_URL}/photos/MountHermon.png`,
        title: "Peaceful trail in forest",
        description: "The sunlight filtering through the trees creating a foggy atmosphere.",
        date: "Oct 15, 2024",
    },
    {
        image: `${process.env.PUBLIC_URL}/photos/gatineauFountain.png`,
        title: "Hiking Adventure",
        description: "under golden trees in twilight lean, I found a dream of forest. Here, time itself begins to slow in autumn's tender and fleeting show.",
        date: "Oct 2, 2024",
    },
    {
        image: `${process.env.PUBLIC_URL}/photos/winter.png`,
        title: "First winter in Ottawa",
        description: "I like the winter in Ottawa.",
        date: "Dec 20, 2024",
    },
];



const Life = () => {
    return (
        <div className="life-container">
            {/* Hero Section */}
            <div className="hero-section">
                <h1>My Recent Life</h1>
                <p>Here are some snapshots and moments from my recent adventures and experiences.</p>
            </div>

            {/* Gallery Section */}
            <section className="gallery-section">
                <div className="gallery-grid">
                    {events.map((event, index) => (
                        <div className="gallery-item" key={index}>
                            <img src={event.image} alt={event.title} className="gallery-image" />
                            <div className="gallery-info">
                                <h3>{event.title}</h3>
                                <p>{event.description}</p>
                                <span>{event.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Life;
