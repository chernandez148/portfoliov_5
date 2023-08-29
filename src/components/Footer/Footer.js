
import React from 'react'
import { TfiEmail } from 'react-icons/tfi';
import { FaPhoneAlt, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import './styles.css'

function Footer() {
    return (
        <footer className='Footer'>
            <div className='footer-wrapper'>
                <div className='footer-content-wrapper'>
                    <div className='footer-left'>
                        <h2>Get in touch -</h2>
                        <div className='address'>
                            <p>
                                25281 Park Ave, Loma Linda CA
                            </p>
                            <p>
                                92354, US
                            </p>
                        </div>
                        <ul className='contact'>
                            <li>
                                <TfiEmail />
                                <p>hernandezchristian94@gmail.com</p>
                            </li>
                            <li>
                                <FaPhoneAlt />
                                <p>(909) 501-5252</p>
                            </li>
                        </ul>
                    </div>
                    <div className='footer-right'>
                        <h2>Follow me on -</h2>
                        <ul className='contact'>
                            <li>
                                <FaLinkedinIn />
                                <a href='www.linkedin.com/in/christian-hernandez-967740247'>LinkedIn</a>
                            </li>
                            <li>
                                <FaGithub />
                                <a href='https://github.com/chernandez148'>GitHub</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer
