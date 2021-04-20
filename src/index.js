import Game from './game.js';

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

// alert('from index gameWidth')
// alert(GAME_WIDTH );

let game = new Game(GAME_WIDTH, GAME_HEIGHT);

//ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);

// let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
// let ball = new Ball(GAME_WIDTH, GAME_HEIGHT);

// new InputHandler(paddle);

let lastTime =0;


function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);
    game.update(deltaTime);
    game.draw(ctx); 
    // get timestamp
    requestAnimationFrame(gameLoop);
}
    //gameLoop();
    requestAnimationFrame(gameLoop);