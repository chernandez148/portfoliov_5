
import React, { useState, useEffect } from 'react'
import { AiFillHighlight } from 'react-icons/ai';
import { BsCodeSlash, BsMusicNoteBeamed } from 'react-icons/bs';
import { GiRunningShoe } from 'react-icons/gi';
import './styles.css'

function About() {
    const [showSection, setShowSection] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.querySelector('.About');

            // Get the position and dimensions of the .Projects element relative to the viewport
            const rect = aboutSection.getBoundingClientRect();

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
    return (
        <section className={`About ${showSection ? 'show' : ''}`}>
            <h2>Who Am I?</h2>
            <ul>
                <li>
                    <AiFillHighlight size={72} />
                    <h3>Web Designer</h3>
                    <p>Crafting captivating digital interfaces with creativity and skill.</p>
                </li>
                <li>
                    <BsCodeSlash size={72} />
                    <h3>Web Developer</h3>
                    <p>Building and optimizing web solutions with technical expertise.</p>
                </li>
                <li>
                    <GiRunningShoe size={72} />
                    <h3>Competitive Runner</h3>
                    <p>Achieving top performance in 5k races with strong determination.</p>
                </li>
                <li>
                    <BsMusicNoteBeamed size={72} />
                    <h3>Music Junkie</h3>
                    <p>Passionate music enthusiast exploring diverse sounds.</p>
                </li>
            </ul>
            <div className='about-me'>
                <p>
                    I started my path as a <span className='focus-text'>Computer Software Engineer</span> in 2019, picking up <span className='focus-text'>HTML</span> and <span className='focus-text'>CSS</span> from YouTube tutorials. <span className='focus-text'>Bootstrap</span> became my first framework, followed by a more formal education at <span className='focus-text'>Flatiron School</span> in 2023. There, I deepened my skills in software development.
                </p>
                <p>
                    During the program, I became comfortable with <span className='focus-text'>Vanilla JS</span> for front-end work and dabbled in APIs for personal projects. Transitioning to <span className='focus-text'>ReactJS</span>, I built applications that fetched data from various sources. Later on, I ventured into <span className='focus-text'>Python</span> with <span className='focus-text'>Flask</span> for back-end development. On the side, I explored <span className='focus-text'>WordPress</span> for fun projects.
                </p>
            </div>
        </section>
    )
}

export default About
