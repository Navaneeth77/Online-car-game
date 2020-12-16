var database;
var position;
var gameState = 0,playerCount,form,player,game;
var allPlayers;
var car1,car2,car3,car4,cars;
function setup(){
    database = firebase.database();

    createCanvas(displayWidth-20,displayHeight-30);
    game = new Game()
    game.getState()
    game.start()
}

function draw(){
 if(playerCount===4){
     game.update(1);

 }
 if(gameState===1){
     clear();
     game.play()
 }
    drawSprites();
}
