
var levelNumber = 0;

const levels = [
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    
    [
        
    ]
    
];

var MAP_WIDTH = levels[levelNumber][0].length * tileSize;
var MAP_HEIGHT = levels[levelNumber].length * tileSize;

var enemies = [];

// LEVEL MANAGER
function nextLevel() {
    levelNumber++;
    if (levelNumber >= levels.length) {
        levelNumber = 0;
    }
    MAP_WIDTH = levels[levelNumber][0].length * tileSize;
    MAP_HEIGHT = levels[levelNumber].length * tileSize;

    enemies = [];
}

function getMouseOffset(x, y) {
    // check if user is moving left or right, based on mouse position
        // if player x is close to edges of map, offset mouseX value
        let mouseXOffset = mouseX;
        let mouseYOffset = mouseY;
            
        if (x < width/2) {
            mouseXOffset += (width/2 - x);
        
        } else if (x > MAP_WIDTH - width/2) {
            mouseXOffset -= (x - (MAP_WIDTH - width/2));
        }
    
        if (y < height/2) {
            mouseYOffset += (height/2 - y);
        
        } else if (y > MAP_HEIGHT - height/2) {
            mouseYOffset -= (y - (MAP_HEIGHT - height/2));
        }
    
        return createVector(mouseXOffset, mouseYOffset);
    }
    
    