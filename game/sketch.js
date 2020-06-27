let spaceship
let enemies = [];
let NUMBER_ENEMIES = 10;
let score = 0;
let pelpImage;
let enemieImage;
let spaceshipImage;
let invaderKilled;
let playerShoot;
let spaceFont;
let xVelEnemies = 1;
let yVelEnemies = 20;
let yEnemies = 50
let lost = false;
let won = false;
let scoreText;
let bg;

function preload() {
  pelpImage = loadImage('./assets/pelp.png');
  enemieImage = loadImage('./assets/enemie.png');
  spaceshipImage = loadImage('./assets/spaceship.png');
  //invaderKilled = loadSound('./assets/invaderKilled.mp3');
  //playerShoot = loadSound('./assets/shoot.mp3');
  scoreText = document.querySelector(".score");
  bg = loadImage('./assets/bg.png');
}

function setup() {
  createCanvas(1000, 600);
  spaceship = new SpaceShip();
  for (let i = 0; i < NUMBER_ENEMIES; i++) {
    enemies.push(new Enemie(i * 100 + 50, yEnemies));
  }
}

function keyPressed() {
  if (!lost) {
    if (keyCode === RIGHT_ARROW) {
      spaceship.vel = 5;
    } else if (keyCode === LEFT_ARROW) {
      spaceship.vel = -5;
    } else if (key === ' ') {
      spaceship.shoot();
    }
  }
}

function keyReleased() {
  if (key != ' ') {
    spaceship.vel = 0;
  }
}

function draw() {
  imageMode(CORNER);
  image(bg, 0, 0, 1000, 600);
  spaceship.move();
  spaceship.render();
  for (let i = 0; i < enemies.length; i++) {
    if (enemies[i].pos.x < 0 || enemies[i].pos.x > width) {
      xVelEnemies *= -1;
      for (let j = 0; j < enemies.length; j++) {
        enemies[j].move(0, yVelEnemies);
      }
    }
    if (enemies[i].pos.y > 480) {
      lost = true;
    }
    enemies[i].move(xVelEnemies, 0);
    enemies[i].render();
  }

  for (let i = spaceship.lasers.length - 1; i >= 0; i--) {
    for (let j = enemies.length - 1; j >= 0; j--) {
      if (spaceship.lasers[i].hits(enemies[j])) {
        //invaderKilled.play();
        score++;
        enemies.splice(j, 1);
        spaceship.lasers.splice(i, 1);
        break;
      }
    }
  }

  if (enemies.length === 0 && frameCount % 400 === 0 && !won) {
    xVelEnemies *= 1.3;
    yEnemies += 20;
    for (let i = 0; i < NUMBER_ENEMIES; i++) {
      enemies.push(new Enemie(i * 100 + 50, yEnemies));
    }
  }

  if (score == 100) {
    won = true;
  }

  fill(168, 50, 166);
  stroke(255);
  strokeWeight(5);
  if (!lost && !won) {
    scoreText.innerText = `SCORE: ${score}`;
  }
  if (lost) {
    scoreText.innerText = `YOU LOST! YOUR SCORE: ${score}`
  }
  if (won) {
    scoreText.innerText = `YOU WON! YOUR SCORE: ${score}`;
  }

}
