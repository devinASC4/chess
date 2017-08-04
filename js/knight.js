function Knight (x,y, color) {
    this.color = color;
    this.x = x;
    this.y = y;
    this.image = "/img/chess_piece_white_knight_T.png";
    this.moves = function(x,y){
        this.x += x;
        this.y += y;
    }
}