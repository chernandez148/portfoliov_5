import React, { useState } from 'react'
import jobHuntr from '../../assets/job-huntr-logo.png'
import rpgGame from '../../assets/rpg-game.png'
import './styles.css'

function Projects() {
    const [displayInfo, setDisplayInfo] = useState(false)

    const handleProjectInfo = () => {
        setDisplayInfo(true)
    }

    const handleProjectInfoHide = () => {
        setDisplayInfo(false)
    }

    return (
        <section className='Projects'>
            <h1 className='projects-title'>My Projects</h1>
            <div className='project-wrapper'>
                <div onMouseEnter={handleProjectInfo} onMouseLeave={handleProjectInfoHide} className='project-1'>
                    <article style={{ zIndex: displayInfo ? 1 : 0 }}>
                        <span>2023</span>
                        <h1>Job Hunter - A Responsive Job Seeking Site</h1>
                        <p> a user-friendly job search application designed to streamline the job hunting process and provide a convenient
                            platform for finding and saving job opportunities.</p>
                        <aside>
                            <a href='https://github.com/chernandez148/job_huntr_v2/tree/main'>View GitHub</a>
                            <a href='https://www.youtube.com/watch?v=aVQnZydey3Y'> View Demo</a>
                        </aside>
                    </article>
                    <img src={jobHuntr} width='100%' />
                </div>
                <div onMouseEnter={handleProjectInfo} onMouseLeave={handleProjectInfoHide} className='project-1'>
                    <article style={{ zIndex: displayInfo ? 1 : 0 }}>
                        <span>2023</span>
                        <h1>Job Hunter - A Responsive Job Seeking Site</h1>
                        <p> a user-friendly job search application designed to streamline the job hunting process and provide a convenient
                            platform for finding and saving job opportunities.</p>
                        <aside>
                            <a href='https://github.com/chernandez148/job_huntr_v2/tree/main'>View GitHub</a>
                            <a href='https://www.youtube.com/watch?v=aVQnZydey3Y'> View Demo</a>
                        </aside>
                    </article>
                    <img src={jobHuntr} width='100%' />
                </div>
                <div className='project-3'>3</div>
                <div className='project-4'>4</div>
            </div>
        </section>
    )
}

export default Projects