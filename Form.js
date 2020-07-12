class Form{
    constructor(){
        this.Title = createElement('h1');
        this.inputbox = createInput("NAME");
        this.button = createButton("SAVE");
        this.greet = createElement('h3');
    }

    display(){
        
        this.Title.html("CAR RACING");
       this.Title.position(130,0);

        
       this.inputbox.position(130,160);

        
        this.button.position(250,200);

       
        
        this.button.mousePressed(()=>{
            this.inputbox.hide();
            this.button.hide();
            player.name= this.inputbox.value();
            playercount=playercount+1;
            player.index=playercount;
            console.log(playercount);
            player.updatePlayerCount(playercount);
            player.updatePlayerInfo();
            this.greet.html("Welcome"+player.name);
            this.greet.position(130,160);
        })
    }

    hide(){
        this.greet.hide();
        this.button.hide();
        this.inputbox.hide();
    }
}