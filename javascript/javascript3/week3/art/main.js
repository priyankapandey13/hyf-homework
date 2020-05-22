// --------------------------------------------------------------------------------   Canvas exercise

let canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
//get DPI
let dpi = window.devicePixelRatio;
let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16); // Random color

class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.xAxis = x;
    this.yAxis = y;
    this.radius = r;
    this.start = startAngle;
    this.ends = endAngle;
    this.color = fillColor;
  }

  draw() {
    ctx.beginPath();
    ctx.translate(0.5, 0.5);
    ctx.lineWidth = 7;
    ctx.strokeStyle = this.color;
    ctx.fillStyle = this.color;
    ctx.arc(
      this.xAxis,
      this.yAxis,
      this.radius,
      this.start,
      this.ends * Math.PI,
      this.color
    );
    ctx.stroke();
    ctx.fill();
  }
}

// individual circles
const c1 = new Circle(150, 80, 20, 0, 2, randomColor);
c1.draw();

// Now lets make art!
// PrintRandoCircle()

function PrintRandoCircle() {
  setInterval(() => {
    getRandomCircles();
  }, 500);
}

function getRandomCircles() {
  var centerX = canvas.getContext;

  let randomSize = Math.round(Math.random() * 20); // Random size
  let randXAxis = Math.round((window.innerWidth / 6) * Math.random());
  let randYAxis = Math.round((window.innerHeight / 6) * Math.random());
  const randomcircle = new Circle(
    randXAxis,
    randYAxis,
    randomSize,
    0,
    2,
    randomColor
  );
  // console.log(randomcircle);
  randomcircle.draw();
}

// What if we wanted the canvas to have the same width and height of the screen -- ScreenAlikeStyle()

function ScreenAlikeStyle() {
  let screenwidth = screen.width;
  let screenheight = screen.height;

  var compo = document.getElementById("resultbox");
  compo.style.width = `${screenwidth}px`;
  compo.style.height = `${screenheight}px`;
}

// Follow the mouse - optional

canvas.addEventListener("mousemove", mouseFollow);

function mouseFollow(e) {
  const mouseX = e.pageX;
  const mouseY = e.pageY;
  getRandomCircles();
}
