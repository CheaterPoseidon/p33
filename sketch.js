var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var particles = [];
var particle;
var plinkos = [];
var divisions = []
var divisionHeight = 300;
var score = 0;
var turn = 0;
var gameState = "start";
function mousePressed() {
  if (gameState !== "end") {
    particle = new Particle(mouseX, 10, 10, 10)

    turn = turn + 1
  }
}
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height, width, 20);


  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
  }


  for (var j = 75; j <= width; j = j + 50) {

    plinkos.push(new Plinko(j, 75));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {

    plinkos.push(new Plinko(j, 175));
  }

  for (var j = 75; j <= width; j = j + 50) {

    plinkos.push(new Plinko(j, 275));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {

    plinkos.push(new Plinko(j, 375));
  }





}



function draw() {
  background("black");
  textSize(20)
  text("Score : " + score, 20, 30);
  text("5", 35, 550)
  text("5", 115, 550)
  text("5", 195, 550)
  text("5", 275, 550)
  text("1", 355, 550)
  text("1", 435, 550)
  text("1", 515, 550)
  text("2", 595, 550)
  text("2", 675, 550)
  text("2", 755, 550)

  Engine.update(engine);


  for (var i = 0; i < plinkos.length; i++) {

    plinkos[i].display();

  }


  if (particle != null) {
    particle.display();

    if (particle.body.position.y > 760) {
      if (particle.body.position.x < 300) {
        score = score + 500;
        particle = null;
        if (turn >= 5) {
          gameState = "end"
        }


      }


      else if (particle.body.position.x > 301 && particle.body.position.x < 600) {
        score = score + 100;
        particle = null;
        if (turn >= 5) {
          gameState = "end"
        }


        }

          else if(particle.body.position.x>601&&particle.body.position.x<900){
            score=score+200;
            particle=null;
            if (turn >= 5) {
              gameState = "end"
            }


          }
      }
    
  }
  for (var k = 0; k < divisions.length; k++) {

    divisions[k].display();
  }
  console.log(gameState)
  console.log(turn)
   if(gameState=="end"){
     fill(255,0,0)
     textSize(60)
     text("Game Over",300,330)
    }
}


