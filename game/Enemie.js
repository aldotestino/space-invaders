class Enemie {
    constructor(x,y) {
        this.pos = createVector(x, y);
    }

    render() {
        fill(168, 50, 166);
        noStroke()
        imageMode(CENTER);
        image(enemieImage, this.pos.x, this.pos.y, 80, 80);
        //image(pelpImage, this.pos.x, this.pos.y, 100, 100);
    }

    move(xVel,yVel) {
      this.pos.x += xVel;
      this.pos.y += yVel;
    }
}
