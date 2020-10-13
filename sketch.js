var database;
var game_state = 0;
var player_count = 0;
var form, game, players;

function setup(){
    createCanvas(400,400);

    database = firebase.database();

    game = new Game();
    game.getGameState();
    game.start();
}

function draw(){

}