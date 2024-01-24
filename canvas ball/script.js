//menyiapkan Canvas
const mycanvas = document.querySelector('#mycanvas');

//Atur ukuran Canvas
mycanvas.width = window.innerWidth;
mycanvas.height = window.innerHeight;

//Tentukan Context 
const c = mycanvas.getContext('2d');

 
// c.fillStyle = 'pink';
// c.strokeStyle = '#999';
// c.lineWidth = '5';

// c.rect(400, 100, 300, 300);
// c.fill();
// c.stroke();

// c.fillStyle ='lightgreen';
// c.beginPath();
// c.arc(150, 250, 150, 0, 2 * Math.PI);
// c.fill();
// c.stroke();

// c.fillStyle = 'lightblue';
// c.beginPath();
// c.moveTo(900, 100);
// c.lineTo(1050, 400);
// c.lineTo(750,400);
// c.lineTo(900, 100); //c.closepath();
// c.fill();
// c.stroke();

let x = 300;
let y = 200;
let speedx = 8;
let speedy = 8;
let radius = 50;

function draw() {
window.requestAnimationFrame(draw);
c.clearRect(0, 0, innerWidth, innerHeight);
console.log('ok!');
c.fillStyle ='lightgreen';
c.beginPath();
c.arc(x, y, radius, 0, 2 * Math.PI);
c.fill();
c.stroke();

if(x + radius >innerWidth || x - radius <0) {
speedx = -speedx;

}

if(y + radius >innerHeight || y - radius <0) {
speedy = -speedy;
    
}
x+=speedx;
y+=speedy;
}

draw();