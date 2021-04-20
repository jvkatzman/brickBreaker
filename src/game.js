import Paddle from './paddle.js';
import InputHandler from './input.js';
import Ball from './ball.js';
import Brick from './brick.js';
import {buildLevel, level1} from './levels.js';

const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3
};


export default class Game {
    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

    }

    start(){
        this.gamestate=GAMESTATE.RUNNING;
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


        new InputHandler(this.paddle, this);
    }

    update(deltaTime){
        if (this.gamestate == GAMESTATE.PAUSED) return;
        this.gameObjects.forEach((Object) => Object.update(deltaTime));
        this.gameObjects = this.gameObjects.filter(
            object => !object.markedForDeletion);
    }

    draw(ctx){

        this.gameObjects.forEach((Object) => Object.draw(ctx));

        if (this.gamestate==GAMESTATE.PAUSED){
            // cover whole screen with color
            ctx.rect(0,0,this.gameWidth, this.gameHeight);
            ctx.fillStyle="rgba(0,0,0,0.5)";
            ctx.fill();

            ctx.font = "30px Ariel";
            ctx.fillStyle="white";
            ctx.textAlign = "center";
            ctx.fillText("Paused",this.gameWidth/2, this.gameHeight/2);
        }

        }

    togglePause(){
        if (this.gamestate == GAMESTATE.PAUSED) {
            this.gamestate=GAMESTATE.RUNNING;
        } else {
            this.gamestate = GAMESTATE.PAUSED;
        }


        }
}