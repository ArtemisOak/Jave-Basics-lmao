/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;

class Square {
	constructor(x, y, color) {}
}

let x = 100;
let y = 200;
let yDirection = 1;
let xDirection = 1;
let width = 60;
let height = 80;
ctx.fillStyle = "purple";

function animate() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillRect(x, y, width, height);

	if (y + height >= canvas.height) {
		yDirection = -1;
	}
	if (x + width >= canvas.width) {
		xDirection = -1;
	}
	if (y <= 0) {
		yDirection = 1;
	}
	if (x <= 0) {
		xDirection = 1;
	}

	y += 10 * yDirection;
	x += 10 * xDirection;
	console.log(animate);
	requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
