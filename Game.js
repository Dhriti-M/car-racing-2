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
    }
     
    play(){
        form.hide();
        text("PLAY NOW",120,100);
        Player.getAllPlayersInfo();
        if(allplayers!==undefined){
            var y =120;
            for(var plr in allplayers){
                if(plr==="player"+player.index){
                    fill("red");
                }
            text(allplayers[plr].Name+":"+allplayers[plr].Distance,100,y);
            y=y+50;
            }
        }
           if (keyIsDown(UP_ARROW)&&player.index!==null){
               player.distance=player.distance+50;
               player.updatePlayerInfo();
           }



    }
}