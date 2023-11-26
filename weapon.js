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

            Weapon.checkFanHurt(user.position, direction, Math.PI/4, this.radius, this.damage, enemies);
        }
    }

    drawWeapon() {
        
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
    }
    
}