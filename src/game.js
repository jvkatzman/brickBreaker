import Paddle from './paddle.js';
import InputHandler from './input.js';
import Ball from './ball.js';

export default class Game {
    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        // alert('from game constructor gameWidth')
        // alert(this.gameWidth);

    }

    start(){
        // alert('from game gameWidth')
        // alert(this.gameWidth);
        this.ball = new Ball(this);
        this.paddle = new Paddle(this);

        this.gameObjects = [
            this.ball,
            this.paddle
        ];


        new InputHandler(this.paddle);
    }

    update(deltaTime){
        this.gameObjects.forEach((Object) => Object.update(deltaTime));
    }

    draw(ctx){

        this.gameObjects.forEach((Object) => Object.draw(ctx));

        }
}