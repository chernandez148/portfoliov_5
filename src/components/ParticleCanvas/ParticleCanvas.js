import React, { useRef, useEffect } from 'react';

const ParticleCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const particles = [];

        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.size = Math.random() * 5 + 2;
                this.speedX = Math.random() * 0.5 - 0.1;
                this.opacity = 0;
                this.targetOpacity = Math.random() * 0.4 + 0.1; // Random opacity target between 0.1 and 0.5

                this.update = () => {
                    this.x += this.speedX;
                    this.y -= 0.5;

                    if (this.x > canvas.width) {
                        this.x = 0;
                    } else if (this.x < 0) {
                        this.x = canvas.width;
                    }

                    if (this.y > canvas.height) {
                        this.y = 0;
                    } else if (this.y < 0) {
                        this.y = canvas.height;
                    }

                    if (this.opacity < this.targetOpacity) {
                        this.opacity += 0.005;
                    } else if (this.opacity > this.targetOpacity) {
                        this.opacity -= 0.005;
                    }
                };

                this.draw = () => {
                    ctx.fillStyle = `rgba(0, 0, 0, ${this.opacity})`;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
                };
            }
        }

        function createParticles() {
            particles.length = 0; // Clear existing particles
            for (let i = 0; i < 10; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                particles.push(new Particle(x, y));
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });

            requestAnimationFrame(animate);
        }

        // Function to update canvas dimensions
        const updateCanvasDimensions = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight * 0.5; // Set canvas height to 50% of screen height
            createParticles(); // Call createParticles whenever dimensions change
        };

        // Initial canvas setup
        updateCanvasDimensions();

        // Attach resize event listener
        window.addEventListener('resize', updateCanvasDimensions);

        animate();

        return () => {
            // Clean up the resize event listener
            window.removeEventListener('resize', updateCanvasDimensions);
        };
    }, []);

    return <canvas ref={canvasRef} style={{ width: '100%', height: '50vh' }} />;
};

export default ParticleCanvas;