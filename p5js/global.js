const width = 600;
const height = 600;
const tileSize = 64;

var clicked = false;

var keysPressed = [];

function keyPressed() {
    keysPressed[keyCode] = true;
}

function keyReleased() {
    keysPressed[keyCode] = false;
}

function mouseClicked() {
    clicked = true;
}

