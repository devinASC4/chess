function Queen (x,y, color) {
    this.color = color;
    this.x = x;
    this.y = y;
    this.moves = function(x,y){
        this.x += x;
        this.y += y;
    }
}