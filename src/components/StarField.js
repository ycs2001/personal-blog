import React, { useEffect, useRef } from "react";

const Starfield = () => {
    const canvasRef = useRef();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const stars = Array(200).fill().map(() => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2,
            speed: Math.random() * 0.5 + 0.2,
        }));

        const update = () => {
            ctx.fillStyle = "black"; // Black background for starfield
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            stars.forEach((star) => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fillStyle = "#ffffff"; // White stars
                ctx.fill();
                star.y += star.speed;

                // Reset stars that move off-screen
                if (star.y > canvas.height) {
                    star.y = 0;
                    star.x = Math.random() * canvas.width;
                }
            });
            requestAnimationFrame(update);
        };

        // Set canvas size to match the screen
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();

        // Handle window resize
        window.addEventListener("resize", resizeCanvas);

        update(); // Start animation

        // Cleanup
        return () => window.removeEventListener("resize", resizeCanvas);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -1, // Push canvas to the background
            }}
        />
    );
};

export default Starfield;
