import React, { useEffect, useRef } from 'react';

const ParticleText = ({ text = "MyName", width = 600, height = 200 }) => {
    const canvasRef = useRef(null);

    // Configuration
    const fontSize = 50;
    const particleDensity = 1; // sample every nth pixel to reduce total particles

    let particles = [];
    let animationFrameId;

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Step 1: Draw text on an offscreen canvas
        const offscreen = document.createElement('canvas');
        offscreen.width = width;
        offscreen.height = height;
        const offCtx = offscreen.getContext('2d');

        offCtx.fillStyle = "#f6f1f1";
        offCtx.font = `bold ${fontSize}px sans-serif`;
        offCtx.textAlign = 'center';
        offCtx.textBaseline = 'middle';
        offCtx.fillText(text, width / 2, height / 2);

        // Step 2: Extract pixel data
        const imageData = offCtx.getImageData(0, 0, width, height);
        const data = imageData.data;
        const textPixels = [];

        for (let y = 0; y < height; y += particleDensity) {
            for (let x = 0; x < width; x += particleDensity) {
                const index = (y * width + x) * 4;
                const alpha = data[index + 3];
                // If alpha > 0, pixel is part of the text
                if (alpha > 0) {
                    textPixels.push({ x, y });
                }
            }
        }

        // Step 3: Initialize particles
        particles = textPixels.map(p => {
            return {
                x: Math.random() * width,
                y: Math.random() * height,
                tx: p.x,
                ty: p.y,
                vx: 0,
                vy: 0
            };
        });

        // Step 4: Animation Loop
        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Simple easing towards target
            for (let i = 0; i < particles.length; i++) {
                const particle = particles[i];
                const dx = particle.tx - particle.x;
                const dy = particle.ty - particle.y;

                // Adjust these factors for different motion behaviors
                particle.x += dx * 0.05;
                particle.y += dy * 0.05;

                // Draw particle
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(particle.x, particle.y, 2, 2);
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(animationFrameId);
    }, [text, width, height]);

    return (
        <canvas ref={canvasRef} width={width} height={height} style={{border: 'none'}} />
    );
};

export default ParticleText;
