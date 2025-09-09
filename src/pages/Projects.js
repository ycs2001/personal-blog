import React from "react";
import "./Projects.css";

const projectsData = [
    {
        title: "Semi-Supervised Learning Techniques Under Label Scarcity",
        description:
            "Investigates semi-supervised learning methods when labeled data is limited, comparing self-training, co-training, ensembles, and unsupervised pretraining against a supervised baseline.",
        link: "",
    },
    {
        title: "The Minimax Algorithm and Strategic Decision-Making",
        description:
            "Explores the Minimax algorithm for optimal play in two-player games, detailing alpha-beta pruning and applications across AI, economics, and cybersecurity.",
        link: "",
    },
];

const Projects = () => {
    return (
        <div className="projects-section">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <div key={index} className="project-grid-item">
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                Learn More
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;

