// Ensure the DOM is fully loaded before accessing elements
document.addEventListener('DOMContentLoaded', function () {
    // Get the canvas element
    var canvas = document.getElementById('roadCanvas');
    var ctx = canvas.getContext('2d');

    // Add a click event listener to the canvas
    canvas.addEventListener("click", function () {
        // Change the content of the "demo" element to "THOUGHTS?" when clicked
        document.getElementById("demo").innerHTML = "Glad you had some, lets discuss solutions now.";
    });

            //road color
            var roadColor = '#808080';

            //road
            function drawRoad() {
                // Draw the road background
                ctx.fillStyle = roadColor;
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                //road markings
                ctx.fillStyle = 'yellow'; 
                var markingWidth = 30; 
                var markingGap = 50; 

                // Draw the center line
                for (var i = 0; i < canvas.width; i += markingGap + markingWidth) {
                    ctx.fillRect(i, canvas.height / 2 - markingWidth / 2, markingWidth, markingWidth);
                }
            }
             function drawCar(x, y) {
                // Car body
                ctx.fillStyle = 'red';
                ctx.fillRect(x, y, 80, 40);

                // Car roof
                ctx.fillStyle = 'blue';
                ctx.fillRect(x + 10, y - 20, 60, 20);

                // Wheels
                ctx.fillStyle = 'black';
                ctx.beginPath();
                ctx.arc(x + 20, y + 40, 10, 0, 2 * Math.PI);
                ctx.arc(x + 60, y + 40, 10, 0, 2 * Math.PI);
                ctx.fill();
            }

            // Draw the road
            drawRoad();

            // Draw the car on the road
            drawCar(100, canvas.height - 60)
        });