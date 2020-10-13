class Players{
    constructor(){

    }

    getPlayerCount(){
        var playerCountref = database.ref("playerCount");
        playerCountref.on("value", function(data){
            player_count = data.val();
        })
    }

    updatePlayerCount(count){
        var playerCountref = database.ref("/");
        playerCountref.update({
            playerCount: count
        })
    }

    updatePlayerName(name){
        var playerIndex = "player" + player_count;
        var playerNameref = database.ref(playerIndex);
        playerNameref.set({name: name});
    }
}