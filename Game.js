class Game{
    constructor(){
    
    }
    getState(){
        var gamestateref = database.ref('gamestate');
        gamestateref.on("value",function(data){
            gameState= data.val();
        })
    }
    update(data){
   database.ref('/').update({
       gamestate: data
   })
   
    }
   async start(){
        if (gameState===0){
            player = new Player();
            var playerCountref=await database.ref('playercount').once("value");
            if(playerCountref.exists()){
                playerCount=playerCountref.val()
                player.getCount();
            }
          
            form = new Form();
            form.display();
        }
        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);
        cars = [car1,car2,car3,car4]
    }
    play(){
        form.hide();
        text("game start", 120,100);
        Player.getPlayerinfo();
        if(allPlayers!==undefined){
       var displayPosition = 130;
       var index = 0, x = 0, y;
       for(var plr in allPlayers){
     index = index+1
     x = x+200
     y = displayHeight-allPlayers[plr].distance;
     cars[index-1].x = x
     cars[index-1].y = y
     if(index===player.index){
         cars[index-1].shapeColor = "red";
         camera.position.x = displayWidth/2;
         camera.position.y= cars[index-1].y
     }
        }
    }
    if(keyDown(UP_ARROW)&&player.index!==null){
        player.distance += 50
        player.update();
    }
    drawSprites();
    }
}
