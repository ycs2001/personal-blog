import React from "react";
import PropTypes from "prop-types";
import ParticleText from "../components/ParticleText";
import NeonTextEffect from "../components/NeonTextEffect";
import "./About.css";

// Sub-Components

const EducationItem = ({ year, degree, institution, description }) => (
    <div className="education-card">
        <h3 className="timeline-year">{year}</h3>
        <h4 className="timeline-degree">{degree}</h4>
        <p className="timeline-institution">{institution}</p>
        <p className="timeline-description">{description}</p>
    </div>
);

EducationItem.propTypes = {
    year: PropTypes.string.isRequired,
    degree: PropTypes.string.isRequired,
    institution: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

const TimelineItem = ({ year, title, description }) => (
    <div className="timeline-item">
        <div className="timeline-content">
            <h3 className="timeline-year">{year}</h3>
            <h4 className="timeline-title">{title}</h4>
            <p className="timeline-description">{description}</p>
        </div>
    </div>
);

TimelineItem.propTypes = {
    year: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

const CertificateItem = ({ title, description, link }) => (
    <div className="certificate-item">
        <h3 className="certificate-title">{title}</h3>
        <p className="certificate-description">{description}</p>
        {link && (
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-link"
            >
                View Certificate
            </a>
        )}
    </div>
);

CertificateItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string,
};

const LanguageItem = ({ name, level }) => (
    <li className="language-item">
        <span className="language-name">{name}</span>
        <span className="language-level">{level}</span>
    </li>
);

LanguageItem.propTypes = {
    name: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
};

const PaperItem = ({ title, journal, description, link }) => (
    <div className="paper-item">
        <h3 className="paper-title">{title}</h3>
        <p className="paper-description">
            Published in <em>{journal}</em>: {description}
        </p>
        {link && (
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="paper-link"
            >
                Read Paper
            </a>
        )}
    </div>
);

PaperItem.propTypes = {
    title: PropTypes.string.isRequired,
    journal: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string,
};

const ProjectItem = ({ title, description, link }) => (
    <div className="project-grid-item">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        {link && (
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
            >
                Learn More
            </a>
        )}
    </div>
);

ProjectItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string,
};

// Data Definitions

const educationData = [
    {
        year: "2024 - Present",
        degree: "Master of Computer Science",
        institution: "University of Ottawa",
        description:
            "Focused on advanced machine learning techniques, software engineering principles, and data visualization.",
    },
    {
        year: "2020 - 2024",
        degree: "Bachelor of Software Engineering",
        institution: "Hefei University of Technology",
        description:
            "Graduated with honors, conducting research on cross-modal hashing and cooperative working visualization.",
    },
];

const timelineData = [
    {
        year: "Feb 2022 – Aug 2022",
        title: "Full-Stack Developer Intern",
        description:
            "Developed RESTful APIs with Spring Boot and built responsive UIs with Vue.js for appointment booking. Implemented role-based access for efficient booking and user management at Guochuang Software Co., Ltd., Hefei, China.",
    },
    {
        year: "Apr 2023 – Aug 2023",
        title: "Mobile Application Developer Intern",
        description:
            "Designed interactive UIs with Flutter, integrated RESTful APIs and Firebase for real-time data synchronization and user authentication, and optimized app performance using Dart at Guochuang Software Co., Ltd., Hefei, China.",
    },
    {
        year: "June 2022 – July 2024",
        title: "Research Assistant",
        description:
            "Developed data visualizations with Vue.js and D3.js, trained a deep learning model with TensorFlow for medical data retrieval, and co-authored two research papers presented at ICIG 2023 and ChineseCSCW23.",
    },
];

const projectsData = [
    {
        title: "Semi-Supervised Learning Techniques Under Label Scarcity",
        description:
            "This project focuses on investigating the application of semi-supervised learning (SSL) techniques in scenarios with label scarcity. Using the Magic Mushrooms dataset, participants will develop a supervised learning baseline with Gradient Boosting and implement four SSL approaches, including self-training, co-training, semi-supervised ensembles, and unsupervised pretraining. The project includes performance evaluation across varying ratios of labeled and unlabeled data, with metrics like accuracy, precision, and F1-score compared against the supervised baseline.",
        link: "",
    },
    {
        title: "The Minimax Algorithm and Strategic Decision-Making",
        description:
            "This report explores the Minimax algorithm, a foundational decision-making tool in game theory, particularly for two-player zero-sum games like chess and tic-tac-toe. It explains the algorithm's connection to Nash Equilibrium, its workflow, and key enhancements like alpha-beta pruning for efficiency. Applications range from board games to AI, robotics, economics, and cybersecurity, while limitations in handling imperfect information are addressed with alternatives like Expectiminimax.",
        link: "",
    },
];

const certificatesData = [
    {
        title: "Deep Learning Coursera Specialization",
        description:
            "Developed and optimized neural network architectures, including CNNs, RNNs, LSTMs, and Transformers, using Python and TensorFlow. Applied advanced techniques such as Dropout and Batch Normalization to real-world applications like speech recognition and machine translation. Gained a strong foundation in deep learning for AI development.",
        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/Y5EEJ7HZSDH9",
    },
];

const languagesData = [
    { name: "English", level: "Advanced" },
    { name: "Chinese (Mandarin)", level: "Native" },
    { name: "French", level: "Beginner" },
];

