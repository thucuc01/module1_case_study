
let Snake= function (head_x, head_y, width, height) {
    this.x=head_x;
    this.y=head_y;
    this.width=width;
    this.height = height;
    this.snake_length= 1;
    this.draw = function() {
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, unit-2, unit-2)
    }

    this.drawHead = function() {
        ctx.fillStyle = 'black';
        ctx.fillRect(this.x, this.y, unit-2, unit-2)
    }
    this.eatFood= function (food) {
        if (food.x===this.x && food.y===this.y) {
            soundEat.play();
            snake.push(new Snake(food.x, food.y,this.width, this.height));
            this.snake_length++;
            score+=10;
            document.getElementById('diem').innerHTML=score;
            food.x=Math.floor(Math.random()*20)*unit;
            food.y=Math.floor(Math.random()*20)*unit;
        }
    }
    this.checkLose=function () {
        for (let i = 0; i < snake.length - 1; i++) {

            if (snake[snake.length - 1].x === snake[i].x && snake[snake.length - 1].y === snake[i].y && snake.length>=2) {
                soundOver.play();
                clearInterval(set);
                ctx.font = "50px Georgia";
                ctx.fillText("GAME OVER !", 50, 50);
            }
        }
    }
    this.presKey=function (key) {
        if (key.keyCode === 37 && direct !== 2) {
            dx = -1;
            dy = 0;
            direct = 1;
        }
        if (key.keyCode === 38 && direct !== 4) {
            dx = 0;
            dy = -1;
            direct = 3;
        }
        if (key.keyCode === 39 && direct !== 1) {
            dx = 1;
            dy = 0;
            direct = 2;
        }
        if (key.keyCode === 40 && direct !== 3) {
            dx = 0;
            dy = 1;
            direct = 4;
        }
    }
}
snake.push(new Snake(head_x, head_y, unit, unit));



