class Form{
    constructor(){

    }

    display(){
        var title = createElement("h2");
        title.position(130,0);
        title.html("Racing Rodeo!!");
        
        var inputBox = createInput("Name: ");
        inputBox.position(130,160);

        var submitButton = createButton("Start Now!!");
        submitButton.position(250,200);

        var greeting = createElement("h4");

        submitButton.mousePressed(function(){
            inputBox.hide();
            submitButton.hide();
            var nameExtract = inputBox.value();
            player_count = player_count + 1;
            players.updatePlayerCount(player_count);
            players.updatePlayerName(nameExtract);
            greeting.position(130,160);
            greeting.html("Welcome to the game," + nameExtract + "!! Please wait for the other players to join.");
        })
    }
}