const papersData = [
    {
        title: "Deep Discriminative Hashing for Cross-Modal Hashing Based Computer-Aided Diagnosis",
        journal: "ICIG 2023",
        description:
            "Massive medical data in multi-modalities emerges with the development of modern medicine, which facilitates the construction of computer-aided diagnosis (CAD) methods. However, most existing CAD methods diagnose diseases only based on the relevant single-modal data, and thus their applications are limited in single modality. To reveal intrinsic connections between heterogeneous modalities and further build multi-modal CAD methods, a novel cross-modal hashing model named Deep Discriminative Hashing (DDH) is proposed. Specifically, semantic labels are encoded to obtain a fixed classifier for the preservation of semantic similarity. Furthermore, benefiting from the classifier, the optimization of hash functions for different modalities is regarded as a classification task that aims to further consider the improvement of discriminability with angular softmax loss. Therefore, DDH projects medical multi-modal data into the common hamming space, and performs multi-modal CAD via cross-modal retrieval. Moreover, since the encoding procedure of different modalities is decoupled, DDH can also execute single-modal CAD based on the medical image retrieval. Experimental results demonstrate the superior accuracy of DDH compared with state-of-the-arts in both medical image retrieval and cross-modal medical data retrieval tasks.",
        link: "https://link.springer.com/chapter/10.1007/978-3-031-46314-3_1",
    },
    {
        title: "How Hypergraph-to-Graph Conversion Affects Cooperative Working Visualization: A Multi-metric Evaluation",
        journal: "ChineseCSCW23",
        description:
            "It is commonplace to use hypergraphs to represent cooperative work since hypergraphs explicitly capture complex interactions and connections, enabling researchers to analyze with ease. Nonetheless, hypergraphs are usually chaotic due to sophisticated relations between vertices. Therefore, it is necessary to look into which method prevails over other methods in specific circumstances. In our study, we propose an appraisal framework in which we use six quantitative and five qualitative metrics to assess the performance of each conversion method in terms of layout quality and effectiveness. The results show that while no method is ideal for all situations, certain methods, such as Centroid-single, perform well. Researchers can use our experiment results to select the optimal method tailored to their specific dataset and circumstances. This paper serves researchers and practitioners in choosing the most suitable conversion method for their research.",
        link: "https://link.springer.com/chapter/10.1007/978-981-99-9637-7_15",
    },
];

// Main Component

const About = () => {
    return (
        <div className="about-container">
            {/* Particle Text Effect */}
            <div className="particle-container">
                <ParticleText
                    text="Welcome to my world !!!"
                    width={800}
                    height={200}
                />
            </div>

            {/* Introduction Section */}
            <section className="introduction-section">
                <h1 className="about-heading">About Me</h1>
                <p className="about-paragraph">
                    Hello! My name is <NeonTextEffect text="Chongshen Yang" />, and this is a
                    blog where I share my experiences and essays.
                </p>
                <p className="about-paragraph">
                    I am passionate about Machine Learning, Full-Stack Development, and Data
                    Visualization. I enjoy coding, solving real-world problems, and exploring
                    innovative technologies.
                </p>
                <p className="about-paragraph">
                    Feel free to explore my blog and learn more about me!
                </p>
            </section>

            {/* CV Download Section */}
            <section className="cv-section">
                <h2 className="section-heading">Download My CV</h2>
                <a
                    href="/path-to-cv.pdf"
                    download="Chongshen_Yang_CV.pdf"
                    className="cv-download-button"
                    aria-label="Download CV"
                >
                    Download CV
                </a>
            </section>

            {/* Education Section */}
            <section className="education-section">
                <h2 className="section-heading">Education</h2>
                <div className="education-container">
                    {educationData.map((edu, index) => (
                        <EducationItem
                            key={index}
                            year={edu.year}
                            degree={edu.degree}
                            institution={edu.institution}
                            description={edu.description}
                        />
                    ))}
                </div>
            </section>

            {/* Projects Section */}
            <section className="projects-section">
                <h2 className="section-heading">My Projects</h2>
                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <ProjectItem
                            key={index}
                            title={project.title}
                            description={project.description}
                            link={project.link}
                        />
                    ))}
                </div>
            </section>

            {/* Certificates Section */}
            <section className="certificates-section">
                <h2 className="section-heading">Certificates</h2>
                <div className="certificates-grid">
                    {certificatesData.map((certificate, index) => (
                        <CertificateItem
                            key={index}
                            title={certificate.title}
                            description={certificate.description}
                            link={certificate.link}
                        />
                    ))}
                </div>
            </section>

            {/* Languages Section */}
            <section className="languages-section">
                <h2 className="section-heading">Language Skills</h2>
                <ul className="languages-list">
                    {languagesData.map((language, index) => (
                        <LanguageItem
                            key={index}
                            name={language.name}
                            level={language.level}
                        />
                    ))}
                </ul>
            </section>

            {/* Timeline Section */}
            <section className="timeline-section">
                <h2 className="section-heading">My Journey</h2>
                <div className="timeline-items">
                    {timelineData.map((item, index) => (
                        <TimelineItem
                            key={index}
                            year={item.year}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            </section>

            {/* Papers Section */}
            <section className="papers-section">
                <h2 className="section-heading">My Publications</h2>
                <div className="papers-grid">
                    {papersData.map((paper, index) => (
                        <PaperItem
                            key={index}
                            title={paper.title}
                            journal={paper.journal}
                            description={paper.description}
                            link={paper.link}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;
