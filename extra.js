
var ball;
var database,pos;
function setup(){
    createCanvas(500,500);
    ball = createSprite(200,200,10,10);
    ball.shapeColor = "red";
    database=firebase.database();
    var positionref=database.ref("ball/position");
    positionref.on("value",readposition,showerror);

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writepos(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writepos(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writepos(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
         writepos(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readposition(data){
  pos=data.val();
  ball.x=pos.x;
  ball.y=pos.y;

}

function showerror(){
    console.log("error");
}

function writepos(x,y){
    var ballposref=database.ref("ball/position");
    ballposref.set({
        x:pos.x+x,
        y:pos.y+y

    })
}