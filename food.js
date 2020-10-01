let Food = function (x,y){
    this.x=x;
    this.y=y;
    this.draw=function (){
        ctx.fillStyle='red';
        ctx.fillRect(this.x,this.y,unit-2,unit-2);
    }
}
var food= new Food(food_x,food_y);