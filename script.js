window.onload = function () {
  console.log("page loaded");
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  drawCircle(ctx, centerX, centerY);
  const growFactor = 1;
  grow(ctx, centerX, centerY, canvas.width, canvas.height, 100, growFactor);
  const newCircle = new Circle(ctx, canvas.width, canvas.height, 250);
  newCircle.draw(centerX, centerY);
};

function drawCircle(ctx, x, y, radius) {
  ctx.strokeStyle = "white";
  ctx.beginPath();
  ctx.strokeWidth = 2;
  ctx.arc(x, y, 100, 0, 2 * Math.PI);
  ctx.stroke();
}

function grow(ctx, x, y, width, height, iterations, growFactor) {
  for (let i = 0; i < iterations; i++) {
    ctx.clearRect(0, 0, width, height);
    drawCircle(ctx, x, y, growFactor + 10);
  }
}

class Circle {
  #ctx;
  #width;
  #height;
  #radius;
  constructor(ctx, width, height, radius) {
    this.#ctx = ctx;
    this.#width = width;
    this.#height = height;
    this.#radius = radius;
  }

  draw(x, y) {
    this.#ctx.beginPath();
    this.#ctx.strokeStyle = "blue";
    this.#ctx.arc(x, y, this.#radius, 0, 2 * Math.PI);
    this.#ctx.stroke();
  }

  expand(x, y) {
    // clear screen, grow circle, re-render circle]

    requestAnimationFrame(expand);
  }
}
