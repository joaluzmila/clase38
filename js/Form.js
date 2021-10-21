class Form{
    constructor(){
        this.input = createInput("name");
        this.button = createButton("play");
        this.greeting = createElement("h3");
    }

    hide(){
        this.greeting.hide();
        this.input.hide ();
        this.button.hide();
    }

    display(){
        var tittle = createElement('h2')
        tittle.html("Juego de Carreras");
        tittle.position(displayWidth/2-50,0);
        
        this.input.position(displayWidth/2-40,displayHeight/2-80);
        this.button.position(displayWidth/2+30,displayHeight/2);
        this.button.mousePressed (()=>{
            this.input.hide ();
            this.button.hide();
            player.name = this.input.value();
            playerCount+= 1;
            player.index = playerCount;
            player.update()
            player.updateCount(playerCount);
            this.greeting = createElement ('h3');
            this.greeting.html("hola "+player.name);
            this.greeting.position(displayWidth/2-70,displayHeight/4);   
        })
    }
}