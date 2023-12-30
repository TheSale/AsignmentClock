const canvas = document.getElementById("analogClock");
const ctx = canvas.getContext("2d");

function drawClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 150, 0, 2 * Math.PI);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#333";
    ctx.stroke();

    drawHand(hours * 30 + (minutes / 60) * 30, 80, 8, "#333");

    drawHand(minutes * 6 + (seconds / 60) * 6, 120, 4, "#555");

    drawHand(seconds * 6, 140, 2, "#f00");

    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "#333";
    ctx.fill();
}

function drawHand(angle, length, width, color) {
    const radianAngle = (angle - 90) * (Math.PI / 180);
    const x = canvas.width / 2 + length * Math.cos(radianAngle);
    const y = canvas.height / 2 + length * Math.sin(radianAngle);

    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.lineTo(x, y);
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.stroke();
}

function animateClock() {
    setInterval(drawClock, 1000);
}

animateClock();
