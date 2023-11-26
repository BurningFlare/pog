class Sword extends Weapon {
    constructor(name, damage, range, cooldown, user) {
        super(name, damage, range, cooldown, user);
    }

    attack(direction, position) {
        // sends an attack in the direction given
        
    }

    drawAttack() {
        // draws the weapon
        push();
        translate(player.position.x, player.position.y);
        rotate(player.direction);

        

        pop();
    }

    update() {
        // updates the weapon
        this.cooldown -= 1;
    }
}