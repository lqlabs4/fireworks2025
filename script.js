// Canvas setup
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
 
function createFirework(x, y) {
    const particles = [];
    const colors = ["#FF5733", "#FFC300", "#DAF7A6", "#FF33F6", "#33FFCE"];
 
    for (let i = 0; i < 100; i++) {
        particles.push({
            x: x,
            y: y,
            vx: Math.random() * 6 - 3,
            vy: Math.random() * 6 - 3,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 3 + 1,
            life: 100,
        });
    }
 
    return particles;
}
 
function drawFireworks(particles) {
    particles.forEach((particle, index) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        particle.x += particle.vx;
        particle.y += particle.vy;
particle.life--;
 
if (particle.life <= 0) particles.splice(index, 1);
    });
}
 
const particles = [];
setInterval(() => {
    particles.push(...createFirework(Math.random() * canvas.width, Math.random() * canvas.height));
}, 300);
 
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFireworks(particles);
    requestAnimationFrame(animate);
}
animate();
 
// Show message
document.getElementById("message").style.display = "block";