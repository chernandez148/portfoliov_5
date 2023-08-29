import React, { useState, useEffect } from 'react';

import './styles.css';

function Projects() {
    const [showSection, setShowSection] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const projectsSection = document.querySelector('.Projects');

            // Get the position and dimensions of the .Projects element relative to the viewport
            const rect = projectsSection.getBoundingClientRect();

            // Check if the element is at least partially visible in the viewport
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                setShowSection(true);
            } else {
                setShowSection(false);
            }
        };

        // Add the event listener for the scroll event
        window.addEventListener('scroll', handleScroll);

        // Clean up by removing the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const projectsInfo = [
        {
            year: "2023",
            name: "Project Callestrae",
            skills: ["React.Js", "Recoil", "Tailwind", "Python", "Flask"],
            description: "RPG game demo that allows users to craft personalized characters and embark on adventures within a vibrant game world.",
            github: "https://github.com/chernandez148/demo_game_v2",
            demo: "https://demo-game-v2.onrender.com/",
        },
        {
            year: "2023",
            name: "Job Huntr",
            skills: ["React.Js", "Redux", "Python", "Flask"],
            description: "A user-friendly job search site designed to streamline the job hunting process and provide a convenient platform for finding and saving job opportunities.",
            github: "https://github.com/chernandez148/job_huntr_v2",
            demo: "https://www.youtube.com/watch?v=aVQnZydey3Y",
        },
        {
            year: "2023",
            name: "Job Huntr for Android",
            skills: ["React Native", "Redux", "Python", "Flask"],
            description: "A user-friendly job search application designed to streamline the job hunting process and provide a convenient platform for finding and saving job opportunities.",
            github: "https://github.com/henryyun1996/Job-Huntr-RN",
            demo: "https://www.youtube.com/watch?v=VfE-oCTn1Ng",
        },
        {
            year: "2022",
            name: "Zen Trivia",
            skills: ["JavaScript", "Bootstrap", "API"],
            description: "A two-partner collaboration that allows users to stimulate their minds and customize their trivia experience.",
            github: "https://github.com/chernandez148/react-trivia",
            demo: "https://www.youtube.com/watch?v=--edcn5r91I",
        }
    ];

    return (
        <section className={`Projects ${showSection ? 'show' : ''}`}>
            <h2>My Projects</h2>
            <div className='projects-wrapper'>
                {projectsInfo.map((info, index) => (
                    <div className='project-card' key={index}>
                        <span>{info.year}</span>
                        <h4>{info.name}</h4>
                        <p>{info.description}</p>
                        <div className='link-wrapper'>
                            <a href={info.github}>View Code</a>
                            <span>|</span>
                            <a href={info.demo}>Demo</a>
                        </div>
                        <ul>
                            {info.skills.map((skill, skillIndex) => (
                                <li key={skillIndex}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
