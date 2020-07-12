var playercount = 0;
var gamestate = 0 ;
var allplayers;
var distance=0;

var form , game , player ;
var database;
var car1,car2;
var carset=[];


function setup(){

    createCanvas(displayWidth,displayHeight);


    database=firebase.database();

    game=new Game();
    game.getGamestate();
    game.start();

    


}

function draw(){
if (playercount===2){
    game.updateGameState(1);
}
if (gamestate===1){
    clear();
    game.play();
}
drawSprites();
    
}