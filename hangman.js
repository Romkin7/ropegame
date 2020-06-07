var canvas;
var context;

var draws = ['none', 'gallows', 'head', 'body', 'rightHarm', 'leftHarm', 'rightLeg', 'leftLeg', 'rightFoot', 'leftFoot'];

//
// Alustaa piirtoalustan.
// Tätä pitää kutsua kerran, ja parametrina annetaas canvas-elementti (esim getElementById:n palauttama DOM-elementti)
//
function setCanvas(element) {
    canvas = element;
    context = canvas.getContext('2d');
}

//
// Tyhjentää piirtoalustan
//
function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

//
// Piirtää tikku-ukon osan.
// Parametrina annetaan piirrettävän osan numero 1-9. Muilla arvoilla ei tapahdu mitään.
//
function draw(step) {
    var part = draws[step];
    switch (step) {
        case 'none':
            break;
        case 'gallows':
            console.log(step);
            context.strokeStyle = '#444';
            context.lineWidth = 10;
            context.beginPath();
            context.moveTo(175, 225);
            context.lineTo(5, 225);
            context.moveTo(40, 225);
            context.lineTo(25, 5);
            context.lineTo(100, 5);
            context.lineTo(100, 25);
            context.stroke();
            break;

        case 'head':
            context.lineWidth = 5;
            context.beginPath();
            context.arc(100, 50, 25, 0, Math.PI * 2, true);
            context.closePath();
            context.stroke();
            break;

        case 'body':
            context.beginPath();
            context.moveTo(100, 75);
            context.lineTo(100, 140);
            context.stroke();
            break;

        case 'rightHarm':
            context.beginPath();
            context.moveTo(100, 85);
            context.lineTo(60, 100);
            context.stroke();
            break;

        case 'leftHarm':
            context.beginPath();
            context.moveTo(100, 85);
            context.lineTo(140, 100);
            context.stroke();
            break;

        case 'rightLeg':
            context.beginPath();
            context.moveTo(100, 140);
            context.lineTo(80, 190);
            context.stroke();
            break;

        case 'rightFoot':
            context.beginPath();
            context.moveTo(82, 190);
            context.lineTo(70, 185);
            context.stroke();
            break;

        case 'leftLeg':
            context.beginPath();
            context.moveTo(100, 140);
            context.lineTo(125, 190);
            context.stroke();
            break;

        case 'leftFoot':
            context.beginPath();
            context.moveTo(122, 190);
            context.lineTo(135, 185);
            context.stroke();
            break;
    }
}
