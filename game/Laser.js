class Laser {
    constructor(pos) {
        this.pos = createVector(pos, height-105);
    }

    update() {
        this.pos.y -= 10;
    }

    render() {
        stroke(168,50,166);
        strokeWeight(3);
        line(this.pos.x, this.pos.y, this.pos.x, this.pos.y - 40);
    }

    checkEdge() {
        if (this.pos.y < 0) {
            return true;
        } else {
            return false;
        }
    }

    hits(enemie) {
        if (this.pos.x >= enemie.pos.x - 50 && this.pos.x <= enemie.pos.x + 50) {
            if (this.pos.y - 40 <= enemie.pos.y + 30) {
                return true;
            }
        }
    }

}
