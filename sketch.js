let birdXPos = 40; 
let birdYPos = 250;


// T = Top, B = Bottom; 1 through 4 corresponds to column 

//    PIPE MAP
//    T1 T2 T3 T4
//    B1 B2 B3 B4

let pipeT1XPos = 125;
let pipeT1YPos = 0;

let pipeB1XPos = 125;
let pipeB1YPos = 325;

let pipeT2XPos = 300;
let pipeT2YPos = 0;

let pipeB2XPos = 300;
let pipeB2YPos = 250;

let pipeT3XPos = 475;
let pipeT3YPos = 0;

let pipeB3XPos = 475;
let pipeB3YPos = 400;

let pipeT4XPos = 650;
let pipeT4YPos = 0;

let pipeB4XPos = 650;
let pipeB4YPos = 250;


// Variable to check if the game is running
let gameRunning = true; 




// #################################################################################################################################
function preload() {

}



function setup() {
    createCanvas(500, 500);
    noStroke();
}



function draw() {
    background(0);

    if (gameRunning) {
// Draw bird
        fill(255, 255, 0);
        ellipse(birdXPos, birdYPos, 50, 50);


// Draw pipes
        fill(0, 255, 0);
        rect(pipeT1XPos, pipeT1YPos, 50, 175);
        rect(pipeB1XPos, pipeB1YPos, 50, 175);

        rect(pipeT2XPos, pipeT2YPos, 50, 100);
        rect(pipeB2XPos, pipeB2YPos, 50, 250);

        rect(pipeT3XPos, pipeT3YPos, 50, 250);
        rect(pipeB3XPos, pipeB3YPos, 50, 100);

        rect(pipeT4XPos, pipeT4YPos, 50, 100);
        rect(pipeB4XPos, pipeB4YPos, 50, 250);


// Move pipes towards bird
        pipeT1XPos -= 2;
        pipeB1XPos -= 2;

        pipeT2XPos -= 2;
        pipeB2XPos -= 2;

        pipeT3XPos -= 2;
        pipeB3XPos -= 2;

        pipeT4XPos -= 2;
        pipeB4XPos -= 2;


// Moves bird down
        birdYPos += 3;


// Check if spacebar is pressed to move bird up
        if (keyIsDown(32)) { // 32 is the keycode for the spacebar
            birdYPos -= 9; // Move the bird up by 9 units
        }

// Check if pipes are off screen to respawn at other side 
        if (pipeT1XPos <= -50) {
            pipeT1XPos = 650;
        }

        if (pipeB1XPos <= -50) {
            pipeB1XPos = 650;
        }

        if (pipeT2XPos <= -50) {
            pipeT2XPos = 650;
        }

        if (pipeB2XPos <= -50) {
            pipeB2XPos = 650;
        }

        if (pipeT3XPos <= -50) {
            pipeT3XPos = 650;
        }

        if (pipeB3XPos <= -50) {
            pipeB3XPos = 650;
        }

        if (pipeT4XPos <= -50) {
            pipeT4XPos = 650;
        }

        if (pipeB4XPos <= -50) {
            pipeB4XPos = 650;
        }


// Check for collisions
        if (checkCollision()) {
            gameRunning = false;
        }


    } else {
        background(0);
        fill(random(255), random(255), random(255));
        textSize(50);
        textAlign(CENTER, CENTER);
        text("GAME OVER", width / 2, height / 2);
    }

}


// Keyboard events to move bird up
function keyPressed() {
    if (keyCode === 32) { // Spacebar keycode
        birdYPos -= 7;
    }
}


// Function to check for collisions
function checkCollision() {
    let birdRadius = 25; // Half of the diameter of the bird


// Check collision with all pipes
    if (circleRectColliding(birdXPos, birdYPos, birdRadius, pipeT1XPos, pipeT1YPos, 50, 175) ||
        circleRectColliding(birdXPos, birdYPos, birdRadius, pipeB1XPos, pipeB1YPos, 50, 175) ||
        circleRectColliding(birdXPos, birdYPos, birdRadius, pipeT2XPos, pipeT2YPos, 50, 100) ||
        circleRectColliding(birdXPos, birdYPos, birdRadius, pipeB2XPos, pipeB2YPos, 50, 250) ||
        circleRectColliding(birdXPos, birdYPos, birdRadius, pipeT3XPos, pipeT3YPos, 50, 250) ||
        circleRectColliding(birdXPos, birdYPos, birdRadius, pipeB3XPos, pipeB3YPos, 50, 100) ||
        circleRectColliding(birdXPos, birdYPos, birdRadius, pipeT4XPos, pipeT4YPos, 50, 100) ||
        circleRectColliding(birdXPos, birdYPos, birdRadius, pipeB4XPos, pipeB4YPos, 50, 250)) {
        return true;
    }

    return false;
}


// Check if a circle is colliding with a rectangle
function circleRectColliding(cx, cy, radius, rx, ry, rw, rh) {
    let testX = cx;
    let testY = cy;

    if (cx < rx) testX = rx;
    else if (cx > rx + rw) testX = rx + rw;

    if (cy < ry) testY = ry;
    else if (cy > ry + rh) testY = ry + rh;

    let distance = dist(cx, cy, testX, testY);

    return distance <= radius;
}
