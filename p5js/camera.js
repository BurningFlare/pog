class Camera {

    constructor() {
        this.x = 0;
        this.y = 0;
    }

    // follow the player, unless the player is near the edge of the map
    update(x, y) {

        if (x < width / 2) {
            this.x = width / 2;
        } else if (x > MAP_WIDTH - width / 2) {
            this.x = MAP_WIDTH - width / 2;
        } else {
            this.x = x;
        }

        if (y < height / 2) {
            this.y = height / 2;
        } else if (y > MAP_HEIGHT - height / 2) {
            this.y = MAP_HEIGHT - height / 2;
        } else {
            this.y = y;
        }
    }

    // draw the camera
    draw() {
        translate(width / 2 - this.x, height / 2 - this.y);
    }
}