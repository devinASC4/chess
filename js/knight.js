function Knight (x,y, color) {
    this.color = color;
    this.x = x;
    this.y = y;
    this.image = "";
    this.moves = function(x,y){
        this.x += x;
        this.y += y;
    }
}