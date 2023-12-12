// Ensure the DOM is fully loaded before accessing elements
document.addEventListener('DOMContentLoaded', function () {
    // the canvas element
    var canvas = document.getElementById('roadCanvas');
    var ctx = canvas.getContext('2d');

    // the click event listener 
    canvas.addEventListener("click", function () {
        // changing the content of the "demo" element to "Glad you had some, lets discuss solutions now" when clicked
        document.getElementById("demo").innerHTML = "Glad you had some, lets discuss solutions now.";
    });

            // road color
            var roadColor = '#808080';

            // road
            function drawRoad() {
                // the road background
                ctx.fillStyle = roadColor;
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                // road markings
                ctx.fillStyle = 'yellow'; 
                var markingWidth = 30; 
                var markingGap = 50; 

                // center line
                for (var i = 0; i < canvas.width; i += markingGap + markingWidth) {
                    ctx.fillRect(i, canvas.height / 2 - markingWidth / 2, markingWidth, markingWidth);
                }
            }
             function drawCar(x, y) {
                // body of da car
                ctx.fillStyle = 'red';
                ctx.fillRect(x, y, 80, 40);

                // car roof
                ctx.fillStyle = 'blue';
                ctx.fillRect(x + 10, y - 20, 60, 20);

                // wheels
                ctx.fillStyle = 'black';
                ctx.beginPath();
                ctx.arc(x + 20, y + 40, 10, 0, 2 * Math.PI);
                ctx.arc(x + 60, y + 40, 10, 0, 2 * Math.PI);
                ctx.fill();
            }

            // the road
            drawRoad();

            // car on the road
            drawCar(100, canvas.height - 60)
        });

const toTop = () => window.scrollTo({top: 0, behavior: "smooth"});

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



ctx.beginPath();
ctx.rect(310, 10, 80, 280);
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(350, 50, 40, 0, 2 * Math.PI);
ctx.fillStyle = "red";
ctx.fill();

ctx.beginPath();
ctx.arc(350, 150, 40, 0, 2 * Math.PI);
ctx.fillStyle = "yellow";
ctx.fill();

ctx.beginPath();
ctx.arc(350, 250, 40, 0, 2 * Math.PI);
ctx.fillStyle = "green";
ctx.fill();

ctx.beginPath();
ctx.moveTo(350, 290);
ctx.lineTo(350, 390);
ctx.stroke();