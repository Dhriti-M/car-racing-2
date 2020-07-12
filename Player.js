class Player{
 constructor(){
   this.index=null;
   this.name=null;
   this.distance=0;

 }

 getPlayerCount(){
     var ref = database.ref("playerCount");
     ref.on("value",function(data){
         playercount = data.val();
     })

 }

 updatePlayerCount(count){
      var countref =database.ref('/');
      countref.update({
          playerCount:count
      })
 }

 updatePlayerInfo(){
     var playerindex = "Players/player"+ this.index;
     var ref = database.ref(playerindex);
      ref.set({
          Name: this.name,
          Distance:this.distance
      })
 }

 static getAllPlayersInfo(){
   var ref=database.ref("Players");
   ref.on("value",(data)=>{
       allplayers=data.val();
       
   })
 }
}