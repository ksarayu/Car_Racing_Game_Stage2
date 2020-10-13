class Game{
    constructor(){

    }

    getGameState(){
        var gameStateref = database.ref("gameState");
        gameStateref.on("value", function (data){
            game_state = data.val();
        })
    }

    updateGameState(state){
        var gameStateref = database.ref("/");
        gameStateref.update({
            gameState: state
        })
    }

    start(){
        if (game_state === 0){
            players = new Players();
            players.getPlayerCount();
            form = new Form();
            form.display();
        }
    }
}