const canvas = document.getElementById('snowCanvas');
const ctx = canvas.getContext('2d');

let width, height, snowflakes;

function init() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    snowflakes = [];
    for (let i = 0; i < 150; i++) { // Цасны ширхэгийн тоо
        snowflakes.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 3 + 1, // Хэмжээ
            speed: Math.random() * 1 + 0.5, // Унах хурд
            opacity: Math.random()
        });
    }
}

function draw() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.beginPath();
    
    for (let i = 0; i < snowflakes.length; i++) {
        let f = snowflakes[i];
        ctx.moveTo(f.x, f.y);
        ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2, true);
        
        // Хөдөлгөөн тооцоолох
        f.y += f.speed;
        if (f.y > height) {
            f.y = -5; // Дэлгэцээс гарвал дээрээс дахин эхлүүлэх
            f.x = Math.random() * width;
        }
    }
    ctx.fill();
    requestAnimationFrame(draw);
}

window.addEventListener('resize', init);
init();
draw();