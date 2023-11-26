class Player extends Entity {

    static PLAYER_COLOR = [255, 0, 255, 0];
    static PLAYER_ALT_COLOR = [45, 5, 1, 0];
    static PLAYER_ACCEL = 1;
    static PLAYER_SIZE = 25;
    static PLAYER_HP = 100;

    constructor(position, inventory) {
        super(position, Player.PLAYER_HP, "SEONGWAN", createVector(Player.PLAYER_SIZE, Player.PLAYER_SIZE), null);
        this.inventory = inventory;
    }

    // addItem(newItem) {
    //     this.inventory.append(newItem);
    // }

    // update player movement based on keyboard inputs
    processKeyboardMovement() {
        
        if (keysPressed[65] && !keysPressed[68]) {
            this.acceleration.x = -1;
        } else if (keysPressed[68] && !keysPressed[65]) {
            this.acceleration.x = 1;
        } else if (!(keyPressed[65] || keyPressed[68])) {
            this.acceleration.x = 0;
        }

        if (keysPressed[87] && !keysPressed[83]) {
            this.acceleration.y = -1;
        } else if (keysPressed[83] && !keysPressed[87]) {
            this.acceleration.y = 1;
        } else if (!(keyPressed[83] || keyPressed[87])) {
            this.acceleration.y = 0;
        }

        // normalize acceleration vector
        this.acceleration = this.acceleration.normalize();
        this.acceleration.mult(Player.PLAYER_ACCEL);
    }

    updateFacingDirection() {
        if (getMouseOffset(this.position.x, 0).x < width/2) {
            this.facingDirection = LEFT;
        }
        else {
            this.facingDirection = RIGHT;
        }
    }

    changeColor() {
        // mouse thing
        var colors = true;
        if(clicked){
            colors = !colors;
        }

        if (colors) {
            fill(Player.PLAYER_COLOR);
        }
        else {
            //do something else on another click if you want idk
            fill(Player.PLAYER_ALT_COLOR);
        }
    }

    update() {
        this.changeColor();
        this.processKeyboardMovement();
        this.updateFacingDirection();
        // update movement
        super.update();
    }

    drawEntity() {
        fill(255, 255, 255);
    //    ellipse(this.position.x+5,this.position.y+20,3,3);
    //    ellipse(this.position.x,this.position.y,3,3);
        rect (this.position.x, this.position.y, this.size.x, this.size.y);
    }
}