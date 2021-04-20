import Paddle from './paddle.js';
import InputHandler from './input.js';
import Ball from './ball.js';
import Brick from './brick.js';
import {buildLevel, level1} from './levels.js';

export default class Game {
    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

    }

    start(){
        this.ball = new Ball(this);
        this.paddle = new Paddle(this);
        //let brick = new Brick(this, {x:20, y:20});

        //let bricks=[];
        let bricks = buildLevel(this, level1);


        this.gameObjects = [
            this.ball,
            this.paddle,
            ...bricks
        ];


        new InputHandler(this.paddle);
    }

    update(deltaTime){
        this.gameObjects.forEach((Object) => Object.update(deltaTime));
        this.gameObjects = this.gameObjects.filter(
            object => !object.markedForDeletion);
    }

    draw(ctx){

        this.gameObjects.forEach((Object) => Object.draw(ctx));

        }
}