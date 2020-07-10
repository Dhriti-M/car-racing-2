var playercount = 0;
var gamestate = 0 ;
var allplayers;
var distance=0;

var form , game , player ;
var database;


function setup(){

    createCanvas(800,800);


    database=firebase.database();

    game=new Game();
    game.getGamestate();
    game.start();


}

function draw(){

}