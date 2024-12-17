import React from "react";
import "./Home.css";
import ParticleText from "../components/ParticleText"; // Optional for a dynamic effect

const Home = () => {
    return (
        <div className="home-container">
            {/*<ParticleText text="Welcome to My World" width={800} height={200} />*/}
            {/* Hero Section */}
            <section className="hero-section">

                <h1>Hi, I'm Chongshen Yang</h1>
                <p>
                    A passionate software developer, researcher, and lifelong learner.
                    Explore my thoughts, projects, and achievements below.
                </p>

            </section>

            {/* Highlights Section */}
            <section className="highlights-section">
                <h2>Highlights</h2>
                <div className="highlight-grid">
                    <div className="highlight-card">
                        <h3>About Me</h3>
                        <p>Learn more about my journey, skills, and achievements.</p>
                        <a href="/about" className="highlight-link">Go to About</a>
                    </div>
                    <div className="highlight-card">
                        <h3>Blog</h3>
                        <p>Read my latest essays and thoughts on technology and life.</p>
                        <a href="/blog" className="highlight-link">Go to Blog</a>
                    </div>
                    <div className="highlight-card">
                        <h3>Projects</h3>
                        <p>Explore the innovative projects I've worked on.</p>
                        <a href="/projects" className="highlight-link">Go to Projects</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
