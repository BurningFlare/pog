//var player = new Player(createVector(200, 200), []);

function drawMap(level) {
    for (var j = 0; j < levels[level].length; j += 1) {
        for (var i = 0; i < levels[level][0].length; i += 1) {
            if (levels[level][i][j] == 1) {
                fill(50, 50, 50);
                strokeWeight(0.1);
                stroke(255, 255, 255);
                rect(i * tileSize, j * tileSize, tileSize, tileSize);
            }
        }
    }
}

function preload() {
    defaultSwordSprite = loadImage("Assets/Sprites/Weapons/Default Sword.png");
}

function setup() {
    createCanvas(width, height);
    player = new Player(createVector(200, 200), []);
    camera = new Camera(0, 0);
    sword = new Sword("Excalibur", 1.5, 21, 36, player, 10);
}

var spriteTestMode = false;

function draw() {
    
    background(0, 0, 0);
    
    // translate(width/2, height/2);

    // // draw sprite here
    // //image(defaultSwordSprite, 0, 0, 21 * 10, 36 * 10);

    // resetMatrix();


    // if (spriteTestMode) {
    //     return;
    // }

    
    // PHYSICS UPDATES
    // check player collision with walls
    player.update();
    
    // update camera
    camera.update(player.position.x, player.position.y);
    camera.draw();
    
    // DRAWING UPDATES
    player.drawEntity();
    
    sword.update();
    
    drawMap(0);

    clicked = false;
}