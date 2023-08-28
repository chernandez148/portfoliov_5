import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setYAxis } from '../../redux/slices/yAxis'; // Import the action creator
import { setIsOpacity } from '../../redux/slices/isOpacity';
import ParticleCanvas from '../ParticleCanvas/ParticleCanvas';
import profileImg from '../../assets/me.png'
import './styles.css';

function Hero() {
    const yAxis = useSelector(state => state.yAxis.yAxis);
    const isOpacity = useSelector(state => state.isOpacity.isOpacity);
    const [parallaxOpacity, setParallaxOpacity] = useState(0)
    const [textAnimation, setTextAnimation] = useState({
        h4: -70,
        h1: -90,
        p: -120
    })
    const [textOpacity, setTextOpacity] = useState(0)
    const dispatch = useDispatch();

    const scrollAnimate = () => {
        let increasing = true;
        let currentValue = 0;
        let opacityValue = 1

        const animate = () => {
            if (increasing) {
                currentValue += 1;
                opacityValue -= .04
                if (currentValue >= 30) {
                    increasing = false;
                }
            } else {
                currentValue = 0;
                opacityValue = 1
                if (currentValue <= 0) {
                    increasing = true;
                }
            }

            dispatch(setYAxis(currentValue)); // Update the yAxis value in Redux
            dispatch(setIsOpacity(opacityValue))

            setTimeout(() => {
                requestAnimationFrame(animate);
            }, 25); // Adjust the delay time (in milliseconds) for a slower animation
        };

        animate();
    };


    useEffect(() => {
        scrollAnimate();
        setParallaxOpacity(1)
        setTextOpacity(1)
        setTextAnimation({
            h4: 0,
            h1: 0,
            p: 0
        })
    }, []);

    return (
        <section className='Hero'>
            <ParticleCanvas />
            <div className='parallax-bg'>
                <span style={{ opacity: parallaxOpacity }} className='circle-1'></span>
                <span style={{ opacity: parallaxOpacity }} className='circle-2'></span>
                <span style={{ opacity: parallaxOpacity }} className='circle-3'></span>
                <span style={{ opacity: parallaxOpacity }} className='circle-4'></span>
            </div>
            <div className='cover-wrapper'>
                <div className='cover'>
                    <h4 style={{ bottom: textAnimation.h4, opacity: textOpacity }}>Christian Hernandez</h4>
                    <h1 style={{ bottom: textAnimation.h1, opacity: textOpacity }}>Website and <br />
                        UX/UI Designer
                    </h1>
                    <p style={{ bottom: textAnimation.p, opacity: textOpacity }}>A web developer looking to create amazing art for the web.</p>
                </div>
                <img className='profile-img' src={profileImg} />
            </div>
            <div className='scroll-behaviour'>
                <span className='dot' style={{ top: yAxis, opacity: isOpacity }}></span>
            </div>
        </section>
    );
}

export default Hero;
