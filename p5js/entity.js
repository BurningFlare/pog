class Entity {
    static FRICTION = 0.9;

    constructor(position, health, name, size, weapon) {
        this.position = position;
        this.velocity = createVector();
        this.acceleration = createVector();
        this.health = health;
        this.name = name;
        this.size = size;
        this.weapon = weapon;
        this.facingDirection = LEFT;
    }

    static checkCollision(level, position, size) {
        // detect if an object of size w, h at position x, y collides with a wall
        // return true if collision, false if not
    
        var tileDecimalPos = createVector(
            position.x / tileSize,
            position.y / tileSize
        );
    
        var tileIntPos = createVector(
            Math.floor(tileDecimalPos.x),
            Math.floor(tileDecimalPos.y)
        );
        
        var numTilesToCheck = createVector(
            Math.ceil((tileDecimalPos.x - tileIntPos.x) + size.x / tileSize),
            Math.ceil((tileDecimalPos.y - tileIntPos.y) + size.y / tileSize)
        );
        
        for (var j = 0; j < numTilesToCheck.y; j += 1) {
            for (var i = 0; i < numTilesToCheck.x; i += 1) {
                if (levels[level][tileIntPos.x + i][tileIntPos.y + j] == 1) {
                    return true;
                }
            }
        }
        
        return false;
    }

    checkEntityWithinRange(position, radius) {
        return (this.size.magnitude() + radius) < p5.Vector.sub(this.position - position).magnitude();
    }

    updateMovement() {
        this.velocity.add(this.acceleration);

        // check x velocity collision
        if (this.velocity.x > 0) {
            if (Entity.checkCollision(levelNumber, createVector(this.position.x + this.size.x + this.velocity.x, this.position.y), createVector(0, this.size.y))) {
                this.velocity.x = 0;
                this.position.x = Math.ceil(this.position.x / tileSize) * tileSize - this.size.x;
            } else {
                this.position.x += this.velocity.x;
            }
        }

        else if (this.velocity.x < 0) {
            if (Entity.checkCollision(levelNumber, createVector(this.position.x + this.velocity.x, this.position.y), createVector(0, this.size.y))) {
                this.velocity.x = 0;
                this.position.x = Math.floor(this.position.x / tileSize) * tileSize;
            } else {
                this.position.x += this.velocity.x;
            }
        }
        // check y velocity collision
        if (this.velocity.y > 0) {
            if (Entity.checkCollision(levelNumber, createVector(this.position.x, this.position.y + this.size.y + this.velocity.y), createVector(this.size.x, 0))) {  
                this.velocity.y = 0;
                this.position.y = Math.ceil(this.position.y / tileSize) * tileSize - this.size.y;
            } else {
                this.position.y += this.velocity.y;
            }
        }
    
        else if (this.velocity.y < 0) {
            if (Entity.checkCollision(levelNumber, createVector(this.position.x, this.position.y + this.velocity.y), createVector(this.size.x, 0))) {
                this.velocity.y = 0;
                this.position.y = Math.floor(this.position.y / tileSize) * tileSize;
            } else {
                this.position.y += this.velocity.y;
            }
        }

        this.velocity.mult(Entity.FRICTION);
    }

    damaged(health) {
        this.health -= health;
    }

    attack() {
        
    }

    update() {
        this.updateMovement();
    }

    drawEntity() {
        
    }
}