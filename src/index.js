import Paddle from './paddle.js';
import InputHandler from './input.js';
import Ball from './ball.js';

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;


ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
let ball = new Ball();

new InputHandler(paddle);

// paddle.draw(ctx);
// ball.draw(ctx);

let lastTime =0;

//images
//let imgBall = //document.getElementById('img_ball');


function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0,0,800,600);
    paddle.update(deltaTime);   
    paddle.draw(ctx);
    ball.draw(ctx);
    //ctx.drawImage(imgBall,10,10,16,16);
    

    // get timestamp
    requestAnimationFrame(gameLoop);
}
    gameLoop();