var ball1;
var database, position
var form1, game1, player1
var gameState=0
var playerCount
function setup(){
    database = firebase.database()
    createCanvas(500,500);
    game1=new game()
    game1.getState()
    game1.start()
}

function draw(){
    background("white");
    drawSprites();
}