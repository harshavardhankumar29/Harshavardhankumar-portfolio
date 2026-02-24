import { useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function SplineBackground() {
    const canvasRef = useRef(null);
    const { accentColor } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Convert hex accentColor to RGB for opacity manipulation
        const hexToRgb = (hex) => {
            // Remove hash if present
            hex = hex.replace('#', '');
            if (hex === 'white') return '255, 255, 255';
            if (hex === 'black') return '0, 0, 0';

            const bigint = parseInt(hex, 16);
            const r = (bigint >> 16) & 255;
            const g = (bigint >> 8) & 255;
            const b = bigint & 255;

            return `${r}, ${g}, ${b}`;
        }

        let rgbAccent = hexToRgb(accentColor);

        const particles = [];
        const particleCount = 60; // Balanced count

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.3;
                this.vy = (Math.random() - 0.5) * 0.3;
                this.size = Math.random() * 2 + 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0) this.x = canvas.width;
                if (this.x > canvas.width) this.x = 0;
                if (this.y < 0) this.y = canvas.height;
                if (this.y > canvas.height) this.y = 0;
            }

            draw() {
                ctx.fillStyle = `rgba(${rgbAccent}, 0.5)`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Re-init particles on resize or start
        const initParticles = () => {
            particles.length = 0;
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }
        initParticles();

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update RGB if theme changed (optimized to check roughly or just rely on react's useEffect re-trigger, 
            // but the useEffect dependency [accentColor] handles the restart nicely)

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            // Draw connecting lines
            particles.forEach((a, i) => {
                particles.slice(i + 1).forEach(b => {
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 120) {
                        ctx.strokeStyle = `rgba(${rgbAccent}, ${0.15 * (1 - distance / 120)})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                });
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [accentColor]); // Re-run when accent color changes

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none bg-black transition-colors duration-500"
        />
    );
}
