const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
 
var ground1 
var division = [] 
var divisionHeight = 300;
var plinko = []
var particle = []


function preload() {
}

function setup(){
    var canvas = createCanvas(480,600);
    engine = Engine.create();
    world = engine.world;


    ground1 = new Ground(240,595,480,10);
   
  
    for(var k = 0 ; k <=width ; k = k+80){

        division.push(new Division(k , height-divisionHeight/2,10,divisionHeight));
     
      }
      for(var a = 0 ; a <=width ; a = a+60){

        plinko.push(new Plinko(a,100,10));
     
      }
      for(var b = 0 ; b <=width ; b = b+60){

        plinko.push(new Plinko(b,150,10));
     
      }

      for(var c = 0 ; c <=width ; c = c+60){

        plinko.push(new Plinko(c,200,10));
     
      }

      for(var d = 0 ; d <=width ; d = d+60){

        plinko.push(new Plinko(d,250,10));
     
      }
    
      

     

    

    
}

function draw(){

    background("black");

    Engine.update(engine);

    if(frameCount%60===0){

        particle.push(new Particle(random(width/2-10,width/2+10),10,10));
 
       }
   
   
    ground1.display();
    
    for(var i = 0 ; i < division.length ; i++){

        division[i].display();

    }

    for(var z = 0 ; z < plinko.length ; z++){

        plinko[z].display();

    }
    for(var y = 0 ; y < plinko.length ; y++){

        plinko[y].display();

    }
    for(var x = 0 ; x < plinko.length ; x++){

        plinko[x].display();

    }
    for(var w = 0 ; w < particle.length ; w++){

        particle[w].display();

    }
    
}
