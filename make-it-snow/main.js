const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let num = 100;

class Snowflake {
  constructor(x, y, speed, size) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.size = size;
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    c.fillStyle = "white";
    c.fill();
  }

  update() {
    this.y += this.speed;
    if (this.y >= canvas.height) {
      this.y = 0;
    }
    this.draw();
  }
}

let snowflakes = [];

function generate() {}
for (let i = 0; i < num; i++) {
  x = Math.random() * canvas.width;
  y = Math.random() * canvas.height;
  speed = Math.random() * 7 + 2;
  size = Math.random() * 6 + 2;

  snowflakes.push(new Snowflake(x, y, speed, size));
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.fillStyle = "rgb(0, 0, 0)";
  c.fillRect(0, 0, canvas.width, canvas.height);
  snowflakes.forEach((snowflake) => {
    snowflake.update();
  });
}

animate();
