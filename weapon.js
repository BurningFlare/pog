class Weapon {
    constructor(name, damage, range, cooldown, user, animationTotalFrames) {
        this.name = name;
        this.damage = damage;
        this.cooldown = 0; // cooldown is in frames
        this.range = range; // range of attack in pixels
        this.maxCooldown = cooldown; // total cooldown frame time
        this.user = user;
        this.animationFrame = 0;
        this.animationTotalFrames = animationTotalFrames; 
    }

    attack(direction, position) {
        if(this.cooldown <= 0) {
            this.cooldown = this.maxCooldown;
            this.animationFrame = 0;

            Weapon.checkFanHurt(user.position, direction, Math.PI/4, this.radius, this.damage, enemies);
        }
    }

    drawWeapon() {
        if (this.animationFrame == this.animationTotalFrames) { // weapon is at rest

            // draw weapon sprite at 0,0 and translate to player position
            push();
            translate(this.user.position.x + this.user.size.x/2 + (this.user.size.x*0.75 * this.user.facingDirection), this.user.position.y + this.user.size.y/3);
            scale(1.5);
            let animationCompletion = map(this.animationFrame, 0, this.animationTotalFrames, 0, 1);
            rotate((Math.PI/4 + animationCompletion * 0.1) * this.user.facingDirection);
            image(defaultSwordSprite, -21/2, -36/2, 21, 36);
            pop();
        }
    }

    drawAttack() {

    }

    static checkFanHurt(position, direction, angleSpread, radius, damage, listEnemies) {
        // takes the position, direction, spread, and radius for an attack
        // and checks the listEnemies to see if they are hit. Damages the
        // the enemies. Returns a list of all hit enemies.
        var enemiesHit = []

        for (enemy of listEnemies) {
            var enemyAngle = p5.Vector.sub(enemy.position, position);

            if (enemyAngle.angleBetween(direction) < angleSpread && enemy.checkEntityWithinRange(position, radius)) {
                enemy.damage();
                enemiesHit.push(enemy);
            }
        }

        return enemiesHit;
    }

    update() {
        this.cooldown -= 1;
        if (this.animationFrame < this.animationTotalFrames) {
            this.animationFrame += 1;
        }

        this.drawWeapon();

        // PLACEHOLDER
        if (clicked)
        {
            this.attack(1, this.user.position.x, this.user.position.y);        
        }
    }
    
}