// JavaScript لتفعيل البطاقة وإظهار الرسالة
document.querySelector(".open-card").addEventListener("click", function () {
    const message = document.querySelector(".message");
    message.style.opacity = "1"; // إظهار الرسالة
    startConfetti(); // تشغيل تأثير الكونفيتي
});

// دالة لإنشاء تأثير الكونفيتي
function startConfetti() {
    const canvas = document.getElementById("confetti");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confettiPieces = [];
    const colors = ["#ff6b6b", "#4ecdc4", "#69dd9a", "#ffd166"];

    class Confetti {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height - canvas.height;
            this.radius = Math.random() * 10 + 5;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.speed = Math.random() * 3 + 2;
            this.rotation = Math.random() * 360;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.closePath();
        }

        update() {
            this.y += this.speed;
            this.rotation += 0.1;
            if (this.y > canvas.height) {
                this.y = 0;
                this.x = Math.random() * canvas.width;
            }
            this.draw();
        }
    }

    function initConfetti() {
        for (let i = 0; i < 100; i++) {
            confettiPieces.push(new Confetti());
        }
    }

    function animateConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confettiPieces.forEach((piece) => piece.update());
        requestAnimationFrame(animateConfetti);
    }

    initConfetti();
    animateConfetti();
}