class SpaceShip {
    constructor() {
        this.pos = createVector(width / 2, height - 60)
        this.lasers = [];
        this.vel = 0
    }

    render() {
        //noStroke();
        //fill(255);
        //rectMode(CENTER);
        //rect(this.pos.x, this.pos.y - 40, 20, 20)
        //rect(this.pos.x, this.pos.y - 20, 60, 20)
        //rect(this.pos.x, this.pos.y, 100, 20);
        imageMode(CENTER);
        image(spaceshipImage,this.pos.x,this.pos.y,90,90);
        for (let i = 0; i < this.lasers.length; i++) {
            if (!this.lasers[i].checkEdge()) {
                this.lasers[i].update();
                this.lasers[i].render();
            } else {
                this.lasers.splice(i, 1);
            }
        }
    }

    move() {
      if(this.pos.x < 0) {
        this.pos.x = 0;
      }else if(this.pos.x > width) {
        this.pos.x = width;
      }
      if(this.pos.x >= 0 && this.pos.x <= width) {
        this.pos.x += this.vel;
      }
    }

    shoot() {
        playerShoot.play();
        this.lasers.push(new Laser(this.pos.x));
    }
}
