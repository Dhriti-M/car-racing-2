class Game{
    constructor(){
    
    }

    getGamestate(){
        //gamestste refer 
        var ref = database.ref("gameState");
        ref.on("value",function(data){
            gamestate = data.val();
        })
    }

    updateGameState(state){
    var ref = database.ref('/');
    ref.update({
        gameState:state
    })
    }

    start(){
        if (gamestate === 0){
            player=new Player()
            player.getPlayerCount();
            form=new Form();
            form.display();
        }
        car1=createSprite(100,200,50,50);
        car2=createSprite(200,200,50,50);
        carset=[car1,car2];
    }
     
    play(){
        form.hide();
        text("PLAY NOW",120,100);
        Player.getAllPlayersInfo();
        if(allplayers!==undefined){
            var y ,x,index;
            index=0;
            x=100;
            for(var plr in allplayers){
              y=displayHeight-allplayers[plr].Distance;
              carset[index].y = y;
              carset[index].x = x;
              x=x+100;
              index=index+1;
              if(index===player.index){
                  carset[index-1].shapeColor="red";
                  camera.position.x=displayWidth/2;
                  camera.position.y=carset[index-1].y;
              }
            }
        }
           if (keyIsDown(UP_ARROW)&&player.index!==null){
               player.distance=player.distance+50;
               player.updatePlayerInfo();
           }



    }
}