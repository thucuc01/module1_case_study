
function game(){
    ctx.clearRect(0,0,500,500);
    food.draw();
    document.addEventListener('keydown',button_handle);
    for (let i=0; i<snake.length; i++) {
        if (i=== snake.length-1) {
            snake[i].drawHead();
        } else {
            snake[i].draw();
        }
        snake[snake.length-1].eatFood(food);
    }
    snake.push(new Snake(head_x,head_y,unit-2,unit-2));
    snake.shift();
    if (head_x<0 && direct!==2){
        head_x=canv.width-unit;
    } else if (head_y<0 && direct !== 4){
        head_y=canv.width-unit;
    } else if (head_x>=canv.width && direct !== 1){
        head_x=0;
    } else if (head_y>=canv.width && direct !== 3){
        head_y=0;
    } else {
        head_x+=dx*unit;
        head_y+=dy*unit;
    }
    console.log(snake);
    snake[snake.length-1].checkLose();

}
set = setInterval(game,150);
function button_handle (event) {
    for (let i = 0; i<snake.length; i++) {
        snake[i].presKey(event);
    }

}